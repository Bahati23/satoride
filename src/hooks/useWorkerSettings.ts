import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';

import {
  DEFAULT_WORKER_SETTINGS,
  KIND_WORKER_SETTINGS,
  parseWorkerSettings,
  type WorkerSettings,
} from '@/lib/satoride';

/** A worker's savings rules (kind 19259). Falls back to sensible defaults. */
export function useWorkerSettings(pubkey: string | undefined) {
  const { nostr } = useNostr();

  return useQuery<WorkerSettings>({
    queryKey: ['satoride', 'worker-settings', pubkey],
    enabled: Boolean(pubkey),
    queryFn: async ({ signal }) => {
      const events = await nostr.query(
        [{ kinds: [KIND_WORKER_SETTINGS], authors: [pubkey!], limit: 1 }],
        { signal },
      );
      const latest = events.sort((a, b) => b.created_at - a.created_at)[0];
      return (latest && parseWorkerSettings(latest)) || DEFAULT_WORKER_SETTINGS;
    },
    placeholderData: DEFAULT_WORKER_SETTINGS,
  });
}
