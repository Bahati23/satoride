import { generateSecretKey, getPublicKey, finalizeEvent } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

/**
 * Guest identity.
 *
 * Passengers can pay a fare without creating a Nostr account first. A
 * throwaway keypair is generated once and persisted locally, so receipts stay
 * attributable to "this device" and appear in the passenger's history. The
 * passenger can later create a full account; the guest key never holds funds.
 */

const STORAGE_KEY = 'satoride:guest-key';

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

let cachedSecretKey: Uint8Array | undefined;

export function getGuestSecretKey(): Uint8Array {
  if (cachedSecretKey) return cachedSecretKey;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && /^[0-9a-f]{64}$/.test(raw)) {
      cachedSecretKey = hexToBytes(raw);
      return cachedSecretKey;
    }
  } catch {
    // Storage unavailable — generate an in-memory key.
  }
  cachedSecretKey = generateSecretKey();
  try {
    localStorage.setItem(STORAGE_KEY, bytesToHex(cachedSecretKey));
  } catch {
    // In-memory only.
  }
  return cachedSecretKey;
}

export function getGuestPubkey(): string {
  return getPublicKey(getGuestSecretKey());
}

export function signAsGuest(template: {
  kind: number;
  content: string;
  tags: string[][];
  created_at: number;
}): NostrEvent {
  return finalizeEvent(template, getGuestSecretKey()) as NostrEvent;
}
