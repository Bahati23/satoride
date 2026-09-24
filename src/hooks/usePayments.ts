import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent, NostrFilter } from '@nostrify/nostrify';

import {
  APP_TAG,
  KIND_PAYMENT,
  parsePayment,
  type PaymentRecord,
} from '@/lib/satoride';

function dedupeAndSort(events: NostrEvent[]): PaymentRecord[] {
  const seen = new Map<string, PaymentRecord>();
  for (const event of events) {
    const payment = parsePayment(event);
    if (payment && !seen.has(payment.id)) seen.set(payment.id, payment);
  }
  return [...seen.values()].sort((a, b) => b.createdAt - a.createdAt);
}

/** Recent payments across the whole platform (operator view, activity ticker). */
export function useAllPayments(limit = 200) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'payments', 'all', limit],
    refetchInterval: 15_000,
    queryFn: async ({ signal }) => {
      const filters: NostrFilter[] = [
        { kinds: [KIND_PAYMENT], '#t': [APP_TAG], limit },
      ];
      const events = await nostr.query(filters, { signal });
      return dedupeAndSort(events);
    },
  });
}

/** Payments made by a passenger (receipt history). */
export function usePassengerPayments(pubkey: string | undefined) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'payments', 'passenger', pubkey],
    enabled: Boolean(pubkey),
    refetchInterval: 15_000,
    queryFn: async ({ signal }) => {
      const filters: NostrFilter[] = [
        { kinds: [KIND_PAYMENT], authors: [pubkey!], limit: 200 },
      ];
      const events = await nostr.query(filters, { signal });
      return dedupeAndSort(events).filter((p) =>
        p.event.tags.some(([n, v]) => n === 't' && v === APP_TAG),
      );
    },
  });
}

/** Payments received by a worker — live-ish via polling for the dashboard. */
export function useWorkerPayments(pubkey: string | undefined) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'payments', 'worker', pubkey],
    enabled: Boolean(pubkey),
    refetchInterval: 10_000,
    queryFn: async ({ signal }) => {
      const filters: NostrFilter[] = [
        { kinds: [KIND_PAYMENT], '#p': [pubkey!], limit: 300 },
      ];
      const events = await nostr.query(filters, { signal });
      return dedupeAndSort(events);
    },
  });
}

/** Payments referencing one vehicle coordinate. */
export function useVehiclePayments(coordinate: string | undefined) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'payments', 'vehicle', coordinate],
    enabled: Boolean(coordinate),
    refetchInterval: 15_000,
    queryFn: async ({ signal }) => {
      const filters: NostrFilter[] = [
        { kinds: [KIND_PAYMENT], '#a': [coordinate!], limit: 100 },
      ];
      const events = await nostr.query(filters, { signal });
      return dedupeAndSort(events);
    },
  });
}
