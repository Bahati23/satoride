import { useSyncExternalStore } from 'react';

/**
 * Demo Lightning wallet.
 *
 * The hackathon prototype simulates Lightning settlement client-side: a demo
 * sats balance persisted in localStorage that is debited when the passenger
 * pays a fare. Payment *records* are real Nostr events; the money movement is
 * a stand-in for a testnet Lightning wallet / NWC integration (phase 2).
 */

const STORAGE_KEY = 'satoride:demo-wallet';
const FAUCET_AMOUNT = 25_000; // sats per top-up
const STARTING_BALANCE = 50_000; // sats

interface WalletState {
  balance: number;
  totalToppedUp: number;
}

const listeners = new Set<() => void>();

function load(): WalletState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<WalletState>;
      if (typeof parsed.balance === 'number' && Number.isFinite(parsed.balance)) {
        return {
          balance: Math.max(0, Math.round(parsed.balance)),
          totalToppedUp:
            typeof parsed.totalToppedUp === 'number' ? parsed.totalToppedUp : 0,
        };
      }
    }
  } catch {
    // Corrupted storage — fall through to defaults.
  }
  return { balance: STARTING_BALANCE, totalToppedUp: 0 };
}

let state: WalletState = load();

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable (private mode) — wallet lives in memory only.
  }
}

function setState(next: WalletState) {
  state = next;
  persist();
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): WalletState {
  return state;
}

/** Attempt to spend sats from the demo wallet. Returns false if insufficient. */
export function spendSats(sats: number): boolean {
  if (sats <= 0 || state.balance < sats) return false;
  setState({ ...state, balance: state.balance - sats });
  return true;
}

/** Refund sats (used if publishing the payment record fails after debit). */
export function refundSats(sats: number) {
  if (sats <= 0) return;
  setState({ ...state, balance: state.balance + sats });
}

/** Demo faucet — tops up the wallet like a testnet Lightning faucet would. */
export function topUpWallet() {
  setState({
    balance: state.balance + FAUCET_AMOUNT,
    totalToppedUp: state.totalToppedUp + FAUCET_AMOUNT,
  });
}

export function useDemoWallet() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot);
  return {
    balance: snapshot.balance,
    totalToppedUp: snapshot.totalToppedUp,
    faucetAmount: FAUCET_AMOUNT,
    spend: spendSats,
    refund: refundSats,
    topUp: topUpWallet,
  };
}
