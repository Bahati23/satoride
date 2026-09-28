import type { Translations } from './en';

/**
 * Kiswahili dictionary. Typed as `Translations`, so TypeScript guarantees
 * every English key has a Swahili translation.
 */
export const sw: Translations = {
  /* Navigation & chrome */
  'nav.ride': 'Lipa Nauli',
  'nav.worker': 'Wafanyakazi',
  'nav.operator': 'Waendeshaji',
  'nav.ussd': 'USSD',
  'nav.openMenu': 'Fungua menyu',
  'nav.main': 'Kuu',
  'nav.mobile': 'Simu',
  'theme.toLight': 'Badili hadi hali ya mwanga',
  'theme.toDark': 'Badili hadi hali ya giza',
  'lang.switch': 'Badili lugha / Switch language',

  /* Footer */
  'footer.tagline':
    'Safiri. Pata. Weka Akiba. Fanikiwa. Malipo madogo yanayofikiwa na uimara wa kifedha kwa usafiri wa Afrika.',
  'footer.prototype':
    'Kigezo cha hackathon — malipo ya Lightning yameigizwa, rekodi zimewekwa kwenye Nostr.',

  /* Demo wallet */
  'wallet.sats': 'sats',
  'wallet.title': 'Pochi ya Lightning ya demo',
  'wallet.description':
    'Kigezo cha hackathon — kinaigiza malipo ya papo hapo ya Lightning. Hakuna sats halisi zinazohamishwa.',
  'wallet.available': 'sats zinazopatikana',
  'wallet.topUp': 'Ongeza sats {amount}',
  'wallet.topUpToast': 'Salio la faucet limepokelewa',
  'wallet.topUpToastDesc': 'Sats {amount} za demo zimeongezwa kwenye pochi yako.',

  /* Service types */
  'type.matatu': 'Matatu',
  'type.boda': 'Boda boda',
  'type.taxi': 'Teksi',
  'type.parking': 'Maegesho',
  'type.charging': 'Chaji ya EV',
  'type.wifi': 'Wi-Fi ya umma',
  'type.other': 'Huduma',

  /* Relative time */
  'time.justNow': 'sasa hivi',
  'time.minAgo': 'dakika {n} zilizopita',
  'time.hrAgo': 'saa {n} zilizopita',
  'time.dayAgoOne': 'siku {n} iliyopita',
  'time.dayAgoMany': 'siku {n} zilizopita',

  /* Landing — hero */
  'hero.badge': 'MALIPO MADOGO YA BITCOIN KWA USAFIRI WA AFRIKA',
  'hero.title1': 'Safiri. Pata.',
  'hero.title2': 'Weka Akiba.',
  'hero.title3': 'Fanikiwa.',
  'hero.subtitle':
    'SatoRide inabadilisha malipo ya usafiri ya kila siku kuwa uimara wa kifedha. Abiria hulipa nauli yoyote kwa sekunde chache — matatu, boda, maegesho, chaji — huku kila malipo yakijenga rekodi ya mapato ya mfanyakazi, akiba ya kiotomatiki na mfuko wa dharura.',
  'hero.ctaPay': 'Lipa nauli',
  'hero.ctaWorker': 'Dashibodi ya mfanyakazi',
  'hero.live': 'Moja kwa moja kwenye Nostr sasa hivi',
  'hero.mockRider': 'Brian · Mwendesha boda',
  'hero.mockToday': 'Mapato ya leo',
  'hero.mockTrips': 'safari 31',
  'hero.mockPassengers': 'abiria 38',
  'hero.mockAutoSave': 'Akiba otomatiki (5%)',
  'hero.mockEmergency': 'Mfuko wa dharura',
  'hero.mockGoal': 'Lengo la dharura · KSh 20,000',
  'hero.mockRecent': 'Malipo ya hivi karibuni',

  /* Landing — problem */
  'problem.eyebrow': 'Tatizo',
  'problem.title': 'Miamala minene zaidi Afrika haitachi alama',
  'problem.desc':
    'Usafiri ni moja ya shughuli za kifedha zinazojirudia mara kwa mara maishani. Hata hivyo kila nauli huishia papo inapolipwa — kwa pande zote mbili za safari.',
  'problem.passengerTitle': 'Kwa abiria',
  'problem.p1': 'Michakato mirefu na ngumu ya malipo kila hatua',
  'problem.p2': 'Usumbufu wa pesa taslimu na wasiwasi wa chenji sahihi',
  'problem.p3': 'Hakuna rekodi ya gharama halisi ya usafiri kila mwezi',
  'problem.p4': 'Njia tofauti ya malipo kwa kila huduma',
  'problem.workerTitle': 'Kwa wafanyakazi wa usafiri',
  'problem.w1': 'Mapato yasiyo thabiti katika malipo madogo kadhaa kwa siku',
  'problem.w2': 'Hakuna rekodi iliyopangwa ya mapato ya kuonyesha mtu yeyote',
  'problem.w3': 'Kuweka akiba ni ngumu mapato yanapobadilika kila siku',
  'problem.w4': 'Uharibifu wa gari na dharura hukuta mfuko mtupu',
  'problem.quote':
    '"Mwendesha boda hufanya safari 30–40 kwa siku. Mwisho wa siku, rekodi yake yote ya kifedha ni: Nimepata takribani KSh 3,000."',

  /* Landing — core insight */
  'insight.eyebrow': 'Wazo kuu',
  'insight.title': 'Nauli haipaswi kuishia inapolipwa',
  'insight.desc': 'Kila malipo huwa jiwe la msingi katika maisha ya kifedha ya mfanyakazi.',
  'insight.s1t': 'Malipo',
  'insight.s1d': 'Abiria hulipa KSh 200',
  'insight.s2t': 'Rekodi',
  'insight.s2d': 'Muamala unahifadhiwa kwenye Nostr',
  'insight.s3t': 'Mapato',
  'insight.s3d': 'Historia ya mapato inakua',
  'insight.s4t': 'Akiba',
  'insight.s4d': '5% inawekwa kando otomatiki',
  'insight.s5t': 'Uimara',
  'insight.s5d': 'Mfuko wa dharura unajengwa',

  /* Landing — how it works */
  'how.eyebrow': 'Uzoefu wa abiria',
  'how.title': 'Skani → Lipa → Safiri',
  'how.desc': 'Teknolojia hutoweka. Abiria hawahitaji kujua satoshi ni nini.',
  'how.s1t': 'Skani',
  'how.s1d':
    'Skani QR ndani ya matatu au boda — au gusa huduma katika programu. Nauli huonekana papo hapo, kwa KSh.',
  'how.s2t': 'Lipa',
  'how.s2d':
    'Kitufe kimoja kikubwa. Lightning hutatua chini kwa sekunde moja — bila anwani, bila istilahi, bila kusubiri.',
  'how.s3t': 'Safiri',
  'how.s3d': 'Risiti huthibitishwa kwako, kwa mfanyakazi na kwa rekodi. Ndio uzoefu wote.',
  'how.cta': 'Jaribu — lipa nauli ya demo',

  /* Landing — one wallet */
  'onewallet.eyebrow': 'Zaidi ya matatu',
  'onewallet.title': 'Pochi moja, kila huduma ya usafiri',
  'onewallet.desc':
    'Akaunti moja hushughulikia malipo madogo yanayounda siku ya kusafiri — na pasi za usafiri kwa wasafiri wa kila siku.',
  'onewallet.matatu': 'Matatu',
  'onewallet.matatuNote': 'CBD → Ngong',
  'onewallet.boda': 'Boda boda',
  'onewallet.bodaNote': 'Maili ya mwisho, popote',
  'onewallet.parking': 'Maegesho',
  'onewallet.parkingNote': 'Katikati ya miji',
  'onewallet.charging': 'Chaji ya EV & e-bike',
  'onewallet.chargingNote': 'Jaza ukiwa unanunua',
  'onewallet.wifi': 'Wi-Fi ya umma',
  'onewallet.wifiNote': 'Malipo madogo, hatimaye yanawezekana',

  /* Landing — worker features */
  'wf.eyebrow': 'Kwa wafanyakazi wa usafiri',
  'wf.title': 'Kila nauli hujenga uimara wa kifedha',
  'wf.desc':
    'Madereva, makondakta na waendesha boda huchagua kanuni rahisi — kama kuweka akiba 5% ya kila malipo — na SatoRide huitekeleza otomatiki.',
  'wf.saveTitle': 'Akiba otomatiki',
  'wf.saveDesc':
    'Pokea KSh 200 kwa kanuni ya 5% → KSh 190 zinapatikana, KSh 10 zimewekwa akiba. Bila hitaji la kujilazimisha, kila safari.',
  'wf.fareReceived': 'Nauli iliyopokelewa',
  'wf.autoSaved': 'Imewekwa akiba (5%)',
  'wf.available': 'Inapatikana',
  'wf.efTitle': 'Mfuko wa dharura',
  'wf.efDesc':
    'Mfuko tofauti kwa ajili ya uharibifu wa gari, gharama za matibabu na wiki ngumu — na lengo linaloonekana linalokua na kila malipo.',
  'wf.efProgress': 'KSh 8,450 kati ya KSh 20,000',
  'wf.efMonth': '+ KSh 1,200 mwezi huu',
  'wf.historyTitle': 'Historia halisi ya kifedha',
  'wf.historyDesc':
    'Baada ya mwezi, mfanyakazi anaweza hatimaye kusema — kwa data — "Nina mapato thabiti kutoka kwa biashara yangu ya usafiri."',
  'wf.stat30': 'Mapato ya siku 30',
  'wf.statTrips': 'Safari',
  'wf.statAvg': 'Wastani / siku',
  'wf.statSaved': 'Imewekwa akiba',
  'wf.consent':
    'Kesho, kwa ridhaa ya wazi na udhibiti imara wa faragha, historia hiyo inaweza kusaidia kufungua udhhibiti wa mali, bima na bidhaa za akiba. Mfanyakazi daima anamiliki data yake.',

  /* Landing — HAUTE */
  'haute.eyebrow': 'Kanuni za muundo',
  'haute.title': 'Imejengwa kwa HAUTE',
  'haute.desc': 'Kanuni tano ambazo kila uamuzi wa SatoRide hupimwa nazo.',
  'haute.hTitle': 'Binadamu kwanza',
  'haute.hDesc': 'Tunaanza na abiria, madereva, makondakta na waendesha boda — kisha kuchagua teknolojia baadaye.',
  'haute.aTitle': 'Inayofikiwa',
  'haute.aDesc':
    'PWA leo, USSD na SMS kwa simu za kawaida kesho. Vitufe vikubwa, lugha rahisi, rangi zilizo wazi.',
  'haute.uTitle': 'Muhimu sasa',
  'haute.uDesc':
    'MVP tayari inatoa Lipa → Thibitisha → Rekodi. Kila kipengele kijacho hujengwa juu ya muamala huo huo.',
  'haute.tTitle': 'Ya kuaminika',
  'haute.tDesc':
    'Kila malipo huthibitishwa kwa abiria, mfanyakazi na mwendeshaji, kwa historia wazi na udhibiti wa faragha.',
  'haute.eTitle': 'Rahisi',
  'haute.eDesc': 'Skani → Lipa → Safiri. Ugumu wa Lightning na Nostr hubaki chini ya kiolesura.',

  /* Landing — cross-border */
  'cb.eyebrow': 'Dira ya muda mrefu',
  'cb.title': 'Reli moja, sarafu nyingi',
  'cb.desc':
    'Lightning inaweza kutatua thamani kupita mipaka huku kiolesura kikibaki cha ndani — KSh Nairobi, UGX Kampala. Msafiri huweka pochi moja ya usafiri barani Afrika.',

  /* Landing — final CTA */
  'cta.title': 'Safari yako inaweza kuwa sehemu ya maisha yako ya kifedha',
  'cta.desc':
    'Jaribu kigezo: lipa nauli ya demo kwa Lightning iliyoigizwa, kisha uitazame ukifika kwenye dashibodi ya mfanyakazi kama mapato, akiba na mfuko wa dharura.',
  'cta.pay': 'Lipa nauli',
  'cta.worker': 'Fungua demo ya mfanyakazi',
  'cta.ussd': 'Jaribu kigezo cha USSD',

  /* Ride page */
  'ride.title': 'Lipa nauli',
  'ride.desc':
    'Chagua huduma — au skani QR yake ulimwenguni — kisha thibitisha na ulipe. Kila malipo hupatikana kama risiti inayothibitishwa.',
  'ride.myReceipts': 'Risiti zangu',
  'ride.searchPlaceholder': 'Tafuta kwa jina, nambari ya gari au njia…',
  'ride.searchAria': 'Tafuta huduma',
  'ride.filterAria': 'Chuja kwa aina ya huduma',
  'ride.all': 'Zote',
  'ride.emptyTitle': 'Hakuna huduma zilizopatikana',
  'ride.emptyDesc':
    'Jaribu utafutaji mwingine, kagua muunganisho wako wa relay, au subiri kidogo huduma zipakie.',

  /* Receipts page */
  'receipts.title': 'Risiti zangu',
  'receipts.back': 'Lipa nauli',
  'receipts.descUser': 'Risiti zilizounganishwa na akaunti yako ya Nostr — zinahamishika kwenye programu yoyote.',
  'receipts.descGuest':
    'Risiti zimehifadhiwa kwenye kifaa hiki kupitia ufunguo wako wa mgeni. Ingia kuziunganisha na akaunti yako ya Nostr.',
  'receipts.emptyTitle': 'Bado hakuna risiti',
  'receipts.emptyDesc': 'Lipa nauli yako ya kwanza na risiti yako itaonekana hapa papo hapo.',
  'receipts.total': 'Jumla ya matumizi ya usafiri',
  'receipts.count': 'malipo {n}',
  'receipts.confirmedNote': 'yote yamethibitishwa kwenye Nostr',
  'receipts.fareFallback': 'Malipo ya nauli',

  /* Vehicle payment page (QR landing) */
  'vp.back': 'Huduma zote',
  'vp.scanned': 'Umeskani ili kulipa',
  'vp.fare': 'Nauli',
  'vp.satsLine': 'sats {sats} · hutatuliwa kwa sekunde ~1',
  'vp.pay': 'LIPA {fare}',
  'vp.noSignup':
    'Hakuna hitaji la kujisajili. Risiti yako huhifadhiwa kwenye Nostr na kuonyeshwa papo hapo baada ya malipo.',
  'vp.notFoundTitle': 'Huduma haijapatikana',
  'vp.notFoundDesc':
    'Kiungo hiki cha malipo hakijapatikana kwenye relay zako. Huenda kimeondolewa, au relay bado hazijakisawazisha.',

  /* Pay dialog */
  'pay.confirmTitle': 'Thibitisha nauli',
  'pay.confirmDesc': 'Skani → Thibitisha → Lipa. Ndivyo tu.',
  'pay.walletBalance': 'Salio la pochi ya demo',
  'pay.insufficient': 'Sats za demo hazitoshi kwa nauli hii.',
  'pay.topUp': 'Ongeza sats {amount} kutoka faucet',
  'pay.button': 'LIPA {fare}',
  'pay.guest':
    'Unalipa kama mgeni — risiti zinahifadhiwa kwenye kifaa hiki. Ingia kuziunganisha na akaunti yako ya Nostr.',
  'pay.processing': 'Unalipa {fare}',
  'pay.line1': 'Inaomba ankara ya Lightning…',
  'pay.line2': 'Inasaini malipo…',
  'pay.line3': 'Inatatua kwenye mtandao…',
  'pay.line4': 'Inaandika risiti yako kwenye Nostr…',
  'pay.done': 'Nimemaliza — safari njema',
  'pay.failed': 'Malipo yameshindwa',

  /* Receipt ticket */
  'receipt.confirmed': 'MALIPO YAMETHIBITISHWA',
  'receipt.amount': 'Kiasi',
  'receipt.satsLine': 'sats {sats} · yametatuliwa papo hapo',
  'receipt.service': 'Huduma',
  'receipt.vehicle': 'Gari',
  'receipt.route': 'Njia',
  'receipt.date': 'Tarehe',
  'receipt.number': 'Risiti №',
  'receipt.footer': 'Asante! Imerekodiwa kwenye Nostr · satoride',

  /* Vehicle card */
  'vcard.pay': 'Lipa',
  'vcard.payAria': 'Lipa {fare} kwa {name}',

  /* QR dialog */
  'qr.title': 'QR ya malipo ya abiria',
  'qr.desc': 'Ichapishe ndani ya gari. Abiria huskeni → kuthibitisha → kulipa.',
  'qr.copied': 'Kiungo cha malipo kimenakiliwa',
  'qr.copyFail': 'Imeshindwa kunakili kiungo',
  'qr.copy': 'Nakili kiungo cha malipo',

  /* Activity ticker */
  'ticker.aria': 'Malipo ya hivi karibuni kwenye mtandao',

  /* Worker dashboard */
  'worker.title': 'Dashibodi ya mfanyakazi',
  'worker.desc': 'Kila nauli huwa historia ya mapato, akiba ya kiotomatiki na mfuko wa dharura — moja kwa moja kutoka Nostr.',
  'worker.demoBadge': 'Unatazama data ya demo',
  'worker.demoBannerPre': 'Hii ni dashibodi ya',
  'worker.demoBannerStrong': 'demo',
  'worker.demoBannerPost':
    '. Ingia kusajili matatu, boda au huduma yako mwenyewe, weka kanuni zako za akiba na uanze kupokea malipo.',
  'worker.today': 'Mapato ya leo',
  'worker.paymentOne': 'malipo',
  'worker.paymentMany': 'malipo',
  'worker.todayAvailable': '{available} yanapatikana baada ya akiba',
  'worker.autoSaved': 'Imewekwa akiba',
  'worker.trips7': 'Safari za siku 7',
  'worker.last7': 'Siku 7 zilizopita',
  'worker.statSaved': 'Jumla iliyowekwa akiba',
  'worker.statSavedHint': '{pct}% ya kila malipo',
  'worker.statEmergency': 'Mfuko wa dharura',
  'worker.statEmergencyHint': '{pct}% ya lengo la {goal}',
  'worker.statTrips': 'Safari (siku 30)',
  'worker.statTripsHint': 'siku {days} hai',
  'worker.statAvg': 'Wastani kwa siku hai',
  'worker.statAvgHint': '{amount} katika siku 30',
  'worker.efGoal': 'Lengo la mfuko wa dharura',
  'worker.efProgress': '{saved} kati ya {goal} · {pct}%',
  'worker.efDesc':
    'Kwa uharibifu wa gari, gharama za matibabu na wiki ngumu. {pct}% ya kila nauli huenda hapa otomatiki — mfanyakazi ndiye anayedhibiti kanuni na uondoaji.',
  'worker.liveTitle': 'Malipo ya moja kwa moja',
  'worker.updating': 'moja kwa moja',
  'worker.noPayments': 'Bado hakuna malipo. Sambaza QR ya gari lako kuanza kupokea nauli.',

  /* Savings rules */
  'rules.title': 'Kanuni zangu za akiba',
  'rules.autoSave': 'Akiba otomatiki',
  'rules.onFare': 'Kwa nauli ya {fare}, {saved} huwekwa akiba otomatiki.',
  'rules.emergency': 'Mfuko wa dharura',
  'rules.goal': 'Lengo la dharura (KSh)',
  'rules.save': 'Hifadhi kanuni',
  'rules.saving': 'Inahifadhi…',
  'rules.loginNote': 'Ingia kuweka kanuni zako mwenyewe.',
  'rules.savedToast': 'Kanuni za akiba zimehifadhiwa',
  'rules.savedToastDesc':
    'Kila malipo sasa huweka akiba {savings}% na kuweka {emergency}% kwenye mfuko wako wa dharura.',
  'rules.errorToast': 'Imeshindwa kuhifadhi kanuni',

  /* Worker vehicles */
  'vehicles.title': 'Magari na huduma',
  'vehicles.add': 'Ongeza gari',
  'vehicles.first': 'Sajili gari lako la kwanza',
  'vehicles.emptyTitle': 'Bado hakuna magari yaliyosajiliwa',
  'vehicles.emptyDesc':
    'Sajili matatu, boda au huduma yako kupata QR ya malipo ambayo abiria wanaweza kuskani.',
  'vehicles.perTrip': 'kwa safari',
  'vehicles.qr': 'QR ya malipo',
  'vehicles.simulate': 'Igiza',
  'vehicles.simulateFare': 'Igiza nauli',
  'vehicles.simulating': 'Inalipa…',
  'vehicles.simulateAria': 'Igiza abiria akilipa nauli hii (demo)',
  'vehicles.simToast': 'Malipo ya abiria yameigizwa',
  'vehicles.simToastDesc': '{fare} imewasili kwenye Malipo ya moja kwa moja.',
  'vehicles.simError': 'Uigizaji umeshindwa',

  /* Register vehicle dialog */
  'reg.title': 'Sajili gari au huduma',
  'reg.desc':
    'Inachapishwa kwenye Nostr kama orodha yako ya huduma. Unaweza kuisasisha wakati wowote kwa kusajili tena kwa nambari ile ile ya gari.',
  'reg.name': 'Jina',
  'reg.plate': 'Nambari ya gari (si lazima)',
  'reg.type': 'Aina',
  'reg.typeAria': 'Aina ya huduma',
  'reg.route': 'Njia / eneo',
  'reg.fare': 'Nauli (KSh)',
  'reg.publish': 'Chapisha huduma',
  'reg.publishing': 'Inachapisha…',
  'reg.nameRequired': 'Jina linahitajika',
  'reg.nameRequiredDesc': 'Kipe gari au huduma yako jina.',
  'reg.invalidFare': 'Nauli si sahihi',
  'reg.invalidFareDesc': 'Weka nauli kwa KSh, mf. 80.',
  'reg.success': 'Gari imesajiliwa',
  'reg.successDesc': 'QR yako ya malipo iko tayari kusambazwa.',
  'reg.error': 'Usajili umeshindwa',

  /* Operator dashboard */
  'op.title': 'Dashibodi ya mwendeshaji',
  'op.desc':
    'Mtazamo kwa SACCO, waendeshaji wa magari na biashara za usafiri — kila gari, muamala na shilingi, imekusanywa moja kwa moja kutoka Nostr.',
  'op.totalRevenue': 'Jumla ya mapato',
  'op.totalRevenueHint': 'nauli zote zilizorekodiwa',
  'op.transactions': 'Miamala',
  'op.transactionsHint': 'malipo yaliyothibitishwa',
  'op.activeServices': 'Huduma hai',
  'op.activeServicesHint': 'orodha zilizochapishwa',
  'op.workers': 'Wafanyakazi wanaopata',
  'op.workersHint': 'wapokeaji wa kipekee',
  'op.revenueByService': 'Mapato kwa huduma',
  'op.noTx': 'Bado hakuna miamala iliyorekodiwa.',
  'op.paymentOne': 'malipo {n}',
  'op.paymentMany': 'malipo {n}',
  'op.fleet': 'Utendaji wa magari',
  'op.noServicesTitle': 'Bado hakuna huduma',
  'op.noServicesDesc': 'Magari na huduma zilizosajiliwa zitaonekana hapa.',
  'op.thService': 'Huduma',
  'op.thFare': 'Nauli',
  'op.thPayments': 'Malipo',
  'op.thRevenue': 'Mapato',
  'op.latest': 'Miamala ya hivi karibuni',
  'op.openPassenger': 'Fungua programu ya abiria',

  /* USSD page */
  'ussd.title1': 'Huna simu mahiri?',
  'ussd.title2': 'Hakuna shida.',
  'ussd.desc':
    'Wasafiri wengi hubeba simu za kawaida tu. Kituo cha USSD cha SatoRide huleta malipo, akiba na mapato kwenye simu yoyote — jaribu kigezo hai.',
  'ussd.card1Title': 'Piga *384#',
  'ussd.card1Desc': 'Inafanya kazi kwenye simu yoyote ya GSM — bila kifurushi cha data, bila kusakinisha programu.',
  'ussd.card2Title': 'Injini ile ile chini',
  'ussd.card2Desc':
    'Kigezo hulipia kupitia pochi ile ile ya Lightning ya demo na kuandika risiti halisi kwenye Nostr.',
  'ussd.card3Title': 'Jaribu msimbo wa gari KCA 123A',
  'ussd.card3Desc':
    'Chagua 1 (Lipa), weka nambari kutoka kwenye stika ya matatu, thibitisha — risiti halisi inarudi.',
  'ussd.replyPlaceholder': 'Jibu…',
  'ussd.replyAria': 'Jibu la USSD',
  'ussd.send': 'Tuma',
  'ussd.dial': 'Piga *384#',
  'ussd.newSession': 'Kipindi kipya',
  'ussd.settling': 'Inatatua…',
  'ussd.reset': 'Weka upya kigezo',

  /* USSD in-phone screens */
  'ussd.s.idle':
    'Karibu SatoRide.\n\nPiga *384# kuanza kipindi — lipa nauli, angalia akiba na mapato kutoka kwa simu yoyote.',
  'ussd.s.menu':
    'SATORIDE\n1. Lipa nauli\n2. Salio la pochi\n3. Akiba yangu\n4. Mfuko wa dharura\n5. Mapato ya leo\n0. Toka',
  'ussd.s.payPlate':
    'LIPA NAULI\nWeka msimbo wa gari ulioko kwenye stika (mf. KCA 123A).\nTuma tupu kurudi.',
  'ussd.s.confirm': 'THIBITISHA MALIPO\n{lines}\nNauli: {fare}\n\n1. Thibitisha\n0. Ghairi',
  'ussd.s.processing': 'Inashughulikia malipo…\nInatatua kupitia Lightning.\n\nTafadhali subiri.',
  'ussd.s.done':
    'MALIPO YAMETHIBITISHWA ✓\n\n{fare} imelipwa kwa {name}.\nRisiti: {receipt}\n\nAsante! Tuma kitufe chochote kwa menyu.',
  'ussd.s.failed': 'Malipo yameshindwa.\n{message}\n\nTuma kitufe chochote kwa menyu.',
  'ussd.s.balance': 'SALIO LA POCHI\n\n⚡ sats {balance} (demo)\n\nTuma kitufe chochote kwa menyu.',
  'ussd.s.savings':
    'AKIBA YANGU\n\nJumla iliyowekwa: {total}\nKanuni ya akiba: kila nauli huchangia.\n\nTuma kitufe chochote kwa menyu.',
  'ussd.s.emergency': 'MFUKO WA DHARURA\n\nSalio: {total}\nLengo: {goal} ({pct}%)\n\nTuma kitufe chochote kwa menyu.',
  'ussd.s.earnings': 'MAPATO YA LEO\n\nJumla: {gross}\nMalipo: {trips}\n\nTuma kitufe chochote kwa menyu.',
  'ussd.s.invalid': '{message}\n\nTuma kitufe chochote kurudi.',
  'ussd.s.ended': 'Kipindi kimekwisha.\n\nAsante kwa kusafiri na SatoRide. Safiri. Pata. Weka Akiba. Fanikiwa.',
  'ussd.s.unknownCode': 'Msimbo "{value}" haujulikani. Piga *384# kwa SatoRide.',
  'ussd.s.invalidChoice': 'Chaguo si sahihi.',
  'ussd.s.notFound': 'Gari "{value}" halijapatikana. Angalia msimbo kwenye stika.',

  /* 404 */
  'nf.title': 'Njia hii haipo',
  'nf.desc': 'Inaonekana matatu hii imetoka stage. Rudi nyuma upate safari yako.',
  'nf.back': 'Rudi kwa SatoRide',

  /* SEO */
  'seo.home.title': 'SatoRide — Safiri. Pata. Weka Akiba. Fanikiwa.',
  'seo.home.desc':
    'Jukwaa la malipo madogo na uimara wa kifedha linalofikiwa kwa usafiri wa Afrika. Lipa matatu, boda, maegesho na chaji kwa sekunde chache — na ubadilishe kila nauli kuwa rekodi ya mapato, akiba ya kiotomatiki na mfuko wa dharura.',
  'seo.ride.title': 'Lipa nauli — SatoRide',
  'seo.ride.desc': 'Chagua matatu, boda, maegesho au chaji ulipe kwa sekunde chache. Skani → Lipa → Safiri.',
  'seo.receipts.title': 'Risiti zangu — SatoRide',
  'seo.receipts.desc': 'Kila nauli uliyolipa, kwa risiti inayothibitishwa iliyohifadhiwa kwenye Nostr.',
  'seo.worker.title': 'Dashibodi ya mfanyakazi — SatoRide',
  'seo.worker.desc':
    'Fuatilia mapato moja kwa moja, kua akiba ya kiotomatiki na mfuko wa dharura kwa kila nauli.',
  'seo.operator.title': 'Dashibodi ya mwendeshaji — SatoRide',
  'seo.operator.desc': 'Mtazamo wa magari yote: magari, miamala na mapato kwenye mtandao wa SatoRide.',
  'seo.ussd.title': 'Kigezo cha USSD — SatoRide',
  'seo.ussd.desc': 'Pata uzoefu wa SatoRide kwenye simu ya kawaida: lipa, angalia salio, akiba na mapato kupitia USSD.',
  'seo.payService.title': 'Lipa {name} — SatoRide',
  'seo.payService.titleFallback': 'Lipa — SatoRide',
  'seo.payService.desc': 'Lipa {fare} kwa {name} na SatoRide.',
  'seo.payService.descFallback': 'Lipa nauli na SatoRide.',
  'seo.nf.title': '404 - Ukurasa Haujapatikana — SatoRide',
  'seo.nf.desc': 'Ukurasa unaoutafuta haujapatikana. Rudi kwa SatoRide kuendelea kusafiri.',
};
