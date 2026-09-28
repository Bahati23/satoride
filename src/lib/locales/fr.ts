import type { Translations } from './en';

/**
 * Dictionnaire français — lingua franca panafricaine, pour la vision
 * transfrontalière de SatoRide.
 */
export const fr: Translations = {
  /* Navigation & chrome */
  'nav.ride': 'Payer un trajet',
  'nav.worker': 'Travailleurs',
  'nav.operator': 'Opérateurs',
  'nav.ussd': 'USSD',
  'nav.openMenu': 'Ouvrir le menu',
  'nav.main': 'Principal',
  'nav.mobile': 'Mobile',
  'theme.toLight': 'Passer en mode clair',
  'theme.toDark': 'Passer en mode sombre',
  'lang.switch': 'Changer de langue',

  /* Footer */
  'footer.tagline':
    'Voyagez. Gagnez. Épargnez. Prospérez. Des micropaiements accessibles et la résilience financière pour la mobilité africaine.',
  'footer.prototype':
    "Prototype de hackathon — règlement Lightning simulé, reçus ancrés sur Nostr.",

  /* Demo wallet */
  'wallet.sats': 'sats',
  'wallet.title': 'Portefeuille Lightning démo',
  'wallet.description':
    'Prototype de hackathon — simule le règlement Lightning instantané. Aucun vrai sat ne circule.',
  'wallet.available': 'sats disponibles',
  'wallet.topUp': 'Recharger {amount} sats',
  'wallet.topUpToast': 'Recharge du faucet reçue',
  'wallet.topUpToastDesc': '+{amount} sats démo ajoutés à votre portefeuille.',

  /* Service types */
  'type.matatu': 'Matatu',
  'type.boda': 'Boda boda',
  'type.taxi': 'Taxi',
  'type.parking': 'Parking',
  'type.charging': 'Recharge EV',
  'type.wifi': 'Wi-Fi public',
  'type.other': 'Service',

  /* Relative time */
  'time.justNow': "à l'instant",
  'time.minAgo': 'il y a {n} min',
  'time.hrAgo': 'il y a {n} h',
  'time.dayAgoOne': 'il y a {n} jour',
  'time.dayAgoMany': 'il y a {n} jours',

  /* Landing — hero */
  'hero.badge': 'MICROPAIEMENTS BITCOIN POUR LA MOBILITÉ AFRICAINE',
  'hero.title1': 'Voyagez. Gagnez.',
  'hero.title2': 'Épargnez.',
  'hero.title3': 'Prospérez.',
  'hero.subtitle':
    "SatoRide transforme les paiements de transport du quotidien en résilience financière. Les passagers paient chaque trajet en quelques secondes — matatu, boda, parking, recharge — pendant que chaque paiement construit discrètement l'historique de revenus du travailleur, son épargne automatique et son fonds d'urgence.",
  'hero.ctaPay': 'Payer un trajet',
  'hero.ctaWorker': 'Espace travailleur',
  'hero.live': 'En direct sur Nostr',
  'hero.mockRider': 'Brian · Chauffeur de boda',
  'hero.mockToday': "Gains du jour",
  'hero.mockTrips': '31 trajets',
  'hero.mockPassengers': '38 passagers',
  'hero.mockAutoSave': 'Épargne auto (5 %)',
  'hero.mockEmergency': "Fonds d'urgence",
  'hero.mockGoal': "Objectif d'urgence · 20 000 KSh",
  'hero.mockRecent': 'Paiements récents',

  /* Landing — problem */
  'problem.eyebrow': 'Le problème',
  'problem.title': "Les transactions les plus fréquentes d'Afrique ne laissent aucune trace",
  'problem.desc':
    "Le transport est l'une des activités financières les plus fréquentes de la vie quotidienne. Pourtant, chaque trajet s'achève dès qu'il est payé — pour les deux côtés du voyage.",
  'problem.passengerTitle': 'Pour les passagers',
  'problem.p1': 'Des processus de paiement longs et compliqués à chaque étape',
  'problem.p2': 'Les espèces qui encombrent et le stress de la monnaie exacte',
  'problem.p3': 'Aucune trace du coût réel de la mobilité chaque mois',
  'problem.p4': 'Un moyen de paiement différent pour chaque service',
  'problem.workerTitle': 'Pour les travailleurs du transport',
  'problem.w1': 'Des revenus irréguliers répartis sur des dizaines de petits paiements quotidiens',
  'problem.w2': 'Aucun revenu structuré à présenter à qui que ce soit',
  'problem.w3': "Épargner est difficile quand le revenu change chaque jour",
  'problem.w4': "Pannes et urgences frappent un matelas vide",
  'problem.quote':
    "« Un chauffeur de boda fait 30 à 40 trajets par jour. À la fin de la journée, toute sa trace financière tient en une phrase : j'ai gagné environ 3 000 KSh. »",

  /* Landing — core insight */
  'insight.eyebrow': "L'idée clé",
  'insight.title': "Un trajet ne devrait pas s'arrêter une fois payé",
  'insight.desc': "Chaque paiement devient une brique dans la vie financière du travailleur.",
  'insight.s1t': 'Paiement',
  'insight.s1d': 'Le passager paie 200 KSh',
  'insight.s2t': 'Reçu',
  'insight.s2d': 'Transaction stockée sur Nostr',
  'insight.s3t': 'Revenus',
  'insight.s3d': "L'historique des revenus grandit",
  'insight.s4t': 'Épargne',
  'insight.s4d': '5 % mis de côté automatiquement',
  'insight.s5t': 'Résilience',
  'insight.s5d': "Le fonds d'urgence se construit",

  /* Landing — how it works */
  'how.eyebrow': 'Expérience passager',
  'how.title': 'Scanner → Payer → Voyager',
  'how.desc': "La technologie disparaît. Les passagers n'ont jamais besoin de savoir ce qu'est un satoshi.",
  'how.s1t': 'Scanner',
  'how.s1d':
    "Scannez le QR dans le matatu ou le boda — ou touchez un service dans l'app. Le tarif apparaît instantanément, en KSh.",
  'how.s2t': 'Payer',
  'how.s2d':
    'Un seul gros bouton. Lightning règle en dessous en une seconde environ — sans adresses, sans jargon, sans attente.',
  'how.s3t': 'Voyager',
  'how.s3d': "Un reçu vous est confirmé, au travailleur et au registre. C'est toute l'expérience.",
  'how.cta': 'Essayer — payer un trajet démo',

  /* Landing — one wallet */
  'onewallet.eyebrow': 'Au-delà des matatus',
  'onewallet.title': 'Un portefeuille, tous les services de mobilité',
  'onewallet.desc':
    "Le même compte gère les petits paiements qui composent une journée de déplacements — et les abonnements de transport pour les navetteurs.",
  'onewallet.matatu': 'Matatu',
  'onewallet.matatuNote': 'CBD → Ngong',
  'onewallet.boda': 'Boda boda',
  'onewallet.bodaNote': 'Dernier kilomètre, partout',
  'onewallet.parking': 'Parking',
  'onewallet.parkingNote': 'Centres-villes',
  'onewallet.charging': 'Recharge EV & e-bike',
  'onewallet.chargingNote': 'Rechargez pendant vos courses',
  'onewallet.wifi': 'Wi-Fi public',
  'onewallet.wifiNote': 'Les micropaiements, enfin viables',

  /* Landing — worker features */
  'wf.eyebrow': 'Pour les travailleurs du transport',
  'wf.title': 'Chaque trajet construit la résilience financière',
  'wf.desc':
    "Chauffeurs, receveurs et motards choisissent une règle simple — comme épargner 5 % de chaque paiement — et SatoRide l'applique automatiquement.",
  'wf.saveTitle': 'Épargne automatique',
  'wf.saveDesc':
    'Recevez 200 KSh avec une règle de 5 % → 190 KSh disponibles, 10 KSh épargnés. Aucune volonté requise, à chaque trajet.',
  'wf.fareReceived': 'Trajet reçu',
  'wf.autoSaved': 'Épargné (5 %)',
  'wf.available': 'Disponible',
  'wf.efTitle': "Fonds d'urgence",
  'wf.efDesc':
    'Un matelas séparé pour les pannes, les frais médicaux et les semaines creuses — avec un objectif visible qui grandit à chaque paiement.',
  'wf.efProgress': '8 450 KSh sur 20 000 KSh',
  'wf.efMonth': '+ 1 200 KSh ce mois-ci',
  'wf.historyTitle': 'Un vrai historique financier',
  'wf.historyDesc':
    "Après un mois, un travailleur peut enfin dire — avec des données — « J'ai un revenu régulier grâce à mon activité de transport. »",
  'wf.stat30': 'Revenus 30 jours',
  'wf.statTrips': 'Trajets',
  'wf.statAvg': 'Moy. / jour',
  'wf.statSaved': 'Épargné',
  'wf.consent':
    "Demain, avec un consentement explicite et de solides contrôles de confidentialité, cet historique pourrait aider à débloquer le financement d'actifs, l'assurance et des produits d'épargne. Le travailleur possède toujours ses données.",

  /* Landing — HAUTE */
  'haute.eyebrow': 'Principes de conception',
  'haute.title': 'Construit HAUTE',
  'haute.desc': 'Les cinq principes auxquels chaque décision SatoRide est mesurée.',
  'haute.hTitle': "L'humain d'abord",
  'haute.hDesc': 'Nous commençons par les passagers, chauffeurs, receveurs et motards — et choisissons la technologie ensuite.',
  'haute.aTitle': 'Accessible',
  'haute.aDesc':
    "PWA aujourd'hui, USSD et SMS pour les téléphones basiques demain. Gros boutons, langage simple, contraste élevé.",
  'haute.uTitle': 'Utile maintenant',
  'haute.uDesc':
    'Le MVP offre déjà Payer → Confirmer → Enregistrer. Chaque fonctionnalité future s’appuie sur cette même transaction.',
  'haute.tTitle': 'Digne de confiance',
  'haute.tDesc':
    "Chaque paiement est confirmé au passager, au travailleur et à l'opérateur, avec des historiques transparents et des contrôles de confidentialité.",
  'haute.eTitle': 'Facile',
  'haute.eDesc': "Scanner → Payer → Voyager. La complexité de Lightning et Nostr reste sous l'interface.",

  /* Landing — cross-border */
  'cb.eyebrow': 'La vision à long terme',
  'cb.title': 'Un rail, plusieurs monnaies',
  'cb.desc':
    "Lightning peut régler la valeur au-delà des frontières tandis que l'interface reste locale — KSh à Nairobi, UGX à Kampala. Un voyageur garde un seul portefeuille mobilité à travers le continent.",

  /* Landing — final CTA */
  'cta.title': 'Votre trajet peut faire partie de votre vie financière',
  'cta.desc':
    "Essayez le prototype : payez un trajet démo avec Lightning simulé, puis regardez-le arriver dans le tableau de bord du travailleur en revenus, épargne et fonds d'urgence.",
  'cta.pay': 'Payer un trajet',
  'cta.worker': 'Ouvrir la démo travailleur',
  'cta.ussd': 'Essayer le simulateur USSD',

  /* Ride page */
  'ride.title': 'Payer un trajet',
  'ride.desc':
    'Choisissez un service — ou scannez son QR dans le monde réel — puis confirmez et payez. Chaque paiement produit un reçu vérifiable.',
  'ride.myReceipts': 'Mes reçus',
  'ride.searchPlaceholder': 'Rechercher par nom, plaque ou itinéraire…',
  'ride.searchAria': 'Rechercher des services',
  'ride.filterAria': 'Filtrer par type de service',
  'ride.all': 'Tous',
  'ride.emptyTitle': 'Aucun service trouvé',
  'ride.emptyDesc':
    "Essayez une autre recherche, vérifiez votre connexion relais, ou patientez pendant le chargement des services.",

  /* Receipts page */
  'receipts.title': 'Mes reçus',
  'receipts.back': 'Payer un trajet',
  'receipts.descUser': "Reçus liés à votre compte Nostr — portables sur n'importe quel client.",
  'receipts.descGuest':
    "Reçus enregistrés sur cet appareil via votre clé invité. Connectez-vous pour les attacher à votre compte Nostr.",
  'receipts.emptyTitle': "Pas encore de reçus",
  'receipts.emptyDesc': 'Payez votre premier trajet et votre reçu apparaîtra ici instantanément.',
  'receipts.total': 'Dépense mobilité totale',
  'receipts.count': '{n} paiements',
  'receipts.confirmedNote': 'tous confirmés sur Nostr',
  'receipts.fareFallback': 'Paiement de trajet',

  /* Vehicle payment page (QR landing) */
  'vp.back': 'Tous les services',
  'vp.scanned': 'Vous avez scanné pour payer',
  'vp.fare': 'Tarif',
  'vp.satsLine': '{sats} sats · réglé en ~1 seconde',
  'vp.pay': 'PAYER {fare}',
  'vp.noSignup':
    "Pas besoin de compte. Votre reçu est stocké sur Nostr et affiché instantanément après le paiement.",
  'vp.notFoundTitle': 'Service introuvable',
  'vp.notFoundDesc':
    "Ce lien de paiement est introuvable sur vos relais. Il a peut-être été supprimé, ou les relais ne l'ont pas encore synchronisé.",

  /* Pay dialog */
  'pay.confirmTitle': 'Confirmer le tarif',
  'pay.confirmDesc': "Scanner → Confirmer → Payer. C'est tout le trajet.",
  'pay.walletBalance': 'Solde du portefeuille démo',
  'pay.insufficient': 'Pas assez de sats démo pour ce trajet.',
  'pay.topUp': 'Recharger {amount} sats depuis le faucet',
  'pay.button': 'PAYER {fare}',
  'pay.guest':
    'Vous payez en invité — les reçus sont enregistrés sur cet appareil. Connectez-vous pour les attacher à votre compte Nostr.',
  'pay.processing': 'Paiement de {fare}',
  'pay.line1': 'Demande de facture Lightning…',
  'pay.line2': 'Signature du paiement…',
  'pay.line3': 'Règlement sur le réseau…',
  'pay.line4': 'Écriture de votre reçu sur Nostr…',
  'pay.done': 'Terminé — bon voyage',
  'pay.failed': 'Paiement échoué',

  /* Receipt ticket */
  'receipt.confirmed': 'PAIEMENT CONFIRMÉ',
  'receipt.amount': 'Montant',
  'receipt.satsLine': '{sats} sats · réglé instantanément',
  'receipt.service': 'Service',
  'receipt.vehicle': 'Véhicule',
  'receipt.route': 'Itinéraire',
  'receipt.date': 'Date',
  'receipt.number': 'Reçu №',
  'receipt.footer': 'Merci ! Enregistré sur Nostr · satoride',

  /* Vehicle card */
  'vcard.pay': 'Payer',
  'vcard.payAria': 'Payer {fare} à {name}',

  /* QR dialog */
  'qr.title': 'QR de paiement passager',
  'qr.desc': 'Imprimez-le dans le véhicule. Les passagers scannent → confirment → paient.',
  'qr.copied': 'Lien de paiement copié',
  'qr.copyFail': 'Impossible de copier le lien',
  'qr.copy': 'Copier le lien de paiement',

  /* Activity ticker */
  'ticker.aria': 'Derniers paiements sur la plateforme',

  /* Worker dashboard */
  'worker.title': 'Tableau de bord du travailleur',
  'worker.desc': "Chaque trajet devient historique de revenus, épargne automatique et fonds d'urgence — en direct depuis Nostr.",
  'worker.demoBadge': 'Vous consultez les données démo',
  'worker.demoBannerPre': 'Ceci est le tableau de bord de la',
  'worker.demoBannerStrong': 'flotte démo',
  'worker.demoBannerPost':
    ". Connectez-vous pour enregistrer votre propre matatu, boda ou service, définir vos règles d'épargne et commencer à recevoir des paiements.",
  'worker.today': "Gains du jour",
  'worker.paymentOne': 'paiement',
  'worker.paymentMany': 'paiements',
  'worker.todayAvailable': '{available} disponibles après épargne',
  'worker.autoSaved': 'Épargné',
  'worker.trips7': 'Trajets 7 jours',
  'worker.last7': '7 derniers jours',
  'worker.statSaved': 'Total épargné',
  'worker.statSavedHint': '{pct} % de chaque paiement',
  'worker.statEmergency': "Fonds d'urgence",
  'worker.statEmergencyHint': "{pct} % de l'objectif {goal}",
  'worker.statTrips': 'Trajets (30 jours)',
  'worker.statTripsHint': '{days} jours actifs',
  'worker.statAvg': 'Moy. par jour actif',
  'worker.statAvgHint': '{amount} en 30 jours',
  'worker.efGoal': "Objectif du fonds d'urgence",
  'worker.efProgress': '{saved} sur {goal} · {pct} %',
  'worker.efDesc':
    "Pour les pannes, les frais médicaux et les semaines creuses. {pct} % de chaque trajet arrive ici automatiquement — le travailleur contrôle la règle et les retraits.",
  'worker.liveTitle': 'Paiements en direct',
  'worker.updating': 'mise à jour en direct',
  'worker.noPayments': "Aucun paiement pour l'instant. Partagez le QR de votre véhicule pour commencer à recevoir des trajets.",

  /* Savings rules */
  'rules.title': "Mes règles d'épargne",
  'rules.autoSave': 'Épargne automatique',
  'rules.onFare': 'Sur un trajet de {fare}, {saved} est épargné automatiquement.',
  'rules.emergency': "Fonds d'urgence",
  'rules.goal': "Objectif d'urgence (KSh)",
  'rules.save': 'Enregistrer les règles',
  'rules.saving': 'Enregistrement…',
  'rules.loginNote': 'Connectez-vous pour définir vos propres règles.',
  'rules.savedToast': "Règles d'épargne enregistrées",
  'rules.savedToastDesc':
    "Chaque paiement épargne désormais {savings} % et place {emergency} % dans votre fonds d'urgence.",
  'rules.errorToast': "Impossible d'enregistrer les règles",

  /* Worker vehicles */
  'vehicles.title': 'Véhicules & services',
  'vehicles.add': 'Ajouter un véhicule',
  'vehicles.first': 'Enregistrez votre premier véhicule',
  'vehicles.emptyTitle': 'Aucun véhicule enregistré',
  'vehicles.emptyDesc':
    'Enregistrez votre matatu, boda ou service pour obtenir un QR de paiement que les passagers peuvent scanner.',
  'vehicles.perTrip': 'par trajet',
  'vehicles.qr': 'QR de paiement',
  'vehicles.simulate': 'Simuler',
  'vehicles.simulateFare': 'Simuler un trajet',
  'vehicles.simulating': 'Paiement…',
  'vehicles.simulateAria': 'Simuler un passager payant ce trajet (démo)',
  'vehicles.simToast': 'Paiement passager simulé',
  'vehicles.simToastDesc': '{fare} vient d’arriver dans les Paiements en direct.',
  'vehicles.simError': 'Simulation échouée',

  /* Register vehicle dialog */
  'reg.title': 'Enregistrer un véhicule ou un service',
  'reg.desc':
    'Publié sur Nostr comme votre annonce de service. Vous pouvez le mettre à jour à tout moment en vous réenregistrant avec la même plaque.',
  'reg.name': 'Nom',
  'reg.plate': 'Plaque (optionnel)',
  'reg.type': 'Type',
  'reg.typeAria': 'Type de service',
  'reg.route': 'Itinéraire / lieu',
  'reg.fare': 'Tarif (KSh)',
  'reg.publish': 'Publier le service',
  'reg.publishing': 'Publication…',
  'reg.nameRequired': 'Nom requis',
  'reg.nameRequiredDesc': 'Donnez un nom à votre véhicule ou service.',
  'reg.invalidFare': 'Tarif invalide',
  'reg.invalidFareDesc': 'Entrez un tarif en KSh, ex. 80.',
  'reg.success': 'Véhicule enregistré',
  'reg.successDesc': 'Votre QR de paiement est prêt à partager.',
  'reg.error': 'Enregistrement échoué',

  /* Operator dashboard */
  'op.title': "Tableau de bord opérateur",
  'op.desc':
    'La vue pour les SACCO, opérateurs de flotte et entreprises de mobilité — chaque véhicule, transaction et shilling, agrégés en direct depuis Nostr.',
  'op.totalRevenue': 'Revenu total',
  'op.totalRevenueHint': 'tous les trajets enregistrés',
  'op.transactions': 'Transactions',
  'op.transactionsHint': 'paiements confirmés',
  'op.activeServices': 'Services actifs',
  'op.activeServicesHint': 'annonces publiées',
  'op.workers': 'Travailleurs payés',
  'op.workersHint': 'bénéficiaires uniques',
  'op.revenueByService': 'Revenu par service',
  'op.noTx': "Aucune transaction enregistrée pour l'instant.",
  'op.paymentOne': '{n} paiement',
  'op.paymentMany': '{n} paiements',
  'op.fleet': 'Performance de la flotte',
  'op.noServicesTitle': "Pas encore de services",
  'op.noServicesDesc': 'Les véhicules et services enregistrés apparaîtront ici.',
  'op.thService': 'Service',
  'op.thFare': 'Tarif',
  'op.thPayments': 'Paiements',
  'op.thRevenue': 'Revenu',
  'op.latest': 'Dernières transactions',
  'op.openPassenger': "Ouvrir l'app passager",

  /* USSD page */
  'ussd.title1': 'Pas de smartphone ?',
  'ussd.title2': 'Pas de problème.',
  'ussd.desc':
    "Beaucoup de navetteurs n'ont qu'un téléphone basique. Le canal USSD de SatoRide apporte paiement, épargne et revenus sur n'importe quel combiné — essayez le simulateur en direct.",
  'ussd.card1Title': 'Composer *384#',
  'ussd.card1Desc': "Fonctionne sur n'importe quel téléphone GSM — sans forfait data, sans installation.",
  'ussd.card2Title': 'Le même moteur en dessous',
  'ussd.card2Desc':
    'Le simulateur règle via le même portefeuille Lightning démo et écrit de vrais reçus sur Nostr.',
  'ussd.card3Title': 'Essayez le code véhicule KCA 123A',
  'ussd.card3Desc':
    "Choisissez 1 (Payer), entrez la plaque de l'autocollant du matatu, confirmez — un vrai reçu revient.",
  'ussd.replyPlaceholder': 'Réponse…',
  'ussd.replyAria': 'Réponse USSD',
  'ussd.send': 'Envoyer',
  'ussd.dial': 'Composer *384#',
  'ussd.newSession': 'Nouvelle session',
  'ussd.settling': 'Règlement…',
  'ussd.reset': 'Réinitialiser le simulateur',

  /* USSD in-phone screens */
  'ussd.s.idle':
    'Bienvenue sur SatoRide.\n\nComposez *384# pour démarrer une session — payez des trajets, consultez épargne et revenus depuis n\u2019importe quel téléphone.',
  'ussd.s.menu':
    'SATORIDE\n1. Payer un trajet\n2. Solde du portefeuille\n3. Mon épargne\n4. Fonds d\u2019urgence\n5. Gains du jour\n0. Quitter',
  'ussd.s.payPlate':
    "PAYER UN TRAJET\nEntrez le code du véhicule sur l'autocollant (ex. KCA 123A).\nEnvoyez vide pour revenir.",
  'ussd.s.confirm': 'CONFIRMER LE PAIEMENT\n{lines}\nTarif : {fare}\n\n1. Confirmer\n0. Annuler',
  'ussd.s.processing': 'Traitement du paiement…\nRèglement via Lightning.\n\nVeuillez patienter.',
  'ussd.s.done':
    'PAIEMENT CONFIRMÉ ✓\n\n{fare} payé à {name}.\nReçu : {receipt}\n\nMerci ! Touche quelconque pour le menu.',
  'ussd.s.failed': 'Paiement échoué.\n{message}\n\nTouche quelconque pour le menu.',
  'ussd.s.balance': 'SOLDE DU PORTEFEUILLE\n\n⚡ {balance} sats (démo)\n\nTouche quelconque pour le menu.',
  'ussd.s.savings':
    "MON ÉPARGNE\n\nTotal épargné : {total}\nRègle d'épargne auto : chaque trajet contribue.\n\nTouche quelconque pour le menu.",
  'ussd.s.emergency': "FONDS D'URGENCE\n\nSolde : {total}\nObjectif : {goal} ({pct} %)\n\nTouche quelconque pour le menu.",
  'ussd.s.earnings': 'GAINS DU JOUR\n\nBrut : {gross}\nPaiements : {trips}\n\nTouche quelconque pour le menu.',
  'ussd.s.invalid': '{message}\n\nTouche quelconque pour revenir.',
  'ussd.s.ended': 'Session terminée.\n\nMerci d\u2019avoir voyagé avec SatoRide. Voyagez. Gagnez. Épargnez. Prospérez.',
  'ussd.s.unknownCode': 'Code « {value} » inconnu. Composez *384# pour SatoRide.',
  'ussd.s.invalidChoice': 'Choix invalide.',
  'ussd.s.notFound': "Véhicule « {value} » introuvable. Vérifiez le code sur l'autocollant.",

  /* 404 */
  'nf.title': "Cette route n'existe pas",
  'nf.desc': 'On dirait que ce matatu a quitté la station. Revenez en arrière pour trouver votre trajet.',
  'nf.back': 'Retour à SatoRide',

  /* SEO */
  'seo.home.title': 'SatoRide — Voyagez. Gagnez. Épargnez. Prospérez.',
  'seo.home.desc':
    'Une plateforme accessible de micropaiements et de résilience financière pour la mobilité africaine. Payez matatu, boda, parking et recharge en quelques secondes — et transformez chaque trajet en historique de revenus, épargne automatique et fonds d\u2019urgence.',
  'seo.ride.title': 'Payer un trajet — SatoRide',
  'seo.ride.desc': 'Choisissez un matatu, un boda, un parking ou une borne de recharge et payez en quelques secondes. Scanner → Payer → Voyager.',
  'seo.receipts.title': 'Mes reçus — SatoRide',
  'seo.receipts.desc': 'Chaque trajet payé, avec un reçu vérifiable stocké sur Nostr.',
  'seo.worker.title': 'Tableau de bord du travailleur — SatoRide',
  'seo.worker.desc':
    "Suivez vos gains en temps réel, faites grandir l'épargne automatique et le fonds d'urgence à chaque trajet.",
  'seo.operator.title': 'Tableau de bord opérateur — SatoRide',
  'seo.operator.desc': 'Vue de la flotte : véhicules, transactions et revenus sur le réseau SatoRide.',
  'seo.ussd.title': 'Simulateur USSD — SatoRide',
  'seo.ussd.desc': 'Découvrez SatoRide sur un téléphone basique : payez, consultez soldes, épargne et revenus via USSD.',
  'seo.payService.title': 'Payer {name} — SatoRide',
  'seo.payService.titleFallback': 'Payer — SatoRide',
  'seo.payService.desc': 'Payez {fare} à {name} avec SatoRide.',
  'seo.payService.descFallback': 'Payez un trajet avec SatoRide.',
  'seo.nf.title': '404 - Page introuvable — SatoRide',
  'seo.nf.desc': 'La page que vous cherchez est introuvable. Revenez à SatoRide pour continuer à voyager.',
};
