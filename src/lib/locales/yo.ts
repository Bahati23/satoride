import type { Translations } from './en';

/**
 * Ìwé ìtumọ̀ Yorùbá — fun Nàìjíríà àti àfíníkáńláàwá Yorùbá.
 * (Community refinement of wording is welcome — the dictionary structure
 * makes corrections a one-line change.)
 */
export const yo: Translations = {
  /* Navigation & chrome */
  'nav.ride': 'San Owo Ọkọ̀',
  'nav.worker': 'Àwọn Òṣìṣẹ́',
  'nav.operator': 'Àwọn Olùṣàkóso',
  'nav.ussd': 'USSD',
  'nav.openMenu': 'Ṣí àtòjọ àwọn nǹkan',
  'nav.main': 'Gbangba',
  'nav.mobile': 'Fóònù',
  'theme.toLight': 'Yípadà sí ìmọ́lẹ̀',
  'theme.toDark': 'Yípadà sí òkùnkùn',
  'lang.switch': 'Yí èdè padà',

  /* Footer */
  'footer.tagline':
    'Rìn. Jèrè. Pamọ́. Gbéga. Ìsanwó díẹ̀díẹ̀ tó rọrùn àti agbára inawó fún ìrìnnà Áfíríkà.',
  'footer.prototype':
    'Àpẹẹrẹ hackathon — a ṣe àfihàn ìsanwó Lightning, àwọn ìrísìtì wà lórí Nostr.',

  /* Demo wallet */
  'wallet.sats': 'sats',
  'wallet.title': 'Àpò owó Lightning àpẹẹrẹ',
  'wallet.description':
    'Àpẹẹrẹ hackathon — ó ń ṣe àfihàn bí Lightning ṣe ń sanwó lẹ́sẹ̀kẹsẹ̀. Kò sí sats tòótọ́ tó ń rìn.',
  'wallet.available': 'sats tó wà',
  'wallet.topUp': 'Gba sats {amount} kún',
  'wallet.topUpToast': 'Àfikún faucet ti dé',
  'wallet.topUpToastDesc': 'A ti fi sats {amount} àpẹẹrẹ kún àpò owó rẹ.',

  /* Service types */
  'type.matatu': 'Matatu',
  'type.boda': 'Boda boda',
  'type.taxi': 'Taksi',
  'type.parking': 'Ibùdó ọkọ̀',
  'type.charging': 'Chaji EV',
  'type.wifi': 'Wi-Fi gbogbogbò',
  'type.other': 'Iṣẹ́',

  /* Relative time */
  'time.justNow': 'nísìnyí',
  'time.minAgo': 'ìṣẹ́jú {n} sẹ́yìn',
  'time.hrAgo': 'wákàtí {n} sẹ́yìn',
  'time.dayAgoOne': 'ọjọ́ {n} sẹ́yìn',
  'time.dayAgoMany': 'ọjọ́ {n} sẹ́yìn',

  /* Landing — hero */
  'hero.badge': 'ÌSANWÓ DÍẸ̀DÍẸ̀ BITCOIN FÚN ÌRÌNNÀ ÁFÍRÍKÀ',
  'hero.title1': 'Rìn. Jèrè.',
  'hero.title2': 'Pamọ́.',
  'hero.title3': 'Gbéga.',
  'hero.subtitle':
    'SatoRide ń yí ìsanwó ìrìnnà ojoojúmọ́ padà sí agbára inawó. Àwọn èrò lè san owo ọkọ̀ kíkún láàáà náǹfáàní — matatu, boda, ibùdó ọkọ̀, chaji — nígbà tí gbogbo ìsanwó ń kọ́ ìtàn owó tí òṣìṣẹ́ ń rí, ìfipamọ́ fúnra rẹ̀ àti ìkòwó pajawiri.',
  'hero.ctaPay': 'San owo ọkọ̀',
  'hero.ctaWorker': 'Ojú-ìwòye òṣìṣẹ́',
  'hero.live': 'Ní láàyè lórí Nostr',
  'hero.mockRider': 'Brian · Awakọ̀ boda',
  'hero.mockToday': 'Èrè òní',
  'hero.mockTrips': 'ìrìnnà 31',
  'hero.mockPassengers': 'èrò 38',
  'hero.mockAutoSave': 'Ìfipamọ́ fúnra rẹ̀ (5%)',
  'hero.mockEmergency': 'Ìkòwó pajawiri',
  'hero.mockGoal': 'Àfojúsùn pajawiri · KSh 20,000',
  'hero.mockRecent': 'Àwọn ìsanwó láípẹ́',

  /* Landing — problem */
  'problem.eyebrow': 'Ìṣòro náà',
  'problem.title': 'Àwọn ìsanwó tó pọ̀ jù lọ ní Áfíríkà kò fi àmì kankan sílẹ̀',
  'problem.desc':
    'Ìrìnnà jẹ́ ọ̀kan lára àwọn nǹkan tí a ń fi owó ṣe ní gbogbo ọjọ́. Ṣùgbọ́n gbogbo owo ọkọ̀ ń parí lẹ́sẹ̀ tó bá ti san — nígbàtíkan náà fún àwọn méjèèjì.',
  'problem.passengerTitle': 'Fún àwọn èrò',
  'problem.p1': 'Àwọn ọ̀nà ìsanwó tó gùn tó sì le ní gbogbo ibi',
  'problem.p2': 'Wàhálà owó kékeré àti àníyàn láti rí chenji tó pé',
  'problem.p3': 'Kò sí ìtàn ohun tí ìrìnnà gba jẹ́ níloṣùú kan',
  'problem.p4': 'Ọ̀nà ìsanwó tó yàtọ̀ fún iṣẹ́ kọ̀ọ̀kan',
  'problem.workerTitle': 'Fún àwọn òṣìṣẹ́ ìrìnnà',
  'problem.w1': 'Èrè tí kò dúró lórí ọ̀pọ̀ ìsanwó díẹ̀ ojoojúmọ́',
  'problem.w2': 'Kò sí ìtàn èrè tó pé lára láfi hàn ẹnikẹ́ni',
  'problem.w3': 'Ìfipamọ́ le nígbà tí èrè ń yí padà lójoojúmọ́',
  'problem.w4': 'Ìbàjẹ́ ọkọ̀ àti pajawiri ń pàdé àpò òfo',
  'problem.quote':
    '"Awakọ̀ boda ń ṣe ìrìnnà 30–40 lójọ́ kan. Nígbàtó bá dálẹ̀, gbogbo ìtàn inawó rẹ̀ ni: mo rí bíi KSh 3,000."',

  /* Landing — core insight */
  'insight.eyebrow': 'Èrò ńlá náà',
  'insight.title': 'Owo ọkọ̀ kò gbọdọ̀ parí nígbà tí a bá ti san án',
  'insight.desc': 'Gbogbo ìsanwó ń di ohun èlò ìkọ́lẹ̀ nínú ìṣẹ̀ṣẹ̀ inawó òṣìṣẹ́.',
  'insight.s1t': 'Ìsanwó',
  'insight.s1d': 'Ẹni ń lọ san KSh 200',
  'insight.s2t': 'Ìtàn',
  'insight.s2d': 'A kọ ìsanwó pamọ́ lórí Nostr',
  'insight.s3t': 'Èrè',
  'insight.s3d': 'Ìtàn owó tí wọ́n rí ń pọ̀ sí i',
  'insight.s4t': 'Ìfipamọ́',
  'insight.s4d': 'A yà 5% sọ́tọ̀ fúnra rẹ̀',
  'insight.s5t': 'Agbára',
  'insight.s5d': 'Ìkòwó pajawiri ń dàgbà',

  /* Landing — how it works */
  'how.eyebrow': 'Ìrírí èrò',
  'how.title': 'Ṣàyẹ̀wò → Sanwó → Lọ',
  'how.desc': 'Ìmọ́-ẹ̀rọ̀ ń pàrẹ́. Àwọn èrò kò nílò láti mọ ohun tí satoshi jẹ́.',
  'how.s1t': 'Ṣàyẹ̀wò',
  'how.s1d':
    'Ṣàyẹ̀wò kóòdù QR nínú matatu tàbí boda — tàbí kàn iṣẹ́ nínú ètò náà. Owo ọkọ̀ á fi ara rẹ̀ hàn lẹ́sẹ̀kẹsẹ̀, ní KSh.',
  'how.s2t': 'Sanwó',
  'how.s2d':
    'Bọ́tìnì ńlá kan ṣoṣo. Lightning ń parí ẹ̀ nísàlẹ̀ nínú bíi ìṣẹ́jú-àáyá kan — kò sí àdírẹ́sì, kò sí ọ̀rọ̀-ẹ̀rọ̀, kò sí ìdúró.',
  'how.s3t': 'Lọ',
  'how.s3d': 'A fìrísìtì hàn ọ́, òṣìṣẹ́, àti ìtàn náà. Ìyẹn ni gbogbo ìrírí náà.',
  'how.cta': 'Gbàgbé — san owo ọkọ̀ àpẹẹrẹ',

  /* Landing — one wallet */
  'onewallet.eyebrow': 'Kòjá matatu',
  'onewallet.title': 'Àpò owó kan ṣoṣo, gbogbo iṣẹ́ ìrìnnà',
  'onewallet.desc':
    'Àkáǹtì kannáá ń ṣàkóso àwọn ìsanwó díẹ̀díẹ̀ tó dájọ́ ìrìnnà kan — àti pásì ìrìnnà fún àwọn tó ń rìn lójoojúmọ́.',
  'onewallet.matatu': 'Matatu',
  'onewallet.matatuNote': 'CBD → Ngong',
  'onewallet.boda': 'Boda boda',
  'onewallet.bodaNote': 'Ìparí ọ̀nà, níbikíbi',
  'onewallet.parking': 'Ibùdó ọkọ̀',
  'onewallet.parkingNote': 'Àwọn àárín ìlú',
  'onewallet.charging': 'Chaji EV & e-bike',
  'onewallet.chargingNote': 'Gba agbára nígbà tí o bá ń sàrà',
  'onewallet.wifi': 'Wi-Fi gbogbogbò',
  'onewallet.wifiNote': 'Ìsanwó díẹ̀díẹ̀, ó ti ṣeé ṣe níkẹ̀yìn',

  /* Landing — worker features */
  'wf.eyebrow': 'Fún àwọn òṣìṣẹ́ ìrìnnà',
  'wf.title': 'Gbogbo owo ọkọ̀ ń kọ́ agbára inawó',
  'wf.desc':
    'Àwọn awakọ̀, kóńdákítà àti awakọ̀ boda ń yan ìlànà rọrùn kan — bíi ìfipamọ́ 5% gbogbo ìsanwó — SatoRide sì ń tẹ̀lé ọ́ fúnra rẹ̀.',
  'wf.saveTitle': 'Ìfipamọ́ fúnra rẹ̀',
  'wf.saveDesc':
    'Gba KSh 200 pẹ̀lú ìlànà 5% → KSh 190 ló wà, a ti pamọ́ KSh 10. Kò nílò agbára ìfaradà, lórí gbogbo ìrìnnà.',
  'wf.fareReceived': 'Owo ọkọ̀ tí a gba',
  'wf.autoSaved': 'Ti pamọ́ (5%)',
  'wf.available': 'Tó wà',
  'wf.efTitle': 'Ìkòwó pajawiri',
  'wf.efDesc':
    'Ìkòwó tó yàtọ̀ fún ìbàjẹ́ ọkọ̀, owó ìwòsàn àti àwọn ọ̀sẹ̀ tó le — pẹ̀lú àfojúsùn tó fi hàn tó ń dàgbà lórí gbogbo ìsanwó.',
  'wf.efProgress': 'KSh 8,450 nínú KSh 20,000',
  'wf.efMonth': '+ KSh 1,200 ní oṣù yìí',
  'wf.historyTitle': 'Ìtàn inawó tòótọ́',
  'wf.historyDesc':
    'Lẹ́yìn oṣù kan, òṣìṣẹ́ lè sọ níparí — pẹ̀lú ẹ̀rí — pé "Mo ní èrè tó dúró láti iṣẹ́ ìrìnnà mi."',
  'wf.stat30': 'Èrè ọjọ́ 30',
  'wf.statTrips': 'Ìrìnnà',
  'wf.statAvg': 'Àárín / ọjọ́',
  'wf.statSaved': 'Ti pamọ́',
  'wf.consent':
    'Ní ọla, pẹ̀lú ìfàṣẹ́yìn kedere àti ààbò àṣírí tó lewu, ìtàn yìí lè ṣèrànlọ́ láti ṣí ẹ̀tọ́ ètò inawó, ìnṣúránsì àti àwọn ọjà ìfipamọ́. Òṣìṣẹ́ ni oní dátà rẹ̀ nígbà gbogbo.',

  /* Landing — HAUTE */
  'haute.eyebrow': 'Àwọn ìlànà àpẹẹrẹ',
  'haute.title': 'A kọ́ ọ́ pẹ̀lú HAUTE',
  'haute.desc': 'Àwọn ìlànà márùn tí a ń wíwọ́n gbogbo ìpinnu SatoRide.',
  'haute.hTitle': 'Ènìyàn ni kọ́kọ́rọ́',
  'haute.hDesc': 'A bẹ̀rẹ̀ pẹ̀lú àwọn èrò, awakọ̀, kóńdákítà àti awakọ̀ boda — ká tó yan ìmọ́-ẹ̀rọ̀ lẹ́yìn náà.',
  'haute.aTitle': 'Tó léè dé',
  'haute.aDesc':
    'PWA lónìí, USSD àti SMS fún àwọn fóònù rọrùn ní ọla. Àwọn bọ́tìnì ńlá, ọ̀rọ̀ rọrùn, àwọ̀ tó yàtọ̀ kedere.',
  'haute.uTitle': 'Tó wúlò ní báyìí',
  'haute.uDesc':
    'MVP ti ń fúnni ní Sanwó → Jẹ́ kó dájú → Kọ̀wé. Gbogbo ohun tó ń bọ̀ á dúró lórí ìsanwó kannáá.',
  'haute.tTitle': 'Tó gbẹ́kẹ̀lé',
  'haute.tDesc':
    'Gbogbo ìsanwó ń jẹ́ kó dájú fún èrò, òṣìṣẹ́ àti olùṣàkóso, pẹ̀lú ìtàn kedere àti ààbò àṣírí.',
  'haute.eTitle': 'Rọrùn',
  'haute.eDesc': 'Ṣàyẹ̀wò → Sanwó → Lọ. Ìṣòro Lightning àti Nostr wà nísàlẹ̀ ojú-ìwòye.',

  /* Landing — cross-border */
  'cb.eyebrow': 'Èròjà ọjọ́ iwájú',
  'cb.title': 'Ọ̀nà kan ṣoṣo, oríṣiríṣi owó orílẹ̀',
  'cb.desc':
    'Lightning lè san owó kó lẹ́yìn ààlà tí ojú-ìwòye sì dúró níbílẹ̀ — KSh ní Nairobi, UGX ní Kampala. Arìnrìnàjò ń gba àpò owó ìrìnnà kannáá káàkiri ilẹ̀ Áfíríkà.',

  /* Landing — final CTA */
  'cta.title': 'Ìrìnnà rẹ lè di apá nínú ìṣẹ̀ṣẹ̀ inawó rẹ',
  'cta.desc':
    'Gbàgbé àpẹẹrẹ náà: san owo ọkọ̀ àpẹẹrẹ pẹ̀lú Lightning àfihàn, kí o sì wo bí ó ṣe dé ojú-ìwòye òṣìṣẹ́ gẹ́gẹ́ bí èrè, ìfipamọ́ àti ìkòwó pajawiri.',
  'cta.pay': 'San owo ọkọ̀',
  'cta.worker': 'Ṣí àfihàn òṣìṣẹ́',
  'cta.ussd': 'Gbàgbé àpẹẹrẹ USSD',

  /* Ride page */
  'ride.title': 'San owo ọkọ̀',
  'ride.desc':
    'Yan iṣẹ́ kan — tàbí ṣàyẹ̀wò kóòdù QR rẹ̀ ní òkèèrè — kí o sì jẹ́ kó dájú kí o sanwó. Gbogbo ìsanwó ń fúnni ní ìrísìtì tí a lè ṣàyẹ̀wò.',
  'ride.myReceipts': 'Àwọn ìrísìtì mi',
  'ride.searchPlaceholder': 'Ṣàwárí pẹ̀lú orúkọ, nọ́ńbà ọkọ̀ tàbí ọ̀nà…',
  'ride.searchAria': 'Ṣàwárí àwọn iṣẹ́',
  'ride.filterAria': 'Ṣe àṣẹ̀yọ̀nda nípasẹ̀ ìrú iṣẹ́',
  'ride.all': 'Gbogbo',
  'ride.emptyTitle': 'A kò rí iṣẹ́ kankan',
  'ride.emptyDesc':
    'Gbàgbé àwárí mìíràn, ṣàyẹ̀wò ìsopọ̀ relay rẹ, tàbí dúró díẹ̀ kí àwọn iṣẹ́ gbé dé.',

  /* Receipts page */
  'receipts.title': 'Àwọn ìrísìtì mi',
  'receipts.back': 'San owo ọkọ̀',
  'receipts.descUser': 'Àwọn ìrísìtì tó sopọ̀ pẹ̀lú àkáǹtì Nostr rẹ — ó ń rìn pẹ̀lú ọ lọ sí ètò kíkún.',
  'receipts.descGuest':
    'A kọ àwọn ìrísìtì pamọ́ sí ẹ̀rọ̀ yìí pẹ̀lú kóòdù àlejò rẹ. Wọlé láti sopọ̀ wọ́n mọ́ àkáǹtì Nostr rẹ.',
  'receipts.emptyTitle': 'Kò sí ìrísìtì kankan síbẹ̀',
  'receipts.emptyDesc': 'San owo ọkọ̀ àkọ́kọ́ rẹ, ìrísìtì rẹ á fi ara rẹ̀ hàn níbí lẹ́sẹ̀kẹsẹ̀.',
  'receipts.total': 'Gbogbo owó ìrìnnà',
  'receipts.count': 'ìsanwó {n}',
  'receipts.confirmedNote': 'gbogbo wọn ti dájú lórí Nostr',
  'receipts.fareFallback': 'Ìsanwó owo ọkọ̀',

  /* Vehicle payment page (QR landing) */
  'vp.back': 'Gbogbo àwọn iṣẹ́',
  'vp.scanned': 'O ti ṣàyẹ̀wò kóòdù láti sanwó',
  'vp.fare': 'Owo ọkọ̀',
  'vp.satsLine': 'sats {sats} · ó ń parí nínú bíi ìṣẹ́jú-àáyá kan',
  'vp.pay': 'SAN {fare}',
  'vp.noSignup':
    'Kò nílò fòrúkọsilẹ̀. A kọ ìrísìtì rẹ pamọ́ lórí Nostr, ó sì ń fi hàn lẹ́sẹ̀kẹsẹ̀ lẹ́yìn ìsanwó.',
  'vp.notFoundTitle': 'A kò rí iṣẹ́ náà',
  'vp.notFoundDesc':
    'A kò rí ọ̀nà ìsanwó yìí lórí àwọn relay rẹ. Ẹ jọ̀wọ́ gbìyànjú lẹ́ẹ̀kansi tàbí ṣàyẹ̀wò àwọn relay rẹ.',

  /* Pay dialog */
  'pay.confirmTitle': 'Jẹ́ kó dájú owo ọkọ̀',
  'pay.confirmDesc': 'Ṣàyẹ̀wò → Jẹ́ kó dájú → Sanwó. Ìyẹn ni gbogbo rẹ̀.',
  'pay.walletBalance': 'Owó tó kù nínú àpò àpẹẹrẹ',
  'pay.insufficient': 'Sats àpẹẹrẹ kò tó fún owo ọkọ̀ yìí.',
  'pay.topUp': 'Gba sats {amount} láti ọ̀dọ̀ faucet',
  'pay.button': 'SAN {fare}',
  'pay.guest':
    'O ń sanwó gẹ́gẹ́ bí àlejò — a kọ àwọn ìrísìtì pamọ́ sí ẹ̀rọ̀ yìí. Wọlé láti sopọ̀ wọ́n mọ́ àkáǹtì Nostr rẹ.',
  'pay.processing': 'Ń san {fare}',
  'pay.line1': 'Ń béèrè ìwádìí Lightning…',
  'pay.line2': 'Ń fowọ́ sí ìsanwó…',
  'pay.line3': 'Ń parí ẹ̀ lórí nẹ́tíwọ̀ọ̀kì…',
  'pay.line4': 'Ń kọ ìrísìtì rẹ sílẹ̀ lórí Nostr…',
  'pay.done': 'Ó ti parí — ìrìnnà dára',
  'pay.failed': 'Ìsanwó kò ṣeé ṣe',

  /* Receipt ticket */
  'receipt.confirmed': 'ÌSANWÓ TI DÁJÚ',
  'receipt.amount': 'Iye owó',
  'receipt.satsLine': 'sats {sats} · ti parí lẹ́sẹ̀kẹsẹ̀',
  'receipt.service': 'Iṣẹ́',
  'receipt.vehicle': 'Ọkọ̀',
  'receipt.route': 'Ọ̀nà',
  'receipt.date': 'Ọjọ́',
  'receipt.number': 'Ìrísìtì №',
  'receipt.footer': 'Ẹ ṣeé! A kọ̀wé lórí Nostr · satoride',

  /* Vehicle card */
  'vcard.pay': 'Sanwó',
  'vcard.payAria': 'San {fare} fún {name}',

  /* QR dialog */
  'qr.title': 'Kóòdù QR ìsanwó èrò',
  'qr.desc': 'Ṣe àtẹ̀jáde rẹ̀ nínú ọkọ̀. Àwọn èrò ń ṣàyẹ̀wò → jẹ́ kó dájú → sanwó.',
  'qr.copied': 'A ti dàkọ ọ̀nà ìsanwó náà',
  'qr.copyFail': 'A kò lè dàkọ ọ̀nà náà',
  'qr.copy': 'Dàkọ ọ̀nà ìsanwó',

  /* Activity ticker */
  'ticker.aria': 'Àwọn ìsanwó láípẹ́ lórí pẹpẹ náà',

  /* Worker dashboard */
  'worker.title': 'Ojú-ìwòye òṣìṣẹ́',
  'worker.desc': 'Gbogbo owo ọkọ̀ ń di ìtàn èrè, ìfipamọ́ fúnra rẹ̀ àti ìkòwó pajawiri — ní láàyè láti Nostr.',
  'worker.demoBadge': 'O ń wo dátà àpẹẹrẹ',
  'worker.demoBannerPre': 'Èyí ni ojú-ìwòye',
  'worker.demoBannerStrong': 'ìjọ ọkọ̀ àpẹẹrẹ',
  'worker.demoBannerPost':
    '. Wọlé láti forúkọsilẹ̀ matatu, boda tàbí iṣẹ́ tirẹ, kí o ṣe àwọn ìlànà ìfipamọ́ rẹ, kí o sì bẹ̀rẹ̀ gbígba ìsanwó.',
  'worker.today': 'Èrè òní',
  'worker.paymentOne': 'ìsanwó',
  'worker.paymentMany': 'ìsanwó',
  'worker.todayAvailable': '{available} ló kù lẹ́yìn ìfipamọ́',
  'worker.autoSaved': 'Ti pamọ́',
  'worker.trips7': 'Ìrìnnà ọjọ́ 7',
  'worker.last7': 'Ọjọ́ 7 sẹ́yìn',
  'worker.statSaved': 'Gbogbo tí a ti pamọ́',
  'worker.statSavedHint': '{pct}% gbogbo ìsanwó',
  'worker.statEmergency': 'Ìkòwó pajawiri',
  'worker.statEmergencyHint': '{pct}% àfojúsùn {goal}',
  'worker.statTrips': 'Ìrìnnà (ọjọ́ 30)',
  'worker.statTripsHint': 'ọjọ́ {days} tó ṣiṣẹ́',
  'worker.statAvg': 'Àárín fún ọjọ́ tí ó ṣiṣẹ́',
  'worker.statAvgHint': '{amount} nínú ọjọ́ 30',
  'worker.efGoal': 'Àfojúsùn ìkòwó pajawiri',
  'worker.efProgress': '{saved} nínú {goal} · {pct}%',
  'worker.efDesc':
    'Fún ìbàjẹ́ ọkọ̀, owó ìwòsàn àti àwọn ọ̀sẹ̀ tó le. {pct}% gbogbo owo ọkọ̀ ń wá síbí fúnra rẹ̀ — òṣìṣẹ́ ni ó ń ṣàkóso ìlànà àti yíyọ kúrò.',
  'worker.liveTitle': 'Àwọn ìsanwó ní láàyè',
  'worker.updating': 'ń ṣe àtúnṣe ní láàyè',
  'worker.noPayments': 'Kò sí ìsanwó síbẹ̀. Pín kóòdù QR ọkọ̀ rẹ láti bẹ̀rẹ̀ gbígba owo ọkọ̀.',

  /* Savings rules */
  'rules.title': 'Àwọn ìlànà ìfipamọ́ mi',
  'rules.autoSave': 'Ìfipamọ́ fúnra rẹ̀',
  'rules.onFare': 'Lórí owo ọkọ̀ {fare}, a máa ń pamọ́ {saved} fúnra rẹ̀.',
  'rules.emergency': 'Ìkòwó pajawiri',
  'rules.goal': 'Àfojúsùn pajawiri (KSh)',
  'rules.save': 'Fi àwọn ìlànà pamọ́',
  'rules.saving': 'Ń fi pamọ́…',
  'rules.loginNote': 'Wọlé láti ṣe àwọn ìlànà tirẹ.',
  'rules.savedToast': 'A ti fi àwọn ìlànà ìfipamọ́ pamọ́',
  'rules.savedToastDesc':
    'Gbogbo ìsanwó máa ń pamọ́ {savings}% báyìí, ó sì ń fi {emergency}% sínú ìkòwó pajawiri rẹ.',
  'rules.errorToast': 'A kò lè fi àwọn ìlànà pamọ́',

  /* Worker vehicles */
  'vehicles.title': 'Àwọn ọkọ̀ àti iṣẹ́',
  'vehicles.add': 'Fi ọkọ̀ kún',
  'vehicles.first': 'Forúkọsilẹ̀ ọkọ̀ àkọ́kọ́ rẹ',
  'vehicles.emptyTitle': 'Kò sí ọkọ̀ tí a forúkọsilẹ̀ síbẹ̀',
  'vehicles.emptyDesc':
    'Forúkọsilẹ̀ matatu, boda tàbí iṣẹ́ rẹ láti gba kóòdù QR ìsanwó tí àwọn èrò lè ṣàyẹ̀wò.',
  'vehicles.perTrip': 'fún ìrìnnà kan',
  'vehicles.qr': 'Kóòdù QR ìsanwó',
  'vehicles.simulate': 'Ṣe àpẹẹrẹ',
  'vehicles.simulateFare': 'Ṣe àpẹẹrẹ owo ọkọ̀',
  'vehicles.simulating': 'Ń sanwó…',
  'vehicles.simulateAria': 'Ṣe àpẹẹrẹ pé èrò kan ń san owo ọkọ̀ yìí (àpẹẹrẹ)',
  'vehicles.simToast': 'A ti ṣe àpẹẹrẹ ìsanwó èrò',
  'vehicles.simToastDesc': '{fare} ti dé sínú Àwọn ìsanwó ní láàyè.',
  'vehicles.simError': 'Àpẹẹrẹ kò ṣeé ṣe',

  /* Register vehicle dialog */
  'reg.title': 'Forúkọsilẹ̀ ọkọ̀ tàbí iṣẹ́',
  'reg.desc':
    'A ṣe àtẹ̀jáde rẹ̀ lórí Nostr gẹ́gẹ́ bí ìpolówó iṣẹ́ rẹ. O lè ṣe àtúnṣe rẹ̀ nígbàkúgbà nípasẹ̀ fíforúkọsilẹ̀ sí i pẹ̀lú nọ́ńbà kannáá.',
  'reg.name': 'Orúkọ',
  'reg.plate': 'Nọ́ńbà ọkọ̀ (tàbí kò sí)',
  'reg.type': 'Ìrú',
  'reg.typeAria': 'Ìrú iṣẹ́',
  'reg.route': 'Ọ̀nà / ibi',
  'reg.fare': 'Owo ọkọ̀ (KSh)',
  'reg.publish': 'Ṣe àtẹ̀jáde iṣẹ́',
  'reg.publishing': 'Ń ṣe àtẹ̀jáde…',
  'reg.nameRequired': 'A nílò orúkọ',
  'reg.nameRequiredDesc': 'Fún ọkọ̀ tàbí iṣẹ́ rẹ ní orúkọ.',
  'reg.invalidFare': 'Owo ọkọ̀ kò tọ́',
  'reg.invalidFareDesc': 'Kọ owo ọkọ̀ ní KSh, bíi 80.',
  'reg.success': 'A ti forúkọsilẹ̀ ọkọ̀',
  'reg.successDesc': 'Kóòdù QR ìsanwó rẹ ti ṣetan láti pín.',
  'reg.error': 'Ìforúkọsilẹ̀ kò ṣeé ṣe',

  /* Operator dashboard */
  'op.title': 'Ojú-ìwòye olùṣàkóso',
  'op.desc':
    'Ìwòye fún àwọn SACCO, àwọn olùṣàkóso ìjọ ọkọ̀ àti àwọn iṣẹ́ ìrìnnà — gbogbo ọkọ̀, ìsanwó àti ṣílíńɡì, lápapọ̀ ní láàyè láti Nostr.',
  'op.totalRevenue': 'Gbogbo èrè',
  'op.totalRevenueHint': 'gbogbo owo ọkọ̀ tí a kọ̀wé',
  'op.transactions': 'Àwọn ìsanwó',
  'op.transactionsHint': 'àwọn ìsanwó tí a jẹ́ kó dájú',
  'op.activeServices': 'Àwọn iṣẹ́ tó ń ṣiṣẹ́',
  'op.activeServicesHint': 'àwọn ìpolówó tí a ṣe àtẹ̀jáde',
  'op.workers': 'Àwọn òṣìṣẹ́ tó ń jèrè',
  'op.workersHint': 'àwọn olùgbà tó yàtọ̀',
  'op.revenueByService': 'Èrè nípasẹ̀ iṣẹ́',
  'op.noTx': 'Kò sí ìsanwó tí a kọ̀wé síbẹ̀.',
  'op.paymentOne': 'ìsanwó {n}',
  'op.paymentMany': 'ìsanwó {n}',
  'op.fleet': 'Ìṣe ìjọ ọkọ̀',
  'op.noServicesTitle': 'Kò sí iṣẹ́ síbẹ̀',
  'op.noServicesDesc': 'Àwọn ọkọ̀ àti iṣẹ́ tí a forúkọsilẹ̀ á fi hàn níbí.',
  'op.thService': 'Iṣẹ́',
  'op.thFare': 'Owo ọkọ̀',
  'op.thPayments': 'Ìsanwó',
  'op.thRevenue': 'Èrè',
  'op.latest': 'Àwọn ìsanwó láípẹ́ jù lọ',
  'op.openPassenger': 'Ṣí ètò èrò',

  /* USSD page */
  'ussd.title1': 'Kò sí fóònù amọ́lẹ́mọ̀?',
  'ussd.title2': 'Kò sí wàhálà.',
  'ussd.desc':
    'Ọ̀pọ̀ àwọn arìnrìnàjò ní fóònù rọrùn nìkan. Ọ̀nà USSD ti SatoRide ń mú ìsanwó, ìfipamọ́ àti èrè wá sí fóònù kíkún — gbàgbé àpẹẹrẹ láàyè náà.',
  'ussd.card1Title': 'Pe *384#',
  'ussd.card1Desc': 'Ó ń ṣiṣẹ́ lórí fóònù GSM kíkún — kò sí dátà, kò sí ètò tí a ó fi sínú fóònù.',
  'ussd.card2Title': 'Ẹ̀rọ̀ kannáà nísàlẹ̀',
  'ussd.card2Desc':
    'Àpẹẹrẹ náà ń sanwó nípasẹ̀ àpò owó Lightning àpẹẹrẹ kannáà, ó sì ń kọ àwọn ìrísìtì tòótọ́ sílẹ̀ lórí Nostr.',
  'ussd.card3Title': 'Gbàgbé kóòdù ọkọ̀ KCA 123A',
  'ussd.card3Desc':
    'Yan 1 (Sanwó), kọ nọ́ńbà lórí lébùlù matatu náà, jẹ́ kó dájú — ìrísìtì tòótọ́ á padà dé.',
  'ussd.replyPlaceholder': 'Dáhùn…',
  'ussd.replyAria': 'Ìdáhùn USSD',
  'ussd.send': 'Fi ránṣẹ́',
  'ussd.dial': 'Pe *384#',
  'ussd.newSession': 'Ìkòkàntun',
  'ussd.settling': 'Ń parí ẹ̀…',
  'ussd.reset': 'Ṣe àtún bere àpẹẹrẹ',

  /* USSD in-phone screens */
  'ussd.s.idle':
    'Káàbọ̀ sí SatoRide.\n\nPe *384# láti bẹ̀rẹ̀ — san owo ọkọ̀, wo ìfipamọ́ àti èrè láti fóònù kíkún.',
  'ussd.s.menu':
    'SATORIDE\n1. San owo ọkọ̀\n2. Owó tó kù\n3. Ìfipamọ́ mi\n4. Ìkòwó pajawiri\n5. Èrè òní\n0. Jáde',
  'ussd.s.payPlate':
    'SAN OWO ỌKỌ̀\nKọ kóòdù ọkọ̀ tó wà lórí lébùlù náà (bíi KCA 123A).\nFi òfo ránṣẹ́ láti padà sẹ́yìn.',
  'ussd.s.confirm': 'JẸ́ KÓ DÁJÚ ÌSANWÓ\n{lines}\nOwo ọkọ̀: {fare}\n\n1. Dájú\n0. Fagilé',
  'ussd.s.processing': 'Ń ṣe ìsanwó…\nŃ parí ẹ̀ nípasẹ̀ Lightning.\n\nJọ̀wọ́ dúró.',
  'ussd.s.done':
    'ÌSANWÓ TI DÁJÚ ✓\n\nA san {fare} fún {name}.\nÌrísìtì: {receipt}\n\nẸ ṣeé! Tẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.failed': 'Ìsanwó kò ṣeé ṣe.\n{message}\n\nTẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.balance': 'OWÓ TÓ KÙ\n\n⚡ sats {balance} (àpẹẹrẹ)\n\nTẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.savings':
    'ÌFIPAMỌ́ MI\n\nGbogbo tí a ti pamọ́: {total}\nÌlànà ìfipamọ́: gbogbo owo ọkọ̀ ń ṣe àfikún.\n\nTẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.emergency': 'ÌKÒWÓ PAJAWIRI\n\nOwó tó kù: {total}\nÀfojúsùn: {goal} ({pct}%)\n\nTẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.earnings': 'ÈRÈ ÒNÍ\n\nGbogbo: {gross}\nÌsanwó: {trips}\n\nTẹ́ bọ́tìnì kíkún fún àtòjọ.',
  'ussd.s.invalid': '{message}\n\nTẹ́ bọ́tìnì kíkún láti padà sẹ́yìn.',
  'ussd.s.ended': 'Ìparí.\n\nẸ ṣeé fún ìrìnnà pẹ̀lú SatoRide. Rìn. Jèrè. Pamọ́. Gbéga.',
  'ussd.s.unknownCode': 'A kò mọ̀ ọ́ "{value}". Pe *384# fún SatoRide.',
  'ussd.s.invalidChoice': 'Ìyàn kò tọ́.',
  'ussd.s.notFound': 'A kò rí ọkọ̀ "{value}". Ṣàyẹ̀wò kóòdù lórí lébùlù náà.',

  /* 404 */
  'nf.title': 'Ọ̀nà yìí kò sí',
  'nf.desc': 'Ó dà bíi pé matatu yìí ti kúrò ní ibùdó. Padà sẹ́yìn kí o rí ìrìnnà rẹ.',
  'nf.back': 'Padà sí SatoRide',

  /* SEO */
  'seo.home.title': 'SatoRide — Rìn. Jèrè. Pamọ́. Gbéga.',
  'seo.home.desc':
    'Pẹpẹ ìsanwó díẹ̀díẹ̀ tó léè dé àti agbára inawó fún ìrìnnà Áfíríkà. San matatu, boda, ibùdó ọkọ̀ àti chaji láàáà náǹfáàní — kí o sì yí gbogbo owo ọkọ̀ padà sí ìtàn èrè, ìfipamọ́ fúnra rẹ̀ àti ìkòwó pajawiri.',
  'seo.ride.title': 'San owo ọkọ̀ — SatoRide',
  'seo.ride.desc': 'Yan matatu, boda, ibùdó ọkọ̀ tàbí ibi chaji, kí o sì sanwó láàáà náǹfáàní. Ṣàyẹ̀wò → Sanwó → Lọ.',
  'seo.receipts.title': 'Àwọn ìrísìtì mi — SatoRide',
  'seo.receipts.desc': 'Gbogbo owo ọkọ̀ tí o ti san, pẹ̀lú ìrísìtì tí a lè ṣàyẹ̀wò tí a kọ pamọ́ lórí Nostr.',
  'seo.worker.title': 'Ojú-ìwòye òṣìṣẹ́ — SatoRide',
  'seo.worker.desc':
    'Tẹ̀lé èrè rẹ nígbà tòótọ́, kí ìfipamọ́ fúnra rẹ̀ àti ìkòwó pajawiri dàgbà lórí gbogbo owo ọkọ̀.',
  'seo.operator.title': 'Ojú-ìwòye olùṣàkóso — SatoRide',
  'seo.operator.desc': 'Ìwòye ìjọ ọkọ̀: àwọn ọkọ̀, ìsanwó àti èrè lórí nẹ́tíwọ̀ọ̀kì SatoRide.',
  'seo.ussd.title': 'Àpẹẹrẹ USSD — SatoRide',
  'seo.ussd.desc': 'Ní ìrírí SatoRide lórí fóònù rọrùn: sanwó, wo owó tó kù, ìfipamọ́ àti èrè nípasẹ̀ USSD.',
  'seo.payService.title': 'San {name} — SatoRide',
  'seo.payService.titleFallback': 'Sanwó — SatoRide',
  'seo.payService.desc': 'San {fare} fún {name} pẹ̀lú SatoRide.',
  'seo.payService.descFallback': 'San owo ọkọ̀ pẹ̀lú SatoRide.',
  'seo.nf.title': '404 - A kò rí ojú-ìwé — SatoRide',
  'seo.nf.desc': 'A kò rí ojú-ìwé tí o ń wá. Padà sí SatoRide láti tẹ̀síwájú.',
};
