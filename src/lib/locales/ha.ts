import type { Translations } from './en';

/**
 * Kamus na Hausa — don Nijeriya da yankunan yammacin Afirka.
 * (Ana maraba da gyaran harshe daga al'umma — tsarin kamus na sauƙaƙa gyara.)
 */
export const ha: Translations = {
  /* Navigation & chrome */
  'nav.ride': 'Biya Kuɗin Mota',
  'nav.worker': 'Ma\'aikata',
  'nav.operator': 'Masu Gudanarwa',
  'nav.ussd': 'USSD',
  'nav.openMenu': 'Buɗe menu',
  'nav.main': 'Babba',
  'nav.mobile': 'Wayar hannu',
  'theme.toLight': 'Canza zuwa yanayin haske',
  'theme.toDark': 'Canza zuwa yanayin duhu',
  'lang.switch': 'Canza harshe',

  /* Footer */
  'footer.tagline':
    'Tafi. Samu. Ajiye. Bunƙasa. Biyan kaɗan-kaɗan na sauƙi da ƙarfin kuɗi don sufuri na Afirka.',
  'footer.prototype':
    'Ƙira ta hackathon — an kwaikwayi biyan Lightning, rajistan kuɗi yana kan Nostr.',

  /* Demo wallet */
  'wallet.sats': 'sats',
  'wallet.title': 'Jakar Lightning ta gwaji',
  'wallet.description':
    'Ƙira ta hackathon — tana kwaikwayon biyan Lightning nan take. Babu sats na gaske da ke motsawa.',
  'wallet.available': 'sats da ake da su',
  'wallet.topUp': 'Ƙara sats {amount}',
  'wallet.topUpToast': 'An karɓi ƙarin faucet',
  'wallet.topUpToastDesc': 'An ƙara sats {amount} na gwaji a jakar kuɗin ka.',

  /* Service types */
  'type.matatu': 'Matatu',
  'type.boda': 'Boda boda',
  'type.taxi': 'Taxi',
  'type.parking': 'Wurin ajiye mota',
  'type.charging': 'Cajin EV',
  'type.wifi': 'Wi-Fi na jama\'a',
  'type.other': 'Sabis',

  /* Relative time */
  'time.justNow': 'yanzu nan',
  'time.minAgo': 'minti {n} da suka wuce',
  'time.hrAgo': 'sa\'a {n} da suka wuce',
  'time.dayAgoOne': 'rana {n} da ta wuce',
  'time.dayAgoMany': 'kwana {n} da suka wuce',

  /* Landing — hero */
  'hero.badge': 'BIYAN KAƊAN-KAƊAN NA BITCOIN DON SUFURIN AFIRKA',
  'hero.title1': 'Tafi. Samu.',
  'hero.title2': 'Ajiye.',
  'hero.title3': 'Bunƙasa.',
  'hero.subtitle':
    'SatoRide tana canza biyan sufuri na yau da kullum zuwa ƙarfin kuɗi. Matafiya na biyan kuɗin mota cikin daƙiƙa — matatu, boda, wurin ajiye mota, caji — yayin da kowane biya ke gina tarihin samun ma\'aikaci, ajiya ta atomatik da asusun gaggawa.',
  'hero.ctaPay': 'Biya kuɗin mota',
  'hero.ctaWorker': 'Allon ma\'aikaci',
  'hero.live': 'Kai tsaye a kan Nostr yanzu',
  'hero.mockRider': 'Brian · Direban boda',
  'hero.mockToday': 'Samun yau',
  'hero.mockTrips': 'tafiye-tafiye 31',
  'hero.mockPassengers': 'matafiya 38',
  'hero.mockAutoSave': 'Ajiya ta atomatik (5%)',
  'hero.mockEmergency': 'Asusun gaggawa',
  'hero.mockGoal': 'Manufar gaggawa · KSh 20,000',
  'hero.mockRecent': 'Biya na kwanan nan',

  /* Landing — problem */
  'problem.eyebrow': 'Matsalar',
  'problem.title': 'Mafi yawan ma\'amalolin Afirka ba sa barin wata alama',
  'problem.desc':
    'Sufuri na ɗaya daga cikin ayyukan kuɗi da ake yi akai-akai a rayuwar yau da kullum. Amma duk kuɗin mota yana ƙarewa da zarar an biya — ga ɓangarorin biyu na tafiya.',
  'problem.passengerTitle': 'Ga matafiya',
  'problem.p1': 'Tsarin biya mai tsawo da wahala a kowane mataki',
  'problem.p2': 'Wahalar kuɗin hannu da damuwar samun canji daidai',
  'problem.p3': 'Babu tarihin ainihin kudin da sufuri ke kashewa kowane wata',
  'problem.p4': 'Daban-daban hanyoyin biya ga kowane sabis',
  'problem.workerTitle': 'Ga ma\'aikatan sufuri',
  'problem.w1': 'Samu mara tsayawa a kan ɗimbin ƙananan biya na yau da kullum',
  'problem.w2': 'Babu tsararren tarihin samu da za a nuna wa kowa',
  'problem.w3': 'Ajiya tana da wahala idan samu yana canjawa kowace rana',
  'problem.w4': 'Lalacewar mota da gaggawa na samun aljihu babu komai',
  'problem.quote':
    '"Direban boda na yin tafiye-tafiye 30–40 a rana. A ƙarshen rana, duk tarihin kuɗin sa shine: Na samu kimanin KSh 3,000."',

  /* Landing — core insight */
  'insight.eyebrow': 'Babban ra\'ayi',
  'insight.title': 'Kuɗin mota bai kamata ya ƙare da zarar an biya ba',
  'insight.desc': 'Kowane biya yana zama tubalin ginin rayuwar kuɗi ta ma\'aikaci.',
  'insight.s1t': 'Biya',
  'insight.s1d': 'Matafiya na biyan KSh 200',
  'insight.s2t': 'Rajista',
  'insight.s2d': 'An adana ma\'amala a kan Nostr',
  'insight.s3t': 'Samu',
  'insight.s3d': 'Tarihin samu yana ƙaruwa',
  'insight.s4t': 'Ajiya',
  'insight.s4d': 'An ajiye 5% ta atomatik',
  'insight.s5t': 'Ƙarfi',
  'insight.s5d': 'Asusun gaggawa yana girma',

  /* Landing — how it works */
  'how.eyebrow': 'Kwarewar matafiya',
  'how.title': 'Skani → Biya → Tafi',
  'how.desc': 'Fasaha tana ɓace. Matafiya ba sa buƙatar sanin menene satoshi.',
  'how.s1t': 'Skani',
  'how.s1d':
    'Yi skanin QR a cikin matatu ko boda — ko taɓa sabis a cikin app. Kuɗin mota yana bayyana nan take, a KSh.',
  'how.s2t': 'Biya',
  'how.s2d':
    'Babban maɓalli ɗaya. Lightning na ƙarewa a ƙasa cikin kusan dakika ɗaya — babu adireshi, babu kalmomin fasaha, babu jira.',
  'how.s3t': 'Tafi',
  'how.s3d': 'An tabbatar da rasit a gare ka, ma\'aikaci, da rajista. Wannan shi ne duk kwarewar.',
  'how.cta': 'Gwada — biya kuɗin mota na gwaji',

  /* Landing — one wallet */
  'onewallet.eyebrow': 'Bayan matatu',
  'onewallet.title': 'Jaka ɗaya, duk sabis na sufuri',
  'onewallet.desc':
    'Asusu ɗaya na sarrafa ƙananan biya da suka hada ranar tafiya — da izin sufuri na matafiya na yau da kullum.',
  'onewallet.matatu': 'Matatu',
  'onewallet.matatuNote': 'CBD → Ngong',
  'onewallet.boda': 'Boda boda',
  'onewallet.bodaNote': 'Ƙarshen tafiya, ko\'ina',
  'onewallet.parking': 'Wurin ajiye mota',
  'onewallet.parkingNote': 'Cikin garuruwa',
  'onewallet.charging': 'Cajin EV & e-bike',
  'onewallet.chargingNote': 'Caji yayin da kake siyayya',
  'onewallet.wifi': 'Wi-Fi na jama\'a',
  'onewallet.wifiNote': 'Biyan kaɗan-kaɗan, a ƙarshe ya yiwu',

  /* Landing — worker features */
  'wf.eyebrow': 'Ga ma\'aikatan sufuri',
  'wf.title': 'Kowane kuɗin mota yana gina ƙarfin kuɗi',
  'wf.desc':
    'Direbobi, kondakta da masu boda na zaɓar ƙa\'ida mai sauƙi — kamar ajiyar 5% na kowane biya — SatoRide kuma tana bin ta ta atomatik.',
  'wf.saveTitle': 'Ajiya ta atomatik',
  'wf.saveDesc':
    'Karɓi KSh 200 da ƙa\'idar 5% → KSh 190 yana akwai, an ajiye KSh 10. Babu buƙatar ƙarfin nufi, a kowane tafiya.',
  'wf.fareReceived': 'Kuɗin mota da aka karɓa',
  'wf.autoSaved': 'An ajiye (5%)',
  'wf.available': 'Yana akwai',
  'wf.efTitle': 'Asusun gaggawa',
  'wf.efDesc':
    'Wani asusu daban don lalacewar mota, kudin likita da makwanni masu wahala — tare da manufa da ake gani da ke girma a kowane biya.',
  'wf.efProgress': 'KSh 8,450 daga KSh 20,000',
  'wf.efMonth': '+ KSh 1,200 a wannan watan',
  'wf.historyTitle': 'Tarihin kuɗi na gaske',
  'wf.historyDesc':
    'Bayan wata ɗaya, ma\'aikaci yana iya cewa a ƙarshe — da bayanai — "Ina da samu da ya daidaita daga kasuwancin sufuri na."',
  'wf.stat30': 'Samun kwana 30',
  'wf.statTrips': 'Tafiye-tafiye',
  'wf.statAvg': 'Matsakaici / rana',
  'wf.statSaved': 'An ajiye',
  'wf.consent':
    'Gobe, da izini na gaskiya da tsaro mai ƙarfi na sirri, wannan tarihi zai iya taimaka wa buɗe tsarin kuɗi, inshora da kayayyakin ajiya. Ma\'aikaci ne mallakar bayanan sa a kowane lokaci.',

  /* Landing — HAUTE */
  'haute.eyebrow': 'Ƙa\'idojin ƙira',
  'haute.title': 'An gina shi da HAUTE',
  'haute.desc': 'Ƙa\'idoji biyar da ake auna duk shawarar SatoRide da su.',
  'haute.hTitle': 'Mutum da farko',
  'haute.hDesc': 'Muna farawa da matafiya, direbobi, kondakta da masu boda — sannan muka zaɓi fasaha.',
  'haute.aTitle': 'Sauƙin samu',
  'haute.aDesc':
    'PWA yau, USSD da SMS ga wayoyin da suka fi sauƙi gobe. Manyan maɓallai, harshe mai sauƙi, launi mai bayyana.',
  'haute.uTitle': 'Amfani yanzu',
  'haute.uDesc':
    'MVP tana ba da Biya → Tabbata → Rajista tuni. Kowane fasali na gaba yana gina kan wannan ma\'amala.',
  'haute.tTitle': 'Amincewa',
  'haute.tDesc':
    'An tabbatar da kowane biya ga matafiya, ma\'aikaci da mai gudanarwa, tare da tarihi bayyane da sarrafa sirri.',
  'haute.eTitle': 'Sauƙi',
  'haute.eDesc': 'Skani → Biya → Tafi. Wahalar Lightning da Nostr na ƙasan kewayon.',

  /* Landing — cross-border */
  'cb.eyebrow': 'Hangen nesa na dogon lokaci',
  'cb.title': 'Hanya ɗaya, kuɗaɗe da yawa',
  'cb.desc':
    'Lightning na iya ƙare kuɗi a hayayyakin iyakoki yayin da kewayon yana ci gaba da kasancewa na gida — KSh a Nairobi, UGX a Kampala. Matafiya yana riƙe jakar sufuri ɗaya a faɗin nahiyar.',

  /* Landing — final CTA */
  'cta.title': 'Tafiyar ka na iya zama wani ɓangare na rayuwar kuɗin ka',
  'cta.desc':
    'Gwada ƙira ta: biya kuɗin mota na gwaji da Lightning da aka kwaikwaya, sa\'an nan kalli yana isa allon ma\'aikaci a matsayin samu, ajiya da asusun gaggawa.',
  'cta.pay': 'Biya kuɗin mota',
  'cta.worker': 'Buɗe gwajin ma\'aikaci',
  'cta.ussd': 'Gwada kwaikwayon USSD',

  /* Ride page */
  'ride.title': 'Biya kuɗin mota',
  'ride.desc':
    'Zaɓi sabis — ko yi skanin QR ɗin sa a duniya — sannan ka tabbata ka kuma biya. Kowane biya yana ba da rasit da za a iya tabbatarwa.',
  'ride.myReceipts': 'Rasit na',
  'ride.searchPlaceholder': 'Nema da suna, lambar mota ko hanya…',
  'ride.searchAria': 'Neman sabis',
  'ride.filterAria': 'Tace ta nau\'in sabis',
  'ride.all': 'Duka',
  'ride.emptyTitle': 'Babu sabis da aka samu',
  'ride.emptyDesc':
    'Gwada wata nema, duba haɗin relay ɗin ka, ko jira kaɗan sabis su lodi.',

  /* Receipts page */
  'receipts.title': 'Rasit na',
  'receipts.back': 'Biya kuɗin mota',
  'receipts.descUser': 'Rasit da aka haɗa da asusun Nostr ɗin ka — yana tafiya tare da kai a kowace app.',
  'receipts.descGuest':
    'An adana rasit a wannan na\'ura ta maɓallin bako ɗin ka. Shiga don haɗa su da asusun Nostr ɗin ka.',
  'receipts.emptyTitle': 'Babu rasit tukuna',
  'receipts.emptyDesc': 'Biya kuɗin mota ɗin ka na farko, rasit ɗin ka zai bayyana nan nan take.',
  'receipts.total': 'Jimillar kashe kuɗin sufuri',
  'receipts.count': 'biya {n}',
  'receipts.confirmedNote': 'duk an tabbatar da su a kan Nostr',
  'receipts.fareFallback': 'Biyan kuɗin mota',

  /* Vehicle payment page (QR landing) */
  'vp.back': 'Duk sabis',
  'vp.scanned': 'Ka yi skani don biya',
  'vp.fare': 'Kuɗin mota',
  'vp.satsLine': 'sats {sats} · ana ƙarewa cikin ~dakika 1',
  'vp.pay': 'BIYA {fare}',
  'vp.noSignup':
    'Babu buƙatar rajista. Ana adana rasit ɗin ka a kan Nostr kuma ana nuna shi nan take bayan biya.',
  'vp.notFoundTitle': 'Ba a samu sabis ba',
  'vp.notFoundDesc':
    'Ba a sami wannan hanyar biya a kan relay ɗin ka ba. Wataƙila an cire shi, ko relay ba su daidaita shi ba tukuna.',

  /* Pay dialog */
  'pay.confirmTitle': 'Tabbatar da kuɗin mota',
  'pay.confirmDesc': 'Skani → Tabbata → Biya. Shi kenan.',
  'pay.walletBalance': 'Ragowar jakar gwaji',
  'pay.insufficient': 'Sats na gwaji ba su isa wannan kuɗin mota ba.',
  'pay.topUp': 'Ƙara sats {amount} daga faucet',
  'pay.button': 'BIYA {fare}',
  'pay.guest':
    'Kana biya a matsayin bako — ana adana rasit a wannan na\'ura. Shiga don haɗa su da asusun Nostr ɗin ka.',
  'pay.processing': 'Kana biyan {fare}',
  'pay.line1': 'Ana neman lissafin Lightning…',
  'pay.line2': 'Ana sanya hannu kan biya…',
  'pay.line3': 'Ana ƙarewa a kan cibiyar sadarwa…',
  'pay.line4': 'Ana rubuta rasit ɗin ka a kan Nostr…',
  'pay.done': 'An gama — tafiya lafiya',
  'pay.failed': 'Biya ta kasa',

  /* Receipt ticket */
  'receipt.confirmed': 'AN TABBATAR DA BIYA',
  'receipt.amount': 'Adadin kuɗi',
  'receipt.satsLine': 'sats {sats} · an ƙare nan take',
  'receipt.service': 'Sabis',
  'receipt.vehicle': 'Mota',
  'receipt.route': 'Hanya',
  'receipt.date': 'Kwanan wata',
  'receipt.number': 'Rasit №',
  'receipt.footer': 'Na gode! An rubuta a kan Nostr · satoride',

  /* Vehicle card */
  'vcard.pay': 'Biya',
  'vcard.payAria': 'Biya {fare} ga {name}',

  /* QR dialog */
  'qr.title': 'QR na biya na matafiya',
  'qr.desc': 'Buga shi a cikin mota. Matafiya na skani → tabbata → biya.',
  'qr.copied': 'An kwafi hanyar biya',
  'qr.copyFail': 'Ba a iya kwafe hanya ba',
  'qr.copy': 'Kwafi hanyar biya',

  /* Activity ticker */
  'ticker.aria': 'Biya na kwanan nan a kan dandali',

  /* Worker dashboard */
  'worker.title': 'Allon ma\'aikaci',
  'worker.desc': 'Kowane kuɗin mota yana zama tarihin samu, ajiya ta atomatik da asusun gaggawa — kai tsaye daga Nostr.',
  'worker.demoBadge': 'Kana kallon bayanan gwaji',
  'worker.demoBannerPre': 'Wannan shi ne allon',
  'worker.demoBannerStrong': 'tawagar motoci ta gwaji',
  'worker.demoBannerPost':
    '. Shiga don yin rajistar matatu, boda ko sabis ɗin ka, saƙa ka\'idojin ajiya ɗin ka kuma fara karɓar biya.',
  'worker.today': 'Samun yau',
  'worker.paymentOne': 'biya',
  'worker.paymentMany': 'biya',
  'worker.todayAvailable': '{available} yana akwai bayan ajiya',
  'worker.autoSaved': 'An ajiye',
  'worker.trips7': 'Tafiye-tafiye kwana 7',
  'worker.last7': 'Kwana 7 da suka wuce',
  'worker.statSaved': 'Jimlar da aka ajiye',
  'worker.statSavedHint': '{pct}% na kowane biya',
  'worker.statEmergency': 'Asusun gaggawa',
  'worker.statEmergencyHint': '{pct}% na manufar {goal}',
  'worker.statTrips': 'Tafiye-tafiye (kwana 30)',
  'worker.statTripsHint': 'kwana {days} masu aiki',
  'worker.statAvg': 'Matsakaici a rana mai aiki',
  'worker.statAvgHint': '{amount} cikin kwana 30',
  'worker.efGoal': 'Manufar asusun gaggawa',
  'worker.efProgress': '{saved} daga {goal} · {pct}%',
  'worker.efDesc':
    'Don lalacewar mota, kudin likita da makwanni masu wahala. {pct}% na kowane kuɗin mota yana zuwa nan ta atomatik — ma\'aikaci ne ke sarrafa ƙa\'ida da fitarwa.',
  'worker.liveTitle': 'Biya kai tsaye',
  'worker.updating': 'ana sabuntawa kai tsaye',
  'worker.noPayments': 'Babu biya tukuna. Raba QR na motar ka don fara karɓar kuɗin mota.',

  /* Savings rules */
  'rules.title': 'Ƙa\'idojin ajiya na',
  'rules.autoSave': 'Ajiya ta atomatik',
  'rules.onFare': 'A kan kuɗin mota {fare}, ana ajiyar {saved} ta atomatik.',
  'rules.emergency': 'Asusun gaggawa',
  'rules.goal': 'Manufar gaggawa (KSh)',
  'rules.save': 'Ajiye ƙa\'idoji',
  'rules.saving': 'Ana ajiyewa…',
  'rules.loginNote': 'Shiga don saƙa ka\'idojin ka.',
  'rules.savedToast': 'An ajiye ƙa\'idojin ajiya',
  'rules.savedToastDesc':
    'Kowane biya yanzu yana ajiyar {savings}% kuma yana sanya {emergency}% a asusun gaggawa ɗin ka.',
  'rules.errorToast': 'Ba a iya ajiye ƙa\'idoji ba',

  /* Worker vehicles */
  'vehicles.title': 'Motoci da sabis',
  'vehicles.add': 'Ƙara mota',
  'vehicles.first': 'Yi rajistar motar ka ta farko',
  'vehicles.emptyTitle': 'Babu motoci da aka yi rajista tukuna',
  'vehicles.emptyDesc':
    'Yi rajistar matatu, boda ko sabis ɗin ka don samun QR na biya da matafiya za su iya skani.',
  'vehicles.perTrip': 'a tafiya',
  'vehicles.qr': 'QR na biya',
  'vehicles.simulate': 'Kwaikwaya',
  'vehicles.simulateFare': 'Gwada kuɗin mota',
  'vehicles.simulating': 'Ana biya…',
  'vehicles.simulateAria': 'Kwaikwayi matafiya yana biyan wannan kuɗin mota (gwaji)',
  'vehicles.simToast': 'An kwaikwayi biyan matafiya',
  'vehicles.simToastDesc': '{fare} ya shiga Biya kai tsaye.',
  'vehicles.simError': 'Kwaikwayo ya kasa',

  /* Register vehicle dialog */
  'reg.title': 'Yi rajistar mota ko sabis',
  'reg.desc':
    'An wallafa shi a kan Nostr a matsayin tallar sabis ɗin ka. Kana iya sabuntawa a kowane lokaci ta sake rajista da lambar mota ɗaya.',
  'reg.name': 'Suna',
  'reg.plate': 'Lambar mota (zaɓi)',
  'reg.type': 'Nau\'i',
  'reg.typeAria': 'Nau\'in sabis',
  'reg.route': 'Hanya / wuri',
  'reg.fare': 'Kuɗin mota (KSh)',
  'reg.publish': 'Wallafa sabis',
  'reg.publishing': 'Ana wallafawa…',
  'reg.nameRequired': 'Ana buƙatar suna',
  'reg.nameRequiredDesc': 'Ba motar ka ko sabis ɗin ka suna.',
  'reg.invalidFare': 'Kuɗin mota ba daidai ba ne',
  'reg.invalidFareDesc': 'Shigar da kuɗin mota a KSh, misali 80.',
  'reg.success': 'An yi rajistar mota',
  'reg.successDesc': 'QR ɗin biya ɗin ka ya shirya don raba.',
  'reg.error': 'Rajista ya kasa',

  /* Operator dashboard */
  'op.title': 'Allon mai gudanarwa',
  'op.desc':
    'Kallon SACCO, masu gudanar da motoci da kasuwancin sufuri — kowace mota, ma\'amala da sili, an tattara kai tsaye daga Nostr.',
  'op.totalRevenue': 'Jimlar samu',
  'op.totalRevenueHint': 'duk kuɗin mota da aka rubuta',
  'op.transactions': 'Ma\'amaloli',
  'op.transactionsHint': 'biya da aka tabbatar',
  'op.activeServices': 'Sabis masu aiki',
  'op.activeServicesHint': 'talloli da aka wallafa',
  'op.workers': 'Ma\'aikata masu samu',
  'op.workersHint': 'masu karɓa na musamman',
  'op.revenueByService': 'Samu ta sabis',
  'op.noTx': 'Babu ma\'amaloli da aka rubuta tukuna.',
  'op.paymentOne': 'biya {n}',
  'op.paymentMany': 'biya {n}',
  'op.fleet': 'Ayyukan tawagar motoci',
  'op.noServicesTitle': 'Babu sabis tukuna',
  'op.noServicesDesc': 'Motoci da sabis da aka yi rajista za su bayyana a nan.',
  'op.thService': 'Sabis',
  'op.thFare': 'Kuɗin mota',
  'op.thPayments': 'Biya',
  'op.thRevenue': 'Samu',
  'op.latest': 'Ma\'amaloli na kwanan nan',
  'op.openPassenger': 'Buɗe app na matafiya',

  /* USSD page */
  'ussd.title1': 'Babu wayar salula?',
  'ussd.title2': 'Babu matsala.',
  'ussd.desc':
    'Matafiya da yawa suna ɗauke da waya mai sauƙi kawai. Tashar USSD ta SatoRide tana kawo biya, ajiya da samu ga kowace waya — gwada kwaikwayon kai tsaye.',
  'ussd.card1Title': 'Kira *384#',
  'ussd.card1Desc': 'Yana aiki a kowace wayar GSM — babu fakitin bayanai, babu shigar da app.',
  'ussd.card2Title': 'Injin ɗaya a ƙasa',
  'ussd.card2Desc':
    'Kwaikwayon yana biya ta jakar Lightning ta gwaji ɗaya kuma yana rubuta rasit na gaske a kan Nostr.',
  'ussd.card3Title': 'Gwada lambar mota KCA 123A',
  'ussd.card3Desc':
    'Zaɓi 1 (Biya), shigar da lambar daga sitika na matatu, tabbata — rasit na gaske yana dawowa.',
  'ussd.replyPlaceholder': 'Amsa…',
  'ussd.replyAria': 'Amsar USSD',
  'ussd.send': 'Aika',
  'ussd.dial': 'Kira *384#',
  'ussd.newSession': 'Sabuwar zama',
  'ussd.settling': 'Ana ƙarewa…',
  'ussd.reset': 'Sake saita kwaikwayo',

  /* USSD in-phone screens */
  'ussd.s.idle':
    'Barka da zuwa SatoRide.\n\nKira *384# don fara zama — biya kuɗin mota, duba ajiya da samu daga kowace waya.',
  'ussd.s.menu':
    'SATORIDE\n1. Biya kuɗin mota\n2. Ragowar jaka\n3. Ajiya na\n4. Asusun gaggawa\n5. Samun yau\n0. Fita',
  'ussd.s.payPlate':
    'BIYA KUƊIN MOTA\nShigar da lambar mota da ke kan sitika (misali KCA 123A).\nAika fanko don komawa.',
  'ussd.s.confirm': 'TABBATAR DA BIYA\n{lines}\nKuɗin mota: {fare}\n\n1. Tabbata\n0. Soke',
  'ussd.s.processing': 'Ana sarrafa biya…\nAna ƙarewa ta Lightning.\n\nDon Allah jira.',
  'ussd.s.done':
    'AN TABBATAR DA BIYA ✓\n\nAn biya {fare} ga {name}.\nRasit: {receipt}\n\nNa gode! Aika kowane maɓalli don menu.',
  'ussd.s.failed': 'Biya ta kasa.\n{message}\n\nAika kowane maɓalli don menu.',
  'ussd.s.balance': 'RAGOWAR JAKA\n\n⚡ sats {balance} (gwaji)\n\nAika kowane maɓalli don menu.',
  'ussd.s.savings':
    'AJIYA NA\n\nJimlar da aka ajiye: {total}\nƘa\'idar ajiya: kowane kuɗin mota yana ba da gudummawa.\n\nAika kowane maɓalli don menu.',
  'ussd.s.emergency': 'ASUSUN GAGGAWA\n\nRagowar: {total}\nManufa: {goal} ({pct}%)\n\nAika kowane maɓalli don menu.',
  'ussd.s.earnings': 'SAMUN YAU\n\nJimlar: {gross}\nBiya: {trips}\n\nAika kowane maɓalli don menu.',
  'ussd.s.invalid': '{message}\n\nAika kowane maɓalli don komawa.',
  'ussd.s.ended': 'Zama ya ƙare.\n\nNa gode da tafiya tare da SatoRide. Tafi. Samu. Ajiye. Bunƙasa.',
  'ussd.s.unknownCode': 'Lambar "{value}" ba a san ta ba. Kira *384# don SatoRide.',
  'ussd.s.invalidChoice': 'Zaɓi ba daidai ba ne.',
  'ussd.s.notFound': 'Ba a sami motar "{value}" ba. Duba lambar a kan sitika.',

  /* 404 */
  'nf.title': 'Wannan hanya ba ta nan',
  'nf.desc': 'Da alama wannan matatu ta bar tashar. Koma baya don samun tafiyar ka.',
  'nf.back': 'Koma SatoRide',

  /* SEO */
  'seo.home.title': 'SatoRide — Tafi. Samu. Ajiye. Bunƙasa.',
  'seo.home.desc':
    'Dandalin biyan kaɗan-kaɗan mai sauƙin samu da ƙarfin kuɗi don sufuri na Afirka. Biya matatu, boda, wurin ajiye mota da caji cikin daƙiƙa — kuma canza kowane kuɗin mota zuwa tarihin samu, ajiya ta atomatik da asusun gaggawa.',
  'seo.ride.title': 'Biya kuɗin mota — SatoRide',
  'seo.ride.desc': 'Zaɓi matatu, boda, wurin ajiye mota ko wurin caji kuma ka biya cikin daƙiƙa. Skani → Biya → Tafi.',
  'seo.receipts.title': 'Rasit na — SatoRide',
  'seo.receipts.desc': 'Kowane kuɗin mota da ka biya, tare da rasit da za a iya tabbatarwa da aka adana a kan Nostr.',
  'seo.worker.title': 'Allon ma\'aikaci — SatoRide',
  'seo.worker.desc':
    'Bi diddigon samu a lokaci na gaske, ƙara girman ajiya ta atomatik da asusun gaggawa a kowane kuɗin mota.',
  'seo.operator.title': 'Allon mai gudanarwa — SatoRide',
  'seo.operator.desc': 'Kallon tawagar motoci: motoci, ma\'amaloli da samu a kan cibiyar SatoRide.',
  'seo.ussd.title': 'Kwaikwayon USSD — SatoRide',
  'seo.ussd.desc': 'Samu kwarewar SatoRide a kan waya mai sauƙi: biya, duba ragowar, ajiya da samu ta USSD.',
  'seo.payService.title': 'Biya {name} — SatoRide',
  'seo.payService.titleFallback': 'Biya — SatoRide',
  'seo.payService.desc': 'Biya {fare} ga {name} da SatoRide.',
  'seo.payService.descFallback': 'Biya kuɗin mota da SatoRide.',
  'seo.nf.title': '404 - Ba a sami shafi ba — SatoRide',
  'seo.nf.desc': 'Ba a sami shafin da kake nema ba. Koma SatoRide don ci gaba da tafiya.',
};
