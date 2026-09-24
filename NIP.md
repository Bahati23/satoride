# SatoRide — Custom Nostr Kinds

SatoRide uses three custom event kinds. All events carry a `t` tag with the
value `satoride` so relays can filter application data efficiently, and every
kind carries a NIP-31 `alt` tag with a human-readable description.

## Kind `31483` — Mobility Service Listing (addressable)

A transport worker or operator publishes one addressable event per vehicle or
mobility service (matatu, boda boda, parking bay, charging point, Wi-Fi
hotspot). The `d` tag is a slug of the plate or service name.

| Tag        | Required | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| `d`        | yes      | Unique slug (e.g. `kca-123a`)                          |
| `t`        | yes      | Always `satoride`                                      |
| `name`     | yes      | Display name (e.g. `Ngong Line Express`)               |
| `type`     | yes      | `matatu` \| `boda` \| `taxi` \| `parking` \| `charging` \| `wifi` \| `other` |
| `route`    | no       | Human-readable route or location (`CBD → Ngong`)       |
| `plate`    | no       | Vehicle plate (`KCA 123A`)                             |
| `fare`     | yes      | Price in KSh (integer)                                 |
| `currency` | yes      | `KES`                                                  |

Content is empty; all queryable metadata lives in tags.

## Kind `5027` — Fare Payment Record (regular)

Published by the passenger (or a throwaway guest key) when a fare is paid.
Lightning settlement is simulated in the hackathon prototype; the payment
*record* is a real, signed Nostr event.

| Tag        | Required | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| `t`        | yes      | Always `satoride`                                  |
| `a`        | yes      | Service coordinate `31483:<worker-pubkey>:<d>`     |
| `p`        | yes      | Worker / operator pubkey (payee)                   |
| `amount`   | yes      | Fare paid in KSh                                   |
| `sats`     | yes      | Equivalent sats at the demo rate (1 KSh = 100 sats) |
| `currency` | yes      | `KES`                                              |
| `service`  | yes      | Service type copied from the listing               |
| `receipt`  | no       | Receipt number (defaults to `SR` + event id prefix) |

Content is a human-readable summary (`Paid KSh 80 — Ngong Line Express (CBD →
Ngong)`) so the record degrades gracefully in generic clients.

## Kind `19259` — Worker Savings Settings (replaceable)

One per worker; the latest version wins.

| Tag              | Required | Description                                  |
| ---------------- | -------- | -------------------------------------------- |
| `t`              | yes      | Always `satoride`                            |
| `savings`        | yes      | Auto-savings percent of each payment (0–50)  |
| `emergency`      | yes      | Emergency-fund percent of each payment (0–50) |
| `emergency_goal` | yes      | Emergency fund target in KSh                 |

---

*Demo fleet and seed payments for the hackathon were published from ephemeral
keys; the demo fleet pubkey is
`708ded5f41a2a9ad08f878e567d4b2a68ac953b07b5f46c1758a336762d1a97c`.*
