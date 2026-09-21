# Conventions UI back-office restaurant / KDS — repères pour `templates/gestion-restaurant/`

Recherche rapide (pas un rapport exhaustif) menée sur la documentation officielle de Toast POS, Lightspeed Restaurant (K-Series/L-Series), TouchBistro, complétée par des recherches sur le contexte Afrique francophone. Sert de base pour le design des 3 écrans du prototype démo `templates/gestion-restaurant/` (back-office/cuisine fictif, distinct du site vitrine `templates/restaurant-vitrine/` déjà construit pour "Chez Tantine", Congo-Brazzaville, données 100% factices).

## 1. Écran dashboard / vue d'ensemble

Éléments standards observés sur les apps de pilotage restaurant :

- **Ventes du jour avec comparaison** — Toast Now affiche les ventes et le labor "avec des totaux heure par heure" et des "comparaisons au même jour la semaine dernière et l'année dernière". ([Toast — Toast Now guide](https://pos.toasttab.com/blog/on-the-line/toast-now-guide))
- **Reporting temps réel multi-établissement en un seul endroit** — Toast Now permet de "se connecter une fois et voir tous ses établissements et leurs performances au même endroit". ([Toast — Get Started With the Toast Now App](https://support.toasttab.com/en/article/Get-Started-with-the-Toast-Now-App))
- **Gestion des articles en/hors stock directement depuis l'app de pilotage** — Toast Now permet de "marquer des articles en ou hors stock" en plus de gérer les commandes en ligne. ([Toast — Toast Now guide](https://pos.toasttab.com/blog/on-the-line/toast-now-guide))
- **Journal de bord / logbook manager** — Toast Now inclut la lecture/écriture du "manager log" pour la coordination d'équipe. ([Toast — Toast Now guide](https://pos.toasttab.com/blog/on-the-line/toast-now-guide))
- **Compteurs de tickets en cuisine** — le KDS affiche le nombre de tickets actuellement à l'écran et un **timer de temps de préparation moyen ("average fulfillment timer")**, un signal direct pour un widget "commandes en cours" / "temps moyen" au dashboard. ([Toast — Kitchen display system overview](https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html))
- **Food cost, marge brute, productivité des équipes, niveau de stock** — cités comme indicateurs essentiels suivis "en temps réel" par les logiciels de gestion restaurant généralistes francophones (Apicbase, Komia). ([Komia — Comparatif logiciels de gestion restaurant](https://www.komia.io/blog/les-7-meilleurs-logiciels-pour-optimiser-la-gestion-de-son-restaurant))

Widgets recommandés pour le prototype : commandes en cours (nombre + statut résumé), ventes du jour (montant + nombre de commandes), temps de préparation moyen, alertes stock bas/rupture (liste courte avec badge), éventuellement un rappel "top plats du jour".

## 2. Écran commandes par table (vue salle/floor plan)

Deux approches standards coexistent selon le produit :

- **Floor plan visuel avec statut couleur par table** — approche dominante chez Lightspeed et TouchBistro : plan de salle glisser-déposer qui reflète l'agencement réel, pour voir en un coup d'œil quelles tables sont occupées, en attente, en service ou à débarrasser. ([Lightspeed — About floor plans and tables](https://k-series-support.lightspeedhq.com/hc/en-us/articles/1260804656689-About-floor-plans-and-tables); [TouchBistro — Table Management](https://www.touchbistro.com/features/floor-plan-table-management/))
- **Liste de commandes en parallèle** — Lightspeed L-Series propose aussi une "Orders List" en complément du floor plan pour un suivi séquentiel. ([Lightspeed — About the Orders List](https://resto-support.lightspeedhq.com/hc/en-us/articles/360005901634-About-the-Orders-List))

Statuts et code couleur précis, d'après la doc Lightspeed Restaurant (L-Series) — 5 états distincts sur le plan de salle :

- **Pas de couleur** : aucune commande active sur la table (client installé, pas encore commandé).
- **Vert** : commande en cours pour la table.
- **Orange** : commande prête pour le client (visible en mode "Table Service" avec Lightspeed Kitchen — équivalent du "ready" cuisine).
- **Rouge** : le ticket a été imprimé, paiement pas encore encaissé.
- **Bleu** : nouvelle commande à emporter/livraison à accepter.

([Lightspeed — Understanding table status](https://resto-support.lightspeedhq.com/hc/en-us/articles/226306187-Understanding-table-status))

Côté KDS Toast, la progression d'un ticket suit : **envoyé en cuisine ("Sent")** → préparation par poste → **coche verte** quand un poste a fini son item → **coche verte double** et **en-tête de ticket qui passe au vert** à l'écran expéditeur quand tous les items sont prêts → le ticket disparaît une fois servi/acquitté. Un point jaune à gauche d'un item signale un accomplissement partiel entre postes. Des animations flash et des sons signalent un nouveau ticket ou une modification. ([Toast — Kitchen display system overview](https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html))

TouchBistro utilise également un code couleur sur les en-têtes de ticket par type de commande (sur place / à emporter / livraison), et le plan de salle affiche le statut en temps réel (libre / occupée / nécessite attention). ([TouchBistro — Table Management](https://www.touchbistro.com/features/floor-plan-table-management/))

Convention recommandée pour le prototype (mappée sur le brief : en cuisine / prête / servie) :
- **Gris/neutre** = table libre
- **Bleu ou jaune** = commande envoyée / en cuisine
- **Orange** = prête (à servir) — cohérent avec Lightspeed
- **Vert** = servie / table en service normal

Layout recommandé : grille de tables façon floor plan (cartes rectangulaires numérotées) plutôt qu'une liste plate — c'est la convention dominante à la fois chez Lightspeed et TouchBistro pour ce type d'écran salle.

## 3. Écran stock / inventaire

Champs standards observés :

- **Statut d'inventaire par article** — Toast POS (niveau menu, pas le module Inventory complet) utilise 3 statuts : **"In Stock"**, **"Out of Stock"**, **"Quantity"** (quantité limitée avec compteur). Le bouton d'un article passe à **"0"** visible directement dessus quand il est en rupture ; la quantité restante s'affiche aussi sur le bouton en mode "Quantity". Quand la quantité atteint 0, le statut repasse automatiquement à "Out of Stock". ([Toast — Menu item inventory overview](https://doc.toasttab.com/doc/platformguide/adminMenuItemInventoryOverview.html))
- **Seuil bas / "Low" tag** — pour les ingrédients avec un par level défini, Toast applique une étiquette **"Low"** dès que la déplétion fait passer le stock sous ce seuil. Le seuil de quantité basse par défaut est fixé à **5** pour les articles de menu (non configurable à ce niveau API). ([Toast — Stock webhook](https://doc.toasttab.com/doc/devguide/apiStockWebhook.html))
- **Rapport dédié aux ruptures ("86 report")** — liste les articles dont le statut est "Quantity" et dont la quantité restante est ≤ à un seuil configurable. ([Toast — Viewing the 86 report](https://doc.toasttab.com/doc/platformguide/adminMenuInventory86Report.html))
- **Champs standards côté stock/inventaire "vrai" (par opposition au stock menu simplifié)** — chez Lightspeed Restaurant (K-Series) : nom de l'article, **prix de revient ("cost price")**, **quantité**, **valeur totale du stock**, **fournisseur lié à l'article**, **type de mesure (volume vs poids)**, **format de conditionnement**, et **par level (seuil de réapprovisionnement)** utilisé pour repérer les articles sous le seuil au moment de créer un bon de commande. ([Lightspeed — Stock management (Inventory)](https://k-series-support.lightspeedhq.com/hc/en-us/articles/4407509542043-Stock-management-Inventory))
- **Reorder point / restock level** — définition générique confirmée côté Lightspeed Retail : le "reorder point" est le niveau de stock en dessous duquel un article est identifié comme "low stock" et apparaît sur le rapport de stock bas ; le "restock level" est la quantité par défaut commandée une fois ce seuil atteint. ([Lightspeed — Stock reorder point and restock level](https://x-series-support.lightspeedhq.com/hc/en-us/articles/25534223596571-Stock-reorder-point-and-restock-level))

Champs recommandés pour le prototype : Ingrédient | Stock actuel | Unité | Seuil de réapprovisionnement | Fournisseur (optionnel) | Statut (badge).

Convention visuelle recommandée pour "stock bas" / "rupture" : badge/étiquette coloré à côté de la ligne (orange = bas, rouge = rupture), cohérent avec le "Low" tag de Toast et le principe de rapport dédié aux ruptures — pas besoin de surligner toute la ligne, un badge suffit et reste lisible en liste dense.

## 4. Contexte Afrique francophone et crédibilité locale

- Peu de documentation produit officielle détaillée existe sur l'UI d'un back-office restaurant spécifiquement pour l'Afrique francophone. Le signal le plus concret trouvé est celui d'un intégrateur Odoo basé à Brazzaville : module **Point de Vente restaurant avec gestion des commandes par table, gestion de salle, écran cuisine, impression automatique des tickets en cuisine**, adapté aux "contraintes locales (connectivité variable, paiement mobile money, comptabilité OHADA)", avec un **mode hors-ligne** où les commandes se synchronisent au retour de connexion. Ce point (mode dégradé / offline-first) est un détail crédible à évoquer dans le pitch commercial même si le prototype statique n'a pas besoin de le simuler visuellement. ([Ceso Entreprise — Odoo pour les Restaurants au Congo](https://cesoentreprise.com/solutions/erp/odoo-pour-restauration))
- Le site vitrine déjà construit (`templates/restaurant-vitrine/index.html`, restaurant fictif "Chez Tantine") établit déjà un menu de référence : **poisson braisé au piment** (tilapia, bâton de manioc, piment pili-pili), **poulet moambe** (sauce noix de palme, riz), **saka-saka au poisson fumé** (feuilles de manioc pilées, huile de palme, poisson fumé), **maboké de poisson** (feuille de bananier), et un plat à base de **fumbwa** (feuilles de fumbwa, crevettes, arachide pilée). L'écran stock du prototype back-office doit rester cohérent avec ce menu.
- Ingrédients de base confirmés pour la cuisine congolaise (cassava/manioc central dans l'alimentation du Congo-Brazzaville, feuilles de manioc = saka-saka/pondu, poisson d'eau douce du fleuve Congo — capitaine, silure, tilapia) : source complémentaire indépendante du site vitrine, pour valider que les ingrédients choisis sont représentatifs et pas inventés au hasard. ([Wikipédia — Moambe chicken](https://en.wikipedia.org/wiki/Moambe_chicken))

Liste d'ingrédients recommandée pour l'écran stock (cohérente avec le menu "Chez Tantine") : Tilapia frais, Poulet fermier, Feuilles de manioc (saka-saka), Huile de palme, Riz, Bâton de manioc, Arachide pilée, Piment pili-pili, Feuilles de fumbwa, Crevettes, Poisson fumé, Feuilles de bananier (pour maboké), Gingembre, Ail.
