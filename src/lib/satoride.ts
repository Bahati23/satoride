import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

/**
 * SatoRide data model — see NIP.md for the full schema documentation.
 *
 * kind 31483 (addressable) — mobility service listing (matatu, boda, parking, ...)
 * kind 5027  (regular)     — fare payment record
 * kind 19259 (replaceable) — transport worker savings settings
 */
export const KIND_SERVICE = 31483;
export const KIND_PAYMENT = 5027;
export const KIND_WORKER_SETTINGS = 19259;

/** All SatoRide events carry this `t` tag so relays can filter them efficiently. */
export const APP_TAG = 'satoride';

/** Demo fleet published for the hackathon so the app has instant, real content. */
export const DEMO_FLEET_PUBKEY =
  '708ded5f41a2a9ad08f878e567d4b2a68ac953b07b5f46c1758a336762d1a97c';

/** Demo exchange rate: the prototype prices services in KSh and settles in sats. */
export const SATS_PER_KES = 100;

export const SERVICE_TYPES = [
  'matatu',
  'boda',
  'taxi',
  'parking',
  'charging',
  'wifi',
  'other',
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const SERVICE_TYPE_LABEL: Record<ServiceType, string> = {
  matatu: 'Matatu',
  boda: 'Boda boda',
  taxi: 'Taxi',
  parking: 'Parking',
  charging: 'EV charging',
  wifi: 'Public Wi-Fi',
  other: 'Service',
};

export interface VehicleService {
  /** Full addressable coordinate: `31483:<pubkey>:<d>` */
  coordinate: string;
  pubkey: string;
  d: string;
  name: string;
  plate?: string;
  type: ServiceType;
  route: string;
  /** Fare in KSh */
  fare: number;
  currency: string;
  event: NostrEvent;
}

export interface PaymentRecord {
  id: string;
  /** Passenger pubkey (event author) */
  passenger: string;
  /** Worker / operator pubkey */
  worker: string;
  /** Vehicle coordinate the payment references */
  coordinate: string;
  amount: number;
  sats: number;
  currency: string;
  receipt: string;
  service: ServiceType;
  createdAt: number;
  event: NostrEvent;
}

export interface WorkerSettings {
  savingsPercent: number;
  emergencyPercent: number;
  emergencyGoal: number;
}

export const DEFAULT_WORKER_SETTINGS: WorkerSettings = {
  savingsPercent: 5,
  emergencyPercent: 5,
  emergencyGoal: 20000,
};

/* ------------------------------------------------------------------------ */
/* Parsing & validation                                                      */
/* ------------------------------------------------------------------------ */

function tag(event: NostrEvent, name: string): string | undefined {
  return event.tags.find(([n]) => n === name)?.[1];
}

function parseServiceType(value: string | undefined): ServiceType {
  return (SERVICE_TYPES as readonly string[]).includes(value ?? '')
    ? (value as ServiceType)
    : 'other';
}

export function parseService(event: NostrEvent): VehicleService | undefined {
  if (event.kind !== KIND_SERVICE) return undefined;
  const d = tag(event, 'd');
  const name = tag(event, 'name');
  const fareRaw = tag(event, 'fare');
  const fare = Number(fareRaw);
  if (!d || !name || !fareRaw || !Number.isFinite(fare) || fare <= 0) return undefined;

  return {
    coordinate: `${KIND_SERVICE}:${event.pubkey}:${d}`,
    pubkey: event.pubkey,
    d,
    name,
    plate: tag(event, 'plate'),
    type: parseServiceType(tag(event, 'type')),
    route: tag(event, 'route') ?? '',
    fare,
    currency: tag(event, 'currency') ?? 'KES',
    event,
  };
}

export function parsePayment(event: NostrEvent): PaymentRecord | undefined {
  if (event.kind !== KIND_PAYMENT) return undefined;
  const coordinate = tag(event, 'a');
  const worker = tag(event, 'p');
  const amount = Number(tag(event, 'amount'));
  const sats = Number(tag(event, 'sats'));
  if (!coordinate || !worker || !Number.isFinite(amount) || amount <= 0) return undefined;

  return {
    id: event.id,
    passenger: event.pubkey,
    worker,
    coordinate,
    amount,
    sats: Number.isFinite(sats) && sats > 0 ? sats : kesToSats(amount),
    currency: tag(event, 'currency') ?? 'KES',
    receipt: tag(event, 'receipt') ?? makeReceiptId(event.id),
    service: parseServiceType(tag(event, 'service')),
    createdAt: event.created_at,
    event,
  };
}

export function parseWorkerSettings(event: NostrEvent): WorkerSettings | undefined {
  if (event.kind !== KIND_WORKER_SETTINGS) return undefined;
  const pct = (v: string | undefined, fallback: number) => {
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 && n <= 50 ? n : fallback;
  };
  const goal = Number(tag(event, 'emergency_goal'));
  return {
    savingsPercent: pct(tag(event, 'savings'), DEFAULT_WORKER_SETTINGS.savingsPercent),
    emergencyPercent: pct(tag(event, 'emergency'), DEFAULT_WORKER_SETTINGS.emergencyPercent),
    emergencyGoal:
      Number.isFinite(goal) && goal > 0 ? goal : DEFAULT_WORKER_SETTINGS.emergencyGoal,
  };
}

/* ------------------------------------------------------------------------ */
/* Helpers                                                                   */
/* ------------------------------------------------------------------------ */

export function kesToSats(kes: number): number {
  return Math.round(kes * SATS_PER_KES);
}

export function formatKes(amount: number): string {
  return `KSh ${Math.round(amount).toLocaleString('en-KE')}`;
}

export function formatSats(sats: number): string {
  return `${Math.round(sats).toLocaleString()} sats`;
}

export function makeReceiptId(eventId: string): string {
  return `SR${eventId.slice(0, 6).toUpperCase()}`;
}

/** Turn a plate or service name into a clean d-tag slug. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export function serviceNaddr(service: VehicleService): string {
  return nip19.naddrEncode({
    kind: KIND_SERVICE,
    pubkey: service.pubkey,
    identifier: service.d,
  });
}

export function timeAgo(ts: number): string {
  const seconds = Math.max(1, Math.floor(Date.now() / 1000) - ts);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  return new Date(ts * 1000).toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
  });
}

export function isToday(ts: number): boolean {
  const date = new Date(ts * 1000);
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}
