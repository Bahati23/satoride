/**
 * English source-of-truth dictionary. Every user-facing string in SatoRide
 * lives here; the Swahili dictionary is type-checked against these keys.
 */
export const en = {
  /* Navigation & chrome */
  'nav.ride': 'Ride & Pay',
  'nav.worker': 'Workers',
  'nav.operator': 'Operators',
  'nav.ussd': 'USSD',
  'nav.openMenu': 'Open menu',
  'nav.main': 'Main',
  'nav.mobile': 'Mobile',
  'theme.toLight': 'Switch to light mode',
  'theme.toDark': 'Switch to dark mode',
  'lang.switch': 'Badili lugha / Switch language',

  /* Footer */
  'footer.tagline':
    'Move. Earn. Save. Thrive. Accessible micropayments and financial resilience for African mobility.',
  'footer.prototype':
    'Hackathon prototype — Lightning settlement simulated, records anchored on Nostr.',

  /* Demo wallet */
  'wallet.sats': 'sats',
  'wallet.title': 'Demo Lightning wallet',
  'wallet.description':
    'Hackathon prototype — simulates instant Lightning settlement. No real sats move.',
  'wallet.available': 'sats available',
  'wallet.topUp': 'Top up {amount} sats',
  'wallet.topUpToast': 'Faucet top-up received',
  'wallet.topUpToastDesc': '+{amount} demo sats added to your wallet.',

  /* Service types */
  'type.matatu': 'Matatu',
  'type.boda': 'Boda boda',
  'type.taxi': 'Taxi',
  'type.parking': 'Parking',
  'type.charging': 'EV charging',
  'type.wifi': 'Public Wi-Fi',
  'type.other': 'Service',

  /* Relative time */
  'time.justNow': 'just now',
  'time.minAgo': '{n} min ago',
  'time.hrAgo': '{n} hr ago',
  'time.dayAgoOne': '{n} day ago',
  'time.dayAgoMany': '{n} days ago',

  /* Landing — hero */
  'hero.badge': 'BITCOIN-POWERED MICROPAYMENTS FOR AFRICAN MOBILITY',
  'hero.title1': 'Move. Earn.',
  'hero.title2': 'Save.',
  'hero.title3': 'Thrive.',
  'hero.subtitle':
    "SatoRide turns everyday transport payments into financial resilience. Passengers pay any fare in seconds — matatu, boda, parking, charging — while every payment quietly builds a worker's earnings record, automatic savings and emergency fund.",
  'hero.ctaPay': 'Pay a fare',
  'hero.ctaWorker': 'Worker dashboard',
  'hero.live': 'Live on Nostr right now',
  'hero.mockRider': 'Brian · Boda rider',
  'hero.mockToday': "Today's earnings",
  'hero.mockTrips': '31 trips',
  'hero.mockPassengers': '38 passengers',
  'hero.mockAutoSave': 'Auto-savings (5%)',
  'hero.mockEmergency': 'Emergency fund',
  'hero.mockGoal': 'Emergency goal · KSh 20,000',
  'hero.mockRecent': 'Recent payments',

  /* Landing — problem */
  'problem.eyebrow': 'The problem',
  'problem.title': "Africa's busiest transactions leave no trace",
  'problem.desc':
    'Transport is one of the most frequent financial activities in daily life. Yet every fare ends the moment it is paid — for both sides of the journey.',
  'problem.passengerTitle': 'For passengers',
  'problem.p1': 'Long, fumbling payment processes at every stage',
  'problem.p2': 'Cash inconvenience and exact-change anxiety',
  'problem.p3': 'No record of what mobility actually costs each month',
  'problem.p4': 'A different payment method for every service',
  'problem.workerTitle': 'For transport workers',
  'problem.w1': 'Irregular income across dozens of small daily payments',
  'problem.w2': 'No structured earnings record to show anyone',
  'problem.w3': 'Saving is hard when income changes every day',
  'problem.w4': 'Breakdowns and emergencies hit an empty cushion',
  'problem.quote':
    '"A boda rider makes 30–40 trips a day. At the end of it, their entire financial record is: I made approximately KSh 3,000."',

  /* Landing — core insight */
  'insight.eyebrow': 'The core insight',
  'insight.title': "A fare shouldn't end when it's paid",
  'insight.desc': "Every payment becomes a building block in a worker's financial life.",
  'insight.s1t': 'Payment',
  'insight.s1d': 'Passenger pays KSh 200',
  'insight.s2t': 'Record',
  'insight.s2d': 'Transaction stored on Nostr',
  'insight.s3t': 'Earnings',
  'insight.s3d': 'Income history grows',
  'insight.s4t': 'Savings',
  'insight.s4d': '5% set aside automatically',
  'insight.s5t': 'Resilience',
  'insight.s5d': 'Emergency fund builds',

  /* Landing — how it works */
  'how.eyebrow': 'Passenger experience',
  'how.title': 'Scan → Pay → Ride',
  'how.desc': 'The technology disappears. Passengers never need to know what a satoshi is.',
  'how.s1t': 'Scan',
  'how.s1d':
    'Scan the QR in the matatu or boda — or tap a service in the app. The fare appears instantly, in KSh.',
  'how.s2t': 'Pay',
  'how.s2d':
    'One big button. Lightning settles underneath in about a second — no addresses, no jargon, no waiting.',
  'how.s3t': 'Ride',
  'how.s3d': 'A receipt is confirmed to you, the worker, and the record. That is the whole experience.',
  'how.cta': 'Try it — pay a demo fare',

  /* Landing — one wallet */
  'onewallet.eyebrow': 'Beyond matatus',
  'onewallet.title': 'One wallet, every mobility service',
  'onewallet.desc':
    'The same account handles the small payments that make up a day of movement — and transport passes for daily commuters.',
  'onewallet.matatu': 'Matatu',
  'onewallet.matatuNote': 'CBD → Ngong',
  'onewallet.boda': 'Boda boda',
  'onewallet.bodaNote': 'Last-mile, anywhere',
  'onewallet.parking': 'Parking',
  'onewallet.parkingNote': 'Town centres',
  'onewallet.charging': 'EV & e-bike charging',
  'onewallet.chargingNote': 'Top up while you shop',
  'onewallet.wifi': 'Public Wi-Fi',
  'onewallet.wifiNote': 'Micropayments, finally viable',

  /* Landing — worker features */
  'wf.eyebrow': 'For transport workers',
  'wf.title': 'Every fare builds financial resilience',
  'wf.desc':
    'Drivers, conductors and riders choose a simple rule — like saving 5% of every payment — and SatoRide follows it automatically.',
  'wf.saveTitle': 'Automatic savings',
  'wf.saveDesc':
    'Receive KSh 200 with a 5% rule → KSh 190 available, KSh 10 saved. No willpower required, every single trip.',
  'wf.fareReceived': 'Fare received',
  'wf.autoSaved': 'Auto-saved (5%)',
  'wf.available': 'Available',
  'wf.efTitle': 'Emergency fund',
  'wf.efDesc':
    'A separate cushion for breakdowns, medical costs and slow weeks — with a visible goal that grows with every payment.',
  'wf.efProgress': 'KSh 8,450 of KSh 20,000',
  'wf.efMonth': '+ KSh 1,200 this month',
  'wf.historyTitle': 'A real financial history',
  'wf.historyDesc':
    'After a month, a worker can finally say — with data — "I have consistent income from my transport business."',
  'wf.stat30': '30-day earnings',
  'wf.statTrips': 'Trips',
  'wf.statAvg': 'Avg / day',
  'wf.statSaved': 'Saved',
  'wf.consent':
    'Tomorrow, with explicit consent and strong privacy controls, that history could help unlock asset financing, insurance and savings products. The worker always owns their data.',

  /* Landing — HAUTE */
  'haute.eyebrow': 'Design principles',
  'haute.title': 'Built HAUTE',
  'haute.desc': 'The five principles every SatoRide decision is measured against.',
  'haute.hTitle': 'Human first',
  'haute.hDesc': 'We start with passengers, drivers, conductors and riders — and pick the technology second.',
  'haute.aTitle': 'Accessible',
  'haute.aDesc':
    'PWA today, USSD and SMS for feature phones tomorrow. Large buttons, simple language, high contrast.',
  'haute.uTitle': 'Useful now',
  'haute.uDesc':
    'The MVP already delivers Pay → Confirm → Record. Every future feature builds on that same transaction.',
  'haute.tTitle': 'Trustworthy',
  'haute.tDesc':
    'Every payment confirms to passenger, worker and operator, with transparent histories and privacy controls.',
  'haute.eTitle': 'Easy',
  'haute.eDesc': 'Scan → Pay → Ride. The complexity of Lightning and Nostr stays underneath the interface.',

  /* Landing — cross-border */
  'cb.eyebrow': 'The long-term vision',
  'cb.title': 'One rail, many currencies',
  'cb.desc':
    'Lightning can settle value across borders while the interface stays local — KSh in Nairobi, UGX in Kampala. A traveller keeps one mobility wallet across the continent.',

  /* Landing — final CTA */
  'cta.title': 'Your ride can become part of your financial life',
  'cta.desc':
    'Try the prototype: pay a demo fare with simulated Lightning, then watch it land in the worker dashboard as earnings, savings and emergency fund.',
  'cta.pay': 'Pay a fare',
  'cta.worker': 'Open worker demo',
  'cta.ussd': 'Try the USSD simulator',

  /* Ride page */
  'ride.title': 'Pay a fare',
  'ride.desc':
    'Pick a service — or scan its QR in the real world — then confirm and pay. Every payment lands as a verifiable receipt.',
  'ride.myReceipts': 'My receipts',
  'ride.searchPlaceholder': 'Search by name, plate or route…',
  'ride.searchAria': 'Search services',
  'ride.filterAria': 'Filter by service type',
  'ride.all': 'All',
  'ride.emptyTitle': 'No services found',
  'ride.emptyDesc':
    'Try a different search, check your relay connection, or wait a moment for services to load.',

  /* Receipts page */
  'receipts.title': 'My receipts',
  'receipts.back': 'Pay a fare',
  'receipts.descUser': 'Receipts linked to your Nostr account — portable across any client.',
  'receipts.descGuest':
    'Receipts saved to this device via your guest key. Log in to attach them to your Nostr account.',
  'receipts.emptyTitle': 'No receipts yet',
  'receipts.emptyDesc': 'Pay your first fare and your receipt will appear here instantly.',
  'receipts.total': 'Total mobility spend',
  'receipts.count': '{n} payments',
  'receipts.confirmedNote': 'all confirmed on Nostr',
  'receipts.fareFallback': 'Fare payment',

  /* Vehicle payment page (QR landing) */
  'vp.back': 'All services',
  'vp.scanned': 'You scanned to pay',
  'vp.fare': 'Fare',
  'vp.satsLine': '{sats} sats · settles in ~1 second',
  'vp.pay': 'PAY {fare}',
  'vp.noSignup':
    'No sign-up needed. Your receipt is stored on Nostr and shown instantly after payment.',
  'vp.notFoundTitle': 'Service not found',
  'vp.notFoundDesc':
    "This payment link couldn't be found on your relays. It may have been removed, or the relays haven't synced it yet.",

  /* Pay dialog */
  'pay.confirmTitle': 'Confirm fare',
  'pay.confirmDesc': "Scan → Confirm → Pay. That's the whole journey.",
  'pay.walletBalance': 'Demo wallet balance',
  'pay.insufficient': 'Not enough demo sats for this fare.',
  'pay.topUp': 'Top up {amount} sats from faucet',
  'pay.button': 'PAY {fare}',
  'pay.guest':
    'Paying as a guest — receipts are saved to this device. Log in to attach them to your Nostr account.',
  'pay.processing': 'Paying {fare}',
  'pay.line1': 'Requesting Lightning invoice…',
  'pay.line2': 'Signing payment…',
  'pay.line3': 'Settling over the network…',
  'pay.line4': 'Writing your receipt to Nostr…',
  'pay.done': 'Done — enjoy the ride',
  'pay.failed': 'Payment failed',

  /* Receipt ticket */
  'receipt.confirmed': 'PAYMENT CONFIRMED',
  'receipt.amount': 'Amount',
  'receipt.satsLine': '{sats} sats · settled instantly',
  'receipt.service': 'Service',
  'receipt.vehicle': 'Vehicle',
  'receipt.route': 'Route',
  'receipt.date': 'Date',
  'receipt.number': 'Receipt №',
  'receipt.footer': 'Asante! Recorded on Nostr · satoride',

  /* Vehicle card */
  'vcard.pay': 'Pay',
  'vcard.payAria': 'Pay {fare} to {name}',

  /* QR dialog */
  'qr.title': 'Passenger payment QR',
  'qr.desc': 'Print this in the vehicle. Passengers scan → confirm → pay.',
  'qr.copied': 'Payment link copied',
  'qr.copyFail': 'Could not copy link',
  'qr.copy': 'Copy payment link',

  /* Activity ticker */
  'ticker.aria': 'Latest payments across the platform',

  /* Worker dashboard */
  'worker.title': 'Worker dashboard',
  'worker.desc': 'Every fare becomes earnings history, automatic savings and an emergency fund — live from Nostr.',
  'worker.demoBadge': 'Viewing demo fleet data',
  'worker.demoBannerPre': 'This is the',
  'worker.demoBannerStrong': 'demo fleet',
  'worker.demoBannerPost':
    'dashboard. Log in to register your own matatu, boda or service, set your savings rules and start receiving payments.',
  'worker.today': "Today's earnings",
  'worker.paymentOne': 'payment',
  'worker.paymentMany': 'payments',
  'worker.todayAvailable': '{available} available after savings',
  'worker.autoSaved': 'Auto-saved',
  'worker.trips7': '7-day trips',
  'worker.last7': 'Last 7 days',
  'worker.statSaved': 'Total saved',
  'worker.statSavedHint': '{pct}% of every payment',
  'worker.statEmergency': 'Emergency fund',
  'worker.statEmergencyHint': '{pct}% of {goal} goal',
  'worker.statTrips': 'Trips (30 days)',
  'worker.statTripsHint': '{days} active days',
  'worker.statAvg': 'Avg per active day',
  'worker.statAvgHint': '{amount} in 30 days',
  'worker.efGoal': 'Emergency fund goal',
  'worker.efProgress': '{saved} of {goal} · {pct}%',
  'worker.efDesc':
    'For breakdowns, medical costs and slow weeks. {pct}% of every fare flows here automatically — the worker controls the rule and the withdrawals.',
  'worker.liveTitle': 'Live payments',
  'worker.updating': 'updating live',
  'worker.noPayments': 'No payments yet. Share your vehicle QR to start receiving fares.',

  /* Savings rules */
  'rules.title': 'My savings rules',
  'rules.autoSave': 'Automatic savings',
  'rules.onFare': 'On a {fare} fare, {saved} is saved automatically.',
  'rules.emergency': 'Emergency fund',
  'rules.goal': 'Emergency goal (KSh)',
  'rules.save': 'Save rules',
  'rules.saving': 'Saving…',
  'rules.loginNote': 'Log in to set your own rules.',
  'rules.savedToast': 'Savings rules saved',
  'rules.savedToastDesc':
    'Every payment now auto-saves {savings}% and puts {emergency}% into your emergency fund.',
  'rules.errorToast': 'Could not save rules',

  /* Worker vehicles */
  'vehicles.title': 'Vehicles & services',
  'vehicles.add': 'Add vehicle',
  'vehicles.first': 'Register your first vehicle',
  'vehicles.emptyTitle': 'No vehicles registered yet',
  'vehicles.emptyDesc':
    'Register your matatu, boda or service to get a payment QR passengers can scan.',
  'vehicles.perTrip': 'per trip',
  'vehicles.qr': 'Payment QR',
  'vehicles.simulate': 'Simulate',
  'vehicles.simulateFare': 'Simulate fare',
  'vehicles.simulating': 'Paying…',
  'vehicles.simulateAria': 'Simulate a passenger paying this fare (demo)',
  'vehicles.simToast': 'Passenger payment simulated',
  'vehicles.simToastDesc': '{fare} just landed in Live payments.',
  'vehicles.simError': 'Simulation failed',

  /* Register vehicle dialog */
  'reg.title': 'Register a vehicle or service',
  'reg.desc':
    'Published to Nostr as your service listing. You can update it any time by registering again with the same plate.',
  'reg.name': 'Name',
  'reg.plate': 'Plate (optional)',
  'reg.type': 'Type',
  'reg.typeAria': 'Service type',
  'reg.route': 'Route / location',
  'reg.fare': 'Fare (KSh)',
  'reg.publish': 'Publish service',
  'reg.publishing': 'Publishing…',
  'reg.nameRequired': 'Name required',
  'reg.nameRequiredDesc': 'Give your vehicle or service a name.',
  'reg.invalidFare': 'Invalid fare',
  'reg.invalidFareDesc': 'Enter a fare in KSh, e.g. 80.',
  'reg.success': 'Vehicle registered',
  'reg.successDesc': 'Your payment QR is ready to share.',
  'reg.error': 'Registration failed',

  /* Operator dashboard */
  'op.title': 'Operator dashboard',
  'op.desc':
    'The view for SACCOs, fleet operators and mobility businesses — every vehicle, transaction and shilling, aggregated live from Nostr.',
  'op.totalRevenue': 'Total revenue',
  'op.totalRevenueHint': 'all recorded fares',
  'op.transactions': 'Transactions',
  'op.transactionsHint': 'confirmed payments',
  'op.activeServices': 'Active services',
  'op.activeServicesHint': 'published listings',
  'op.workers': 'Workers earning',
  'op.workersHint': 'unique payees',
  'op.revenueByService': 'Revenue by service',
  'op.noTx': 'No transactions recorded yet.',
  'op.paymentOne': '{n} payment',
  'op.paymentMany': '{n} payments',
  'op.fleet': 'Fleet performance',
  'op.noServicesTitle': 'No services yet',
  'op.noServicesDesc': 'Registered vehicles and services will appear here.',
  'op.thService': 'Service',
  'op.thFare': 'Fare',
  'op.thPayments': 'Payments',
  'op.thRevenue': 'Revenue',
  'op.latest': 'Latest transactions',
  'op.openPassenger': 'Open passenger app',

  /* USSD page */
  'ussd.title1': 'No smartphone?',
  'ussd.title2': 'No problem.',
  'ussd.desc':
    'Many commuters only carry a basic phone. SatoRide\u2019s USSD channel brings pay, savings and earnings to any handset — try the live simulator.',
  'ussd.card1Title': 'Dial *384#',
  'ussd.card1Desc': 'Works on any GSM phone — no data bundle, no app install.',
  'ussd.card2Title': 'Same engine underneath',
  'ussd.card2Desc':
    'The simulator settles through the same demo Lightning wallet and writes real receipts to Nostr.',
  'ussd.card3Title': 'Try vehicle code KCA 123A',
  'ussd.card3Desc':
    'Choose 1 (Pay), enter the plate from the matatu sticker, confirm — a real receipt comes back.',
  'ussd.replyPlaceholder': 'Reply…',
  'ussd.replyAria': 'USSD reply',
  'ussd.send': 'Send',
  'ussd.dial': 'Dial *384#',
  'ussd.newSession': 'New session',
  'ussd.settling': 'Settling…',
  'ussd.reset': 'Reset simulator',

  /* USSD in-phone screens */
  'ussd.s.idle':
    'Welcome to SatoRide.\n\nDial *384# to start a session — pay fares, check savings and earnings from any phone.',
  'ussd.s.menu':
    'SATORIDE\n1. Pay fare\n2. Wallet balance\n3. My savings\n4. Emergency fund\n5. Today\u2019s earnings\n0. Exit',
  'ussd.s.payPlate':
    'PAY FARE\nEnter the vehicle code on the sticker (e.g. KCA 123A).\nSend empty to go back.',
  'ussd.s.confirm': 'CONFIRM PAYMENT\n{lines}\nFare: {fare}\n\n1. Confirm\n0. Cancel',
  'ussd.s.processing': 'Processing payment…\nSettling over Lightning.\n\nPlease wait.',
  'ussd.s.done':
    'PAYMENT CONFIRMED ✓\n\n{fare} paid to {name}.\nReceipt: {receipt}\n\nAsante! Send any key for menu.',
  'ussd.s.failed': 'Payment failed.\n{message}\n\nSend any key for menu.',
  'ussd.s.balance': 'WALLET BALANCE\n\n⚡ {balance} sats (demo)\n\nSend any key for menu.',
  'ussd.s.savings':
    'MY SAVINGS\n\nTotal saved: {total}\nAuto-save rule: every fare contributes.\n\nSend any key for menu.',
  'ussd.s.emergency': 'EMERGENCY FUND\n\nBalance: {total}\nGoal: {goal} ({pct}%)\n\nSend any key for menu.',
  'ussd.s.earnings': 'TODAY\u2019S EARNINGS\n\nGross: {gross}\nPayments: {trips}\n\nSend any key for menu.',
  'ussd.s.invalid': '{message}\n\nSend any key to go back.',
  'ussd.s.ended': 'Session ended.\n\nAsante for riding with SatoRide. Move. Earn. Save. Thrive.',
  'ussd.s.unknownCode': 'Unknown code "{value}". Dial *384# for SatoRide.',
  'ussd.s.invalidChoice': 'Invalid choice.',
  'ussd.s.notFound': 'Vehicle "{value}" not found. Check the code on the sticker.',

  /* 404 */
  'nf.title': "This route doesn't exist",
  'nf.desc': 'Looks like this matatu left the stage. Head back and find your ride.',
  'nf.back': 'Back to SatoRide',

  /* SEO */
  'seo.home.title': 'SatoRide — Move. Earn. Save. Thrive.',
  'seo.home.desc':
    'An accessible micropayment and financial-resilience platform for African mobility. Pay for matatu, boda, parking and charging in seconds — and turn every fare into earnings records, automatic savings and emergency funds.',
  'seo.ride.title': 'Pay a fare — SatoRide',
  'seo.ride.desc': 'Choose a matatu, boda, parking bay or charging point and pay in seconds. Scan → Pay → Ride.',
  'seo.receipts.title': 'My receipts — SatoRide',
  'seo.receipts.desc': 'Every fare you have paid, with a verifiable receipt stored on Nostr.',
  'seo.worker.title': 'Worker dashboard — SatoRide',
  'seo.worker.desc':
    'Track earnings in real time, grow automatic savings and an emergency fund with every fare.',
  'seo.operator.title': 'Operator dashboard — SatoRide',
  'seo.operator.desc': 'Fleet-wide view: vehicles, transactions and revenue across the SatoRide network.',
  'seo.ussd.title': 'USSD simulator — SatoRide',
  'seo.ussd.desc': 'Experience SatoRide on a basic phone: pay, check balances, savings and earnings over USSD.',
  'seo.payService.title': 'Pay {name} — SatoRide',
  'seo.payService.titleFallback': 'Pay — SatoRide',
  'seo.payService.desc': 'Pay {fare} to {name} with SatoRide.',
  'seo.payService.descFallback': 'Pay a fare with SatoRide.',
  'seo.nf.title': '404 - Page Not Found — SatoRide',
  'seo.nf.desc': 'The page you are looking for could not be found. Return to SatoRide to keep moving.',
} as const;

export type TranslationKey = keyof typeof en;
export type Translations = Record<TranslationKey, string>;
