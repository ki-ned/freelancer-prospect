# Conventions UI des écrans de dispatch livraison — repères pour `templates/agence-livraison/`

Recherche rapide (pas un rapport exhaustif) menée sur les docs officielles/aide d'Onfleet, OptimoRoute, Detrack, Routific, Bringg et Track-POD (outils côté opérateur/dispatcher, pas les apps consommateur type Uber Eats). Complétée par une recherche locale sur les services de livraison/coursier à Brazzaville et Pointe-Noire. Sert de base pour le design des 3 écrans du prototype démo `templates/agence-livraison/` (agence fictive de coursiers à moto, Congo-Brazzaville, données 100% factices).

## 1. Écran dashboard / vue d'ensemble

Éléments standards observés côté opérateur/dispatcher :

- **Vue carte en temps réel des livraisons actives**, avec suivi GPS des coursiers, progression tour par tour et alertes de retard — c'est le cœur du "Command Center" d'Onfleet. ([Onfleet — Command Center](https://onfleet.com/visibility-and-tracking))
- **Bascule Carte / Tableau** en haut du dashboard, la vue tableau permettant de trier les tâches et de personnaliser les colonnes visibles. ([Onfleet — Command Center](https://support.onfleet.com/hc/en-us/articles/35183133144980-Command-Center))
- **Statut des coursiers en direct sur la carte**, avec code couleur par état (en cours de tâche, disponible/en attente, hors service) — repris en détail dans la section 3 ci-dessous. ([Onfleet — Driver Status](https://support.onfleet.com/hc/en-us/articles/10228905705876-Driver-Status))
- **ETA prédictifs qui se mettent à jour dynamiquement** selon la position et le trafic, plutôt que des horaires fixes. ([Onfleet — Visibility & Tracking](https://onfleet.com/visibility-and-tracking))
- **Alertes de retard / livraisons à risque**, remontées avant qu'elles ne deviennent des échecs de livraison, avec possibilité de réassigner ou d'intervenir manuellement depuis le dashboard. ([Onfleet — Assignment & Dispatching](https://onfleet.com/assignment-and-dispatching))
- **KPI de taux de livraison à l'heure** ("on-time delivery rate") mis en avant comme métrique clé, y compris décliné par coursier. ([Onfleet — Visibility & Tracking](https://onfleet.com/visibility-and-tracking))
- **Répartition "en interne vs sous-traitant"** quand une flotte mixte est utilisée — visibilité unifiée dans un seul dashboard. ([Onfleet — Assignment & Dispatching](https://onfleet.com/assignment-and-dispatching))
- **Statuts de commande agrégés en un coup d'œil** (en attente/pas encore planifiée, en cours, livrée, échouée) — Detrack met en avant cette vue "pending / in progress / completed / failed" comme fonction centrale du dashboard. ([Detrack — FAQs](https://www.detrack.com/faqs/))
- **Assignation automatique / auto-dispatch** qui sélectionne le meilleur coursier selon proximité, charge de tournée et fenêtre de livraison — un widget "à assigner" typique du dashboard. ([Onfleet — Assignment & Dispatching](https://onfleet.com/assignment-and-dispatching))
- **Vue analytics multi-sites consolidée**, utile si plusieurs zones/dépôts sont suivis en parallèle. ([Onfleet — Visibility & Tracking](https://onfleet.com/visibility-and-tracking))

KPIs/widgets recommandés pour le prototype (les plus visuels pour une démo commerciale) : nombre de livraisons actives en cours, coursiers disponibles vs en course vs hors service, livraisons terminées aujourd'hui, alertes/retards en cours, carte ou liste des courses en attente d'assignation.

## 2. Écran liste des livraisons/commandes

Colonnes standards observées sur les listes de tâches/commandes :

- **Order ID / numéro de commande**, cliquable pour ouvrir le détail. ([Onfleet — Orders](https://support.onfleet.com/hc/en-us/articles/37787427278228-Orders))
- **Nom du client**. ([Onfleet — Orders](https://support.onfleet.com/hc/en-us/articles/37787427278228-Orders))
- **Statut de la commande**, avec un jeu d'états standard : non assignée (pas encore de coursier), assignée (coursier désigné, "in-transit"), active/en cours ("out for delivery"), terminée ("delivered"), échouée ("attempted delivery" / "failed"). ([Onfleet — Task Status](https://support.onfleet.com/hc/en-us/articles/20509786766228-Task-Status))
- **Fenêtre pickup & dropoff** (adresse + horaires "ready by" / "due by"), affichée en colonne "Pickup & Dropoff Timeline". ([Onfleet — Orders](https://support.onfleet.com/hc/en-us/articles/37787427278228-Orders))
- **Statut détaillé côté planification** : non planifiée (contraintes empêchant l'assignation), planifiée/en route, en cours de service, livrée, échouée/rejetée/annulée — modèle equivalent chez OptimoRoute. ([OptimoRoute — View and understand order status](https://help.optimoroute.com/hc/en-us/articles/27489791606804-View-and-understand-order-status))
- **Colonnes personnalisables** (ajout/retrait/réordonnancement), une fonctionnalité mise en avant aussi bien par Onfleet que par Track-POD, preuve que la liste sert des besoins différents selon l'opérateur. ([Onfleet — Task Import](https://support.onfleet.com/hc/en-us/articles/20676718929684-Task-Import) ; [Track-POD — Customizable Dashboard](https://www.track-pod.com/blog/customizable-dashboard/))
- **Vue "Route" distincte avec colonnes essentielles Route ID / Driver / ETA / COD** (paiement à la livraison) — utile pour regrouper les commandes par tournée/coursier plutôt que ligne par ligne. ([Track-POD — Customizable Dashboard](https://www.track-pod.com/blog/customizable-dashboard/))
- **Filtre/recherche par statut, driver ou véhicule**, pour retrouver rapidement le nombre de courses par coursier. ([Detrack — Search Jobs](https://help.detrack.com/en/articles/5838216-how-to-filter-and-export-jobs-using-the-search-jobs-feature))

Table recommandée pour le prototype : N° commande | Client | Adresse retrait → adresse livraison | Coursier assigné | Statut (en attente / en cours / livrée) | Heure/ETA | (clic → détail).

## 3. Écran détail coursier

Champs standards observés côté fiche coursier/véhicule :

- **Statut du coursier en temps réel**, avec un modèle à 3 états chez Onfleet : *en transit* (en cours d'exécution d'une tâche, pastille bleue), *idle* (en service mais sans tâche active, pastille verte), *off-duty* (hors service, non localisé, pastille grise). ([Onfleet — Driver Status](https://support.onfleet.com/hc/en-us/articles/10228905705876-Driver-Status))
- **Équivalent chez OptimoRoute** : *on duty* (actif et trackable), *off duty* (non trackable), *servicing* (en train de traiter une commande), *on the way* (en route vers une commande) — un modèle un peu plus détaillé, utile si on veut distinguer "disponible" de "en route vers un pickup". ([OptimoRoute — Getting started for new dispatchers](https://help.optimoroute.com/hc/en-us/articles/35511474016404-Getting-started-for-new-OptimoRoute-dispatchers))
- **Zone/secteur d'attribution**, utilisée pour assigner les commandes par zone géographique plutôt qu'au hasard — champ `zone` explicitement listé dans les champs de livraison Detrack. ([Detrack — Additional Delivery Fields](https://help.detrack.com/en/articles/6123711-additional-delivery-fields))
- **Type de véhicule** (`vehicle_type`), un champ dédié dans le modèle de données Detrack — pertinent ici pour distinguer moto/vélo/voiture. ([Detrack — Additional Delivery Fields](https://help.detrack.com/en/articles/6123711-additional-delivery-fields))
- **Téléphone du contact** (`phone`), présent comme champ standard associé à chaque livraison/coursier. ([Detrack — Additional Delivery Fields](https://help.detrack.com/en/articles/6123711-additional-delivery-fields))
- **Liste des livraisons assignées au coursier**, avec possibilité de filtrer les commandes par driver pour voir sa charge du jour. ([Detrack — Search Jobs](https://help.detrack.com/en/articles/5838216-how-to-filter-and-export-jobs-using-the-search-jobs-feature))
- **Note de performance / feedback client moyen** par coursier, mise en avant comme indicateur individuel sur les dashboards analytics. ([Onfleet — Visibility & Tracking](https://onfleet.com/visibility-and-tracking))
- **Historique de complétion / stops effectués vs sautés**, avec preuve de livraison (photo) — visible dans les rapports de performance driver. ([Routific — Driver Analytics and Delivery Performance Reports](https://academy.routific.com/en/articles/1317937-driver-analytics-and-delivery-performance-reports))
- **Contrôle dispatcher** : possibilité de forcer un coursier hors service depuis sa fiche (si idle ou injoignable). ([Onfleet — Driver Status](https://support.onfleet.com/hc/en-us/articles/10228905705876-Driver-Status))

Champs recommandés pour le prototype : nom, téléphone, statut (disponible / en course / hors service), zone assignée, type de véhicule (moto), liste des livraisons du jour avec statut, note/nombre de livraisons complétées.

## 4. Contexte Congo-Brazzaville / Afrique francophone

Aucun produit de dispatch B2B cité ci-dessus (Onfleet, OptimoRoute, Detrack, Routific, Bringg) ne publie de documentation produit spécifique à l'Afrique centrale — les signaux locaux viennent donc d'acteurs terrain (startups de livraison, presse spécialisée) plutôt que de docs d'outils de dispatch.

- **Noki Noki**, coursiers à moto basés à Brazzaville et Pointe-Noire (+ Dakar, Abidjan, Libreville), fondée en 2021. Le nom signifie **"vite vite" en lingala**, une des langues véhiculaires du Congo — piste directe pour un nom de marque fictive crédible localement (ex. un dérivé lingala/kituba évoquant la rapidité). Délais annoncés : 10-15 min en centre-ville, 20-30 min en périphérie. Services annexes : Noki Food (repas), Noki Noki Enterprises (B2B), Noki Noki Shopping (courses/pressing). ([We Are Tech Africa — Congo : Noki Noki opère dans la livraison au dernier kilomètre](https://www.wearetech.africa/fr/fils/solutions/congo-noki-noki-opere-dans-la-livraison-au-dernier-kilometre))
- **BantuDelice**, plateforme de livraison de repas à Brazzaville (zone principale) et Pointe-Noire (deuxième pôle), avec un réseau de livreurs à recruter. Frais de livraison variables par restaurant partenaire, de **1 105 à 2 817 FCFA** observés. Moyens de paiement : **MTN MoMo, Airtel Money et espèces à la livraison** — les trois méthodes sont présentées ensemble sur le site. ([BantuDelice](https://bantudelice.cg/))
- **ColiNoki**, plateforme de suivi de colis et gestion vendeur au Congo — présence confirmée mais contenu détaillé (tarifs, zones) non accessible publiquement au moment de la recherche. ([ColiNoki — Services](https://colinoki.com/services))
- **Yango Delivery**, présent à Brazzaville depuis 2023, tarification calculée automatiquement selon la distance avec suivi temps réel intégré à l'app. ([Blog Beezy — Livraison e-commerce Congo Brazzaville 2026](https://blog.iambeezy.app/fr/livraison-e-commerce-congo-brazzaville-solutions-logistiques-2026/))
- **Structure de tarification par zone (FCFA)** relevée pour Brazzaville : centre-ville ~1 000 FCFA, périphérie proche ~2 000 FCFA, périphérie éloignée ~3 000 FCFA, hors Brazzaville sur devis ; liaisons inter-villes 2 000 à 15 000 FCFA. Cette grille par zone concentrique (plutôt qu'un tarif au kilomètre précis) est directement réutilisable pour la fiche tarifs du prototype. ([Blog Beezy — Livraison e-commerce Congo Brazzaville 2026](https://blog.iambeezy.app/fr/livraison-e-commerce-congo-brazzaville-solutions-logistiques-2026/))
- **Paiement à la livraison + Mobile Money comme norme du marché** : les sources locales (BantuDelice, Blog Beezy) citent systématiquement le trio **espèces à la livraison / MTN MoMo / Airtel Money**, jamais la carte bancaire en premier plan — à reprendre tel quel dans le prototype plutôt que "carte" par défaut. ([BantuDelice](https://bantudelice.cg/) ; [Blog Beezy — Livraison e-commerce Congo Brazzaville 2026](https://blog.iambeezy.app/fr/livraison-e-commerce-congo-brazzaville-solutions-logistiques-2026/))
- **Frein logistique structurel à noter pour le réalisme du mockup** : absence d'adresses postales standardisées et état variable des routes selon les quartiers — une raison crédible pour laquelle une fiche livraison affiche un point de repère/description de zone en plus de l'adresse. ([Blog Beezy — Livraison e-commerce Congo Brazzaville 2026](https://blog.iambeezy.app/fr/livraison-e-commerce-congo-brazzaville-solutions-logistiques-2026/))

## Note sur les sources Afrique francophone

Comme pour la recherche POS précédente, il n'existe pas de documentation produit officielle détaillée pour un outil de dispatch opérateur spécifiquement congolais — Noki Noki, BantuDelice, ColiNoki et Yango Delivery sont des services de livraison grand public/marketplace avec peu de contenu technique publié sur leur back-office dispatcher. Les données retenues sont donc surtout des signaux de marché (tarifs, moyens de paiement, délais annoncés, nom de marque) plutôt que des specs d'interface. Le signal le plus solide et directement actionnable : la grille tarifaire par zone concentrique en FCFA et le trio de paiement espèces/MTN MoMo/Airtel Money, à intégrer dans l'écran liste des livraisons et/ou une fiche tarifs du prototype ; et le nom **Noki Noki** ("vite vite" en lingala) comme référence de ton pour un nom de marque fictive locale et crédible.
