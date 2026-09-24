import { useNostr } from '@nostrify/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { generateSecretKey, finalizeEvent } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  APP_TAG,
  KIND_PAYMENT,
  KIND_SERVICE,
  KIND_WORKER_SETTINGS,
  kesToSats,
  parsePayment,
  slugify,
  type ServiceType,
  type VehicleService,
  type WorkerSettings,
} from '@/lib/satoride';
import { refundSats, spendSats } from '@/lib/wallet';
import { signAsGuest } from '@/lib/guest';

export interface RegisterVehicleInput {
  name: string;
  plate?: string;
  type: ServiceType;
  route: string;
  fare: number;
}

/** Publish (or update) a mobility service listing — kind 31483. */
export function useRegisterVehicle() {
  const { user } = useCurrentUser();
  const { nostr } = useNostr();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: RegisterVehicleInput) => {
      if (!user) throw new Error('Log in to register a vehicle or service.');

      const d = slugify(input.plate?.trim() ? input.plate : input.name);
      if (!d) throw new Error('A vehicle plate or service name is required.');

      const tags: string[][] = [
        ['d', d],
        ['t', APP_TAG],
        ['name', input.name.trim()],
        ['type', input.type],
        ['route', input.route.trim()],
        ['fare', String(Math.round(input.fare))],
        ['currency', 'KES'],
        ['alt', 'SatoRide mobility service listing'],
      ];
      if (input.plate?.trim()) tags.push(['plate', input.plate.trim().toUpperCase()]);

      const event = await user.signer.signEvent({
        kind: KIND_SERVICE,
        content: '',
        tags,
        created_at: Math.floor(Date.now() / 1000),
      });

      await nostr.event(event, { signal: AbortSignal.timeout(8000) });
      return event;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['satoride', 'services'] });
      queryClient.invalidateQueries({ queryKey: ['satoride', 'my-services'] });
    },
  });
}

/** Save the worker's automatic savings rules — kind 19259. */
export function useUpdateWorkerSettings() {
  const { user } = useCurrentUser();
  const { nostr } = useNostr();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (settings: WorkerSettings) => {
      if (!user) throw new Error('Log in to save savings rules.');

      const event = await user.signer.signEvent({
        kind: KIND_WORKER_SETTINGS,
        content: '',
        tags: [
          ['t', APP_TAG],
          ['savings', String(settings.savingsPercent)],
          ['emergency', String(settings.emergencyPercent)],
          ['emergency_goal', String(settings.emergencyGoal)],
          ['alt', 'SatoRide transport worker savings settings'],
        ],
        created_at: Math.floor(Date.now() / 1000),
      });

      await nostr.event(event, { signal: AbortSignal.timeout(8000) });
      return settings;
    },
    onSuccess: (settings) => {
      queryClient.setQueryData(['satoride', 'worker-settings', user?.pubkey], settings);
      queryClient.invalidateQueries({ queryKey: ['satoride', 'worker-settings'] });
    },
  });
}

export interface PayFareResult {
  receipt: string;
  sats: number;
  eventId: string;
}

/**
 * Pay a fare.
 *
 * Debits the demo Lightning wallet, then publishes a real payment record
 * (kind 5027) to Nostr — signed by the logged-in account, or by a persistent
 * on-device guest key so receipts still work without sign-up. If publishing
 * fails, the wallet is refunded.
 */
export function usePayFare() {
  const { user } = useCurrentUser();
  const { nostr } = useNostr();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (service: VehicleService): Promise<PayFareResult> => {
      const sats = kesToSats(service.fare);

      if (!spendSats(sats)) {
        throw new Error('Insufficient demo balance — top up from the faucet.');
      }

      const template = {
        kind: KIND_PAYMENT,
        content: `Paid KSh ${service.fare} — ${service.name}${service.route ? ` (${service.route})` : ''}`,
        tags: [
          ['t', APP_TAG],
          ['a', service.coordinate],
          ['p', service.pubkey],
          ['amount', String(service.fare)],
          ['sats', String(sats)],
          ['currency', 'KES'],
          ['service', service.type],
          ['alt', 'SatoRide fare payment record'],
        ],
        created_at: Math.floor(Date.now() / 1000),
      };

      try {
        const event: NostrEvent = user
          ? await user.signer.signEvent(template)
          : signAsGuest(template);

        await nostr.event(event, { signal: AbortSignal.timeout(8000) });

        const payment = parsePayment(event);
        return {
          receipt: payment?.receipt ?? `SR${event.id.slice(0, 6).toUpperCase()}`,
          sats,
          eventId: event.id,
        };
      } catch (error) {
        refundSats(sats);
        throw error instanceof Error
          ? error
          : new Error('Payment could not be published. Please try again.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['satoride', 'payments'] });
    },
  });
}

/**
 * Demo tool for the worker dashboard: simulates a passenger paying, signed by
 * a throwaway key, so workers can watch payments land live during a pitch.
 */
export function useSimulatePassengerPayment() {
  const { nostr } = useNostr();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (service: VehicleService) => {
      const sats = kesToSats(service.fare);
      const event = finalizeEvent(
        {
          kind: KIND_PAYMENT,
          content: `Paid KSh ${service.fare} — ${service.name}${service.route ? ` (${service.route})` : ''}`,
          tags: [
            ['t', APP_TAG],
            ['a', service.coordinate],
            ['p', service.pubkey],
            ['amount', String(service.fare)],
            ['sats', String(sats)],
            ['currency', 'KES'],
            ['service', service.type],
            ['alt', 'SatoRide fare payment record'],
          ],
          created_at: Math.floor(Date.now() / 1000),
        },
        generateSecretKey(),
      ) as NostrEvent;

      await nostr.event(event, { signal: AbortSignal.timeout(8000) });
      return event;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['satoride', 'payments'] });
    },
  });
}
