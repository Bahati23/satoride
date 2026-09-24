import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';

import {
  APP_TAG,
  KIND_SERVICE,
  parseService,
  type VehicleService,
} from '@/lib/satoride';

/** Fetch every published SatoRide mobility service (deduped per coordinate). */
export function useVehicles() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'services'],
    queryFn: async ({ signal }) => {
      const events = await nostr.query(
        [{ kinds: [KIND_SERVICE], '#t': [APP_TAG], limit: 200 }],
        { signal },
      );

      // Addressable events: keep only the newest version of each coordinate.
      const byCoordinate = new Map<string, VehicleService>();
      for (const event of events) {
        const service = parseService(event);
        if (!service) continue;
        const existing = byCoordinate.get(service.coordinate);
        if (!existing || event.created_at > existing.event.created_at) {
          byCoordinate.set(service.coordinate, service);
        }
      }

      return [...byCoordinate.values()].sort(
        (a, b) => b.event.created_at - a.event.created_at,
      );
    },
  });
}

/** Fetch a single service by author + d-tag (used by naddr payment pages). */
export function useVehicle(pubkey: string | undefined, d: string | undefined) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'service', pubkey, d],
    enabled: Boolean(pubkey && d),
    queryFn: async ({ signal }) => {
      const events = await nostr.query(
        [{ kinds: [KIND_SERVICE], authors: [pubkey!], '#d': [d!], limit: 1 }],
        { signal },
      );
      const latest = events.sort((a, b) => b.created_at - a.created_at)[0];
      return latest ? (parseService(latest) ?? null) : null;
    },
  });
}

/** Services owned by a specific worker/operator. */
export function useMyVehicles(pubkey: string | undefined) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['satoride', 'my-services', pubkey],
    enabled: Boolean(pubkey),
    queryFn: async ({ signal }) => {
      const events = await nostr.query(
        [{ kinds: [KIND_SERVICE], authors: [pubkey!], '#t': [APP_TAG], limit: 100 }],
        { signal },
      );

      const byCoordinate = new Map<string, VehicleService>();
      for (const event of events) {
        const service = parseService(event);
        if (!service) continue;
        const existing = byCoordinate.get(service.coordinate);
        if (!existing || event.created_at > existing.event.created_at) {
          byCoordinate.set(service.coordinate, service);
        }
      }

      return [...byCoordinate.values()].sort(
        (a, b) => b.event.created_at - a.event.created_at,
      );
    },
  });
}
