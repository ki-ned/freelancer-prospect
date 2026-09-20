# Conventions UI des écrans POS/caisse — repères pour `templates/gestion-caisse/`

Recherche rapide (pas un rapport exhaustif) menée sur les docs officielles de Square, Lightspeed, Odoo Point of Sale, Shopify POS, et deux produits utilisés en Afrique francophone (Wave Business, Djamo). Sert de base pour le design des 3 écrans du prototype démo `templates/gestion-caisse/` (caisse fictive d'épicerie de quartier, Congo-Brazzaville, données 100% factices).

## 1. Écran caisse / encaissement

Éléments standards observés sur les 3 produits qui ont une doc détaillée sur cet écran :

- **Grille de produits par catégorie** (tuiles cliquables) — Square propose des "item tiles", "category tiles" et "shortcut tiles" configurables dans son "item grid" ; taper une tuile catégorie ouvre la liste des produits de cette catégorie. ([Square — Set up item grid](https://squareup.com/help/us/en/article/8334-set-up-item-grid))
- **Barre de recherche produit** (nom, code-barres/SKU) en complément de la grille. ([Square — Build your customer's cart](https://squareup.com/help/us/en/article/8238-build-your-customer-s-cart-in-the-square-retail-pos-app))
- **Panneau panier/ticket** qui liste les articles ajoutés, avec quantités ajustables (+/-) et le sous-total qui se met à jour en direct. Chez Odoo, ce panier est une des 3 zones fixes de l'écran caisse. ([Odoo 19 — Workflow](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/use.html))
- **Numpad / pavé numérique** dédié aux actions sur la commande : quantité, remise (%), prix — c'est la 3e zone de l'écran Odoo ("product selector / cart / numpad"). ([Odoo 19 — Workflow](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/use.html))
- **Bouton de paiement unique et visible** qui fait la transition vers l'écran de sélection du mode de paiement ("Payment" chez Odoo, "Charge" chez Square), suivi du choix du mode de paiement puis validation. ([Odoo 19 — Workflow](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/use.html) ; [Square — Build your customer's cart](https://squareup.com/help/us/en/article/8238-build-your-customer-s-cart-in-the-square-retail-pos-app))
- **Boutons de mode de paiement** distincts par méthode — espèces, carte, etc. — affichés au moment du paiement plutôt que mélangés à la grille produit (Odoo : "Select the payment method, enter the received amount, and click Validate"). Pour le marché Afrique francophone, ajouter des boutons Mobile Money est la norme : Djamo Caisse et Wave Business mettent en avant l'acceptation de plusieurs opérateurs mobile money (Wave, MTN, Orange Money, Moov) à côté du cash. ([Digital Mag CI — Djamo Business](https://digitalmag.ci/djamo-business-une-plateforme-pour-simplifier-vos-transactions-professionnelles/) ; [Wave — Business](https://www.wave.com/fr/business/))
- **Panier positionné sur un côté fixe de l'écran, persistant pendant tout le flux** — Shopify POS a explicitement fait évoluer son "cart summary" pour qu'il "reste visible tout au long du checkout, du choix des articles jusqu'au paiement" (amélioration récente citée dans leur changelog/aide). ([Shopify Help — Customize customer display](https://help.shopify.com/en/manual/sell-in-person/shopify-pos/customize-pos/customer-display))

Répartition d'écran typique à retenir pour le prototype : grille produits/catégories en zone principale (large), panier/ticket en colonne latérale fixe, numpad + bouton paiement en bas ou associés au panier.

## 2. Écran historique des ventes

Colonnes/champs standards d'une table de transactions, selon Square, Odoo et Lightspeed :

- **Date / heure** de la vente. ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Numéro de commande / numéro de reçu** (référence unique de transaction). ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Point de vente / caisse** d'origine (utile si plusieurs caisses). ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Employé / vendeur** ayant traité la commande. ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Client** (si renseigné). ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Montant total payé**. ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Statut de la commande** (payée, partielle, etc.). ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- **Mode/type de paiement** utilisé, avec filtre dédié — Square permet de filtrer ses transactions par date, mode de paiement, statut, montant, équipe, etc. ([Square — View and search transactions](https://squareup.com/help/us/en/article/5145-transaction-search))
- **Recherche/filtre par date, numéro de commande ou client** dans la liste. ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))
- Possibilité de **cliquer une ligne pour voir le détail des articles** de la vente (drill-down), présent chez Odoo comme chez Square. ([Odoo — Reporting](https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/reporting.html))

Table recommandée pour le prototype : Heure | N° ticket | Articles (résumé ou nombre) | Mode de paiement | Montant | (clic → détail).

## 3. Écran résumé de fin de journée

KPIs standards observés sur les rapports de clôture (close of day chez Square, closing control chez Odoo, daily sales chez Shopify, X/Z report chez Lightspeed) :

- **Chiffre d'affaires total du jour** (ventes brutes et/ou nettes) — Square distingue "Gross sales", "Net sales", "Total sales" dans son rapport résumé. ([Square — In-app summaries and reports](https://squareup.com/help/us/en/article/5381-in-app-summaries-and-reports))
- **Nombre de transactions/commandes** de la session — affiché sur l'écran de clôture Odoo ("the number of orders made and the total amount made during the session"). ([Odoo — Cash control / closing](https://www.odoo.com/documentation/15.0/fr/applications/sales/point_of_sale.html))
- **Panier moyen (average order value)** — Shopify POS affiche explicitement 3 tuiles en haut du rapport quotidien : ventes nettes, panier moyen, articles par commande. ([Shopify Help — POS Analytics](https://help.shopify.com/en/manual/sell-in-person/shopify-pos/analytics-on-pos))
- **Répartition par mode de paiement** — Odoo affiche le total des transactions groupé par mode de paiement à la clôture de session ; Square a un rapport "payment methods" dédié (nombre de paiements, montant, par carte/espèces) ; Lightspeed a son "payments report". ([Odoo — Closing control](https://www.odoo.com/documentation/15.0/fr/applications/sales/point_of_sale.html) ; [Square — In-app summaries and reports](https://squareup.com/help/us/en/article/5381-in-app-summaries-and-reports) ; [Lightspeed — Using the payments report](https://x-series-support.lightspeedhq.com/hc/en-us/articles/25534178609563-Using-the-payments-report))
- **Réconciliation caisse (espèces attendues vs comptées, écart)** — l'écran de clôture Odoo demande de compter le tiroir-caisse et compare le montant "Counted" au montant attendu, avec alerte en cas d'écart ("Payments Difference"). Lightspeed a le même principe via son "register closure report" et son "cash movement report". ([Odoo — Closing control](https://www.odoo.com/documentation/15.0/fr/applications/sales/point_of_sale.html) ; [Lightspeed — X and Z Reports](https://shopkeep-support.lightspeedhq.com/hc/en-us/articles/47480030210971-X-and-Z-Reports))
- **Ventes par article/catégorie, y compris meilleures ventes** — Square a un rapport "item, category and modifiers sales" avec quantité vendue, ventes brutes/nettes par article ; Square inclut aussi ça dans son "close of day report" ("category sales, and item sales"). ([Square — View item, category and modifiers sales reports](https://squareup.com/help/us/en/article/8363-view-item-category-and-modifiers-sales-reports) ; [Square — Close of day report](https://squareup.com/help/us/en/article/6594-end-of-day-reporting-with-square-for-restaurants))
- **Taxes, remises/comps, retours** appliqués sur la journée — présents dans le "close of day report" Square (gross/net sales, discounts, comps, returns). ([Square — Close of day report](https://squareup.com/help/us/en/article/6594-end-of-day-reporting-with-square-for-restaurants))

KPIs recommandés pour le prototype (les plus visuels/impactants pour une démo commerciale) : total du jour, nombre de ventes, panier moyen, répartition par mode de paiement (cash / mobile money / carte), top produits vendus.

## Note sur les sources Afrique francophone

Peu de documentation produit officielle détaillée sur l'UI d'écran de caisse existe pour les acteurs spécifiquement congolais/ouest-africains (Wave, Djamo) — ce sont surtout des apps de paiement/collecte avec tableau de bord de transactions plutôt que des POS complets à 3 écrans. Le signal principal retenu d'eux est fonctionnel : la place centrale du **Mobile Money comme mode de paiement à côté du cash et de la carte**, ce qui justifie d'ajouter un bouton "Mobile Money" dédié dans l'écran caisse du prototype plutôt que de se limiter à Espèces/Carte comme les POS occidentaux par défaut. ([Wave — Business](https://www.wave.com/fr/business/) ; [Digital Mag CI — Djamo Business](https://digitalmag.ci/djamo-business-une-plateforme-pour-simplifier-vos-transactions-professionnelles/))
