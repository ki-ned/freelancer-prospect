# Conventions UI e-commerce + gestion de commandes COD — repères pour `templates/noki-clone/`

Recherche rapide (pas un rapport exhaustif) menée en priorité sur noki-services.com/fr — la source d'inspiration fonctionnelle explicitement citée dans le CLAUDE.md du repo — complétée par une recherche sur les conventions standards des dashboards e-commerce (Unicommerce, Coupler.io, WooCommerce) et des outils de réconciliation COD (Edgistify, Shiplystic, CourierManager), et par une recherche locale Congo-Brazzaville. Sert de base au design des 4-5 écrans du prototype démo `templates/noki-clone/` (boutique en ligne généraliste fictive "Elonga", Congo-Brazzaville, données 100% factices).

## Source primaire : noki-services.com/fr

Le site présente une plateforme "order-to-cash" pour marchands e-commerce africains, structurée en modules qui correspondent presque 1:1 aux écrans demandés pour le prototype :

- **Modules annoncés** : "Commande & confirmation", "Stock & préparation", "Livraison & dispatch", "COD & reversements" — le site résume la proposition en une phrase clé : *"Commandes, stock, livraison et cash suivis depuis un seul environnement."* ([noki-services.com/fr](https://noki-services.com/fr))
- **Workflow de confirmation de commande** : "Commande reçue" → "Confirmation" → "Confirmation client structurée" (validation humaine avant expédition), avec "historique consultable par équipe". ([noki-services.com/fr](https://noki-services.com/fr))
- **Stock/préparation** : "Stock réservé" au moment de la commande, module "Stock & préparation", messaging "moins de ruptures, plus de contrôle" — la réservation de stock est mise en avant comme le mécanisme anti-erreur central. ([noki-services.com/fr](https://noki-services.com/fr))
- **Livraison & dispatch** : "Mission assignée" (affectation à un livreur), "statut de progression" suivi en temps réel, remontée d'incidents. ([noki-services.com/fr](https://noki-services.com/fr))
- **Cash & réconciliation** : "Rapprochement COD", "reversement" (versement final au marchand), module "COD & reversements", tagline "cash & reversements réunis". ([noki-services.com/fr](https://noki-services.com/fr))
- **Gouvernance** : "validation humaine sur les étapes sensibles", permissions par rôle, logs d'audit — pertinent si le prototype veut suggérer un statut "à valider" avant confirmation. ([noki-services.com/fr](https://noki-services.com/fr))
- **Chiffres/claims affichés** (à traiter comme exemples illustratifs de marketing, pas des specs produit) : "−40% temps de rapprochement", "4.6/5 note moyenne", "1 plateforme unique". Marchés cibles annoncés : Mali, Côte d'Ivoire, Congo, Gabon, Sénégal, Cameroun. Statut de la plateforme : "en préparation" (pas encore lancée), pas de grille tarifaire publiée. ([noki-services.com/fr](https://noki-services.com/fr))
- **Intégrations** citées : Google Sheets, Shopify, WooCommerce, YouCan, Storeino, API webhooks/postbacks. ([noki-services.com/fr](https://noki-services.com/fr))

Le site confirme la structure en 4 modules attendue mais reste au niveau landing-page marketing — pas de captures d'écran de dashboard détaillées. Les sections suivantes complètent avec des conventions UI standards du secteur pour combler les détails (colonnes de tableau, KPI précis, champs de formulaire).

## 1. Dashboard / vue d'ensemble

KPIs standards pour un marchand suivant ses commandes en ligne :

- **Alertes commandes** : commandes en attente, commandes en échec/non vérifiées mises en évidence en priorité sur le dashboard. ([Unicommerce — Dashboard & Reports](https://unicommerce.com/products/dashboard-reports/))
- **Répartition des statuts de commande** (pending / on-hold / refunded etc.) affichée pour garder le pipeline de commandes visible d'un coup d'œil. ([Coupler.io — E-commerce Analytics & KPI Dashboard Examples](https://www.coupler.io/dashboard-examples/ecommerce-analytics-and-kpi-dashboard))
- **Widgets revenu** : chiffre d'affaires jour / mois / trimestre, souvent en cartes KPI en haut de page avant les tableaux détaillés. ([Coupler.io — E-commerce Analytics & KPI Dashboard Examples](https://www.coupler.io/dashboard-examples/ecommerce-analytics-and-kpi-dashboard))
- **Alertes stock/produit** : ruptures, produits désactivés, remontées comme "Product Alerts" à côté des alertes commandes. ([Unicommerce — Dashboard & Reports](https://unicommerce.com/products/dashboard-reports/))
- **Vue snapshot inventaire** : aperçu rapide de l'état réel du stock avec option d'export. ([Unicommerce — Dashboard & Reports](https://unicommerce.com/products/dashboard-reports/))
- **Suivi du cycle complet de commande** (création → paiement → expédition) avec répartition payé / en attente / remboursé / partiellement payé — transposable en France pour distinguer commande confirmée vs encaissement COD en attente. ([Databloo — 12 Essential Ecommerce Dashboards KPIs](https://www.databloo.com/blog/ecommerce-dashboard/))
- **Module "cash tracké depuis un seul environnement"** propre à Noki : le prototype gagne à afficher un bloc "montant COD en attente d'encaissement" comme KPI dashboard distinct du chiffre d'affaires, puisque c'est l'angle différenciant de l'inspiration produit. ([noki-services.com/fr](https://noki-services.com/fr))

KPIs recommandés pour le prototype : commandes en attente de confirmation, commandes en cours de livraison, CA du jour/mois, montant COD en attente d'encaissement, alertes stock bas, taux de livraison réussie.

## 2. Écran liste des commandes (COD)

Différence clé COD vs e-commerce prépayé : le statut de paiement est **découplé** du statut de livraison — une commande peut être "livrée" sans être encore "encaissée", et l'échec de livraison implique aussi l'échec d'encaissement (pas seulement un problème logistique).

- **Statuts standards côté paiement COD** : commande confirmée (paiement engagé/accepté au moment de la confirmation), livraison en cours ("dispatched" — remise au transporteur), livré (le coursier encaisse le paiement à la remise du colis), encaissé/collecté (le coursier prélève le montant, déduit les frais, reverse le solde au marchand) — c'est le moment charnière propre au COD, absent d'une commande prépayée classique. ([Emagia — How Does Cash On Delivery Work](https://www.emagia.com/resources/glossary/how-does-cash-on-delivery-work/))
- **Échec/retour** : si le client refuse le paiement ou est injoignable, la commande passe en échec de livraison et déclenche un processus de retour — statut à distinguer clairement d'un simple retard. ([Emagia — How Does Cash On Delivery Work](https://www.emagia.com/resources/glossary/how-does-cash-on-delivery-work/))
- **Statut confirmé = acquittement marchand**, pas encaissement — le marchand confirme la commande et rassure le client que la transaction est engagée, avant même la préparation. ([Emagia — How Does Cash On Delivery Work](https://www.emagia.com/resources/glossary/how-does-cash-on-delivery-work/))
- **Vue conforme au modèle Noki** : "Commande reçue" → "Confirmation" → (réservation stock) → "Mission assignée" (dispatch) → livré → rapproché/reversé — un pipeline à 5-6 étapes plutôt que les 3 étapes d'un e-commerce prépayé (payé → expédié → livré). ([noki-services.com/fr](https://noki-services.com/fr))

Colonnes recommandées pour le prototype : N° commande | Client | Produits/montant | Statut (à confirmer / confirmée / en préparation / en livraison / livrée-encaissée / échouée-retournée) | Mode de paiement (COD / Mobile Money) | Coursier assigné | Date.

## 3. Écran stock/inventaire

Champs standards pour une boutique généraliste multi-catégories :

- **Nom produit, catégorie, prix, niveau de stock actuel** — jeu de champs de base commun à tout dashboard inventaire e-commerce. ([Unicommerce — Dashboard & Reports](https://unicommerce.com/products/dashboard-reports/))
- **Stock réservé vs stock disponible** : distinction mise en avant par Noki — le stock "réservé" au moment de la confirmation de commande diffère du stock physiquement disponible à la vente, pour éviter la survente. ([noki-services.com/fr](https://noki-services.com/fr))
- **Seuil de stock bas / alerte rupture**, déclenchant les "Product Alerts" visibles au niveau dashboard plutôt que seulement dans l'écran stock lui-même. ([Unicommerce — Dashboard & Reports](https://unicommerce.com/products/dashboard-reports/))

Champs recommandés pour le prototype : nom produit, catégorie (mode/électronique/maison), prix (FCFA), stock disponible, stock réservé, seuil d'alerte, statut (en stock / stock bas / rupture).

## 4. Écran dispatch livraison

Connexion commande → coursier dans un contexte COD :

- **Affectation de mission** : la commande confirmée et préparée est assignée à un livreur/partenaire de livraison — "Mission assignée" chez Noki, avec suivi de progression en temps réel et remontée d'incidents (retard, échec, client injoignable). ([noki-services.com/fr](https://noki-services.com/fr))
- **Montant à encaisser affiché par mission** : puisque le coursier collecte le cash à la livraison, la fiche mission doit porter le montant exact à collecter (et non simplement "livré/non livré") — c'est ce montant qui alimente ensuite l'écran de réconciliation. ([Emagia — How Does Cash On Delivery Work](https://www.emagia.com/resources/glossary/how-does-cash-on-delivery-work/))
- **Statut de progression** : en attente d'assignation → assigné → en cours de livraison → livré (encaissé) → échoué, cohérent avec le modèle à 3-4 états observé côté outils de dispatch généralistes (cf. `docs/research/2026-09-21-delivery-dispatch-ui-conventions.md` pour le détail Onfleet/OptimoRoute/Detrack). ([noki-services.com/fr](https://noki-services.com/fr))

Champs recommandés pour le prototype : N° commande | Coursier assigné | Zone/adresse livraison | Montant à encaisser | Statut (à assigner / en livraison / livré-encaissé / échoué) | Heure d'assignation.

## 5. Écran réconciliation caisse (COD)

Comment un dashboard de réconciliation COD standard rapproche le cash collecté par les coursiers avec les commandes :

- **Suivi en temps réel de la collecte** : le statut de collecte se met à jour automatiquement quand le coursier confirme l'encaissement, avec un calendrier de reversement suivi par coursier — montants attendus comparés automatiquement aux versements réels. ([Edgistify — COD Reconciliation](https://www.edgistify.com/resources/blogs/cod-reconciliation-tracking-cash-collection))
- **Détection d'écarts** : les dashboards signalent automatiquement les écarts entre montant COD attendu et montant reversé, pour agir avant la fermeture de la fenêtre de contestation avec le transporteur. ([Edgistify — COD Reconciliation](https://www.edgistify.com/resources/blogs/cod-reconciliation-tracking-cash-collection))
- **Répartition par coursier** : le système enregistre le montant attendu par commande, permet à chaque coursier de marquer ses commandes comme encaissées, puis rapproche le cash physiquement remis avec la somme des commandes qui lui sont attribuées — le principe même d'un tableau "par coursier" plutôt qu'une seule ligne globale. ([Edgistify — COD Reconciliation](https://www.edgistify.com/resources/blogs/cod-reconciliation-tracking-cash-collection))
- **Vocabulaire Noki à réutiliser** : "rapprochement COD", "reversement" (le versement final du solde net au marchand après déduction des frais de livraison) — les deux termes à reprendre tels quels en français plutôt que de traduire depuis l'anglais "settlement/remittance". ([noki-services.com/fr](https://noki-services.com/fr))

Champs/résumé recommandés pour le prototype : par coursier — montant attendu (somme des commandes livrées) vs montant remis, écart, nombre de commandes ; vue globale — total attendu, total collecté, total reversé au marchand, commandes non encore rapprochées.

## 6. Contexte Congo-Brazzaville / Afrique francophone

- **Mix de paiement recommandé 2026** : "les vendeurs les plus avisés au Congo combinent les deux", avec un ratio cible **70% Mobile Money / 30% cash** en 2026, évoluant vers 90% Mobile Money à mesure que la réputation du vendeur grandit ; environ **40% des transactions quotidiennes à Brazzaville passent par le mobile money**. ([Blog Beezy — Vendre en ligne Congo : MTN MoMo ou cash en 2026](https://blog.iambeezy.app/fr/vendre-en-ligne-congo-mtn-momo-cash-2026/))
- **Taux d'échec du COD élevé** : **30 à 50% des commandes en paiement à la livraison finissent en annulation** — statistique clé pour justifier, dans le prototype, pourquoi un statut "échec/retour" mérite un traitement visuel proéminent plutôt qu'un cas marginal. ([Blog Beezy — Vendre en ligne Congo : MTN MoMo ou cash en 2026](https://blog.iambeezy.app/fr/vendre-en-ligne-congo-mtn-momo-cash-2026/))
- **Pratique courante observée** : "pour les ventes en ligne avec livraison, [les vendeurs] exigent le paiement MoMo avant expédition ; pour les ventes de proximité, ils acceptent le cash" — un signal que même une plateforme "COD-first" comme Noki coexiste avec des paiements mobile money pré-livraison. ([Blog Beezy — Vendre en ligne Congo : MTN MoMo ou cash en 2026](https://blog.iambeezy.app/fr/vendre-en-ligne-congo-mtn-momo-cash-2026/))
- **Adoption mobile money générale** : plus de 60% de la population utilise le mobile money (MTN MoMo, Airtel Money, Orange Money) ; les trois opérateurs sont présentés comme incontournables pour couvrir toute la clientèle. ([Blog Beezy — Commerce en ligne au Congo-Brazzaville 2026](https://blog.iambeezy.app/fr/commerce-en-ligne-congo-brazzaville-2026/))
- **Catégories produits crédibles pour une boutique généraliste** : électronique/téléphonie (dominante en volume et valeur), mode/accessoires (forte visibilité réseaux sociaux), cosmétiques/beauté (marge élevée), alimentation (secteur en plus forte croissance), mobilier/décoration (panier moyen plus élevé) — cohérent avec le positionnement "mode/électronique/maison" prévu pour "Elonga". ([Blog Beezy — Commerce en ligne au Congo-Brazzaville 2026](https://blog.iambeezy.app/fr/commerce-en-ligne-congo-brazzaville-2026/))
- **Panier moyen en ligne : 15 000 à 45 000 FCFA** — fourchette directement réutilisable pour les montants de commande factices du prototype. ([Blog Beezy — Commerce en ligne au Congo-Brazzaville 2026](https://blog.iambeezy.app/fr/commerce-en-ligne-congo-brazzaville-2026/))
- **Taille de marché** : e-commerce congolais estimé à 434 millions de dollars, croissance annuelle de 22,9%, porté par une population jeune (âge médian ~19 ans) et l'absence de marketplace dominante type Jumia — contexte utile pour justifier l'opportunité commerciale dans le pitch, pas pour l'UI elle-même. ([Blog Beezy — Commerce en ligne au Congo-Brazzaville 2026](https://blog.iambeezy.app/fr/commerce-en-ligne-congo-brazzaville-2026/))

## Note de synthèse

Contrairement à la recherche dispatch précédente (`2026-09-21-delivery-dispatch-ui-conventions.md`), la source d'inspiration explicite ici — noki-services.com/fr — est directement accessible et publie assez de vocabulaire produit (modules, statuts, termes français) pour ancrer les 4-5 écrans du prototype sans deviner. Le signal le plus directement actionnable : la terminologie française propre à Noki ("commande reçue → confirmation → stock réservé → mission assignée → rapprochement COD → reversement") à reprendre quasi telle quelle comme fil du pipeline de statuts, complétée par les conventions standards du secteur (Unicommerce, Edgistify) pour les détails de KPI et de tableau que la landing page Noki ne montre pas. Côté contexte local, le ratio 70/30 Mobile Money/cash et le taux d'échec COD de 30-50% sont les deux chiffres les plus utiles pour rendre les données factices du prototype crédibles.
