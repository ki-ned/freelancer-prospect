# Data dictionary

**Statut : complété (interview du 2026-09-19).** Convention de nommage : snake_case pour tout champ documenté ici.

## Pourquoi ce doc est différent ici

Ce repo est un site statique (HTML/CSS/PDF), pas une app avec une vraie base de données. Il n'y a donc pas de tables SQL à documenter. Deux structures de données méritent quand même d'être suivies ici.

### 1. Champs "prospect" (`prospects/<slug>/README.md`)

Chaque fiche prospect documente en prose les mêmes champs. Schéma informel, en snake_case :

- `secteur` — secteur d'activité (ex. "restauration", "location de véhicules")
- `zone` — ville/quartier (ex. "Pointe-Noire", "Brazzaville")
- `score` — score de qualification sur 100
- `decideur_nom` — nom du décideur identifié
- `decideur_poste` — poste/rôle du décideur
- `contact_canal` — canal de contact vérifié (`linkedin`, `whatsapp`, `email`, etc.)
- `contact_valeur` — identifiant du contact sur ce canal
- `statut_message` — `redige` / `envoye` / `relance`
- `date` — date de dernière mise à jour du statut

Décision : ce schéma reste en Markdown libre par prospect (pas de `prospects.json`/`.csv` séparé pour l'instant) — le volume actuel (4 prospects) ne justifie pas la formalisation. À reconsidérer si le nombre de prospects suivis rend la synthèse manuelle pénible.

### 2. Modèles de données fictifs des prototypes "gestion" (famille B)

Chaque prototype multi-écrans (`templates/gestion-*`) simule un petit jeu de données fictif pour paraître réaliste. **Documenter ici le modèle de données fictif de chaque prototype au moment où il est construit**, en snake_case.

Contrainte fixée pendant l'interview (Round 4) : ces données restent des fixtures statiques codées en dur dans le HTML/JS de chaque prototype — pas de backend, pas de persistance réelle (voir `docs/integrations.md`).

#### gestion-caisse (Phase 1 — livré le 2026-09-20)

Pilote "Épicerie du Coin" (épicerie de quartier fictive), 3 écrans (`index.html` caisse, `historique.html`, `resume.html`), données codées en dur en JS dans chaque page (dupliquées entre pages, cohérent avec l'absence de build) :

```text
produits: id, nom, prix, categorie
  categorie ∈ { Boissons, Épicerie, Hygiène, Recharges }

transactions: id, heure, montant, mode_paiement
  mode_paiement ∈ { especes, carte, mobile }
```

Le ticket en cours sur l'écran caisse (panier client, JS pur, non persisté) associe des `produits.id` à une quantité — pas de champ `date` sur les transactions (une seule journée fictive simulée par écran, `17 mars 2026`).

#### gestion-ecole (Phase 2 — livré le 2026-09-20)

Pilote "École La Réussite" (école primaire privée fictive), 3 écrans (`index.html` tableau de bord, `eleves.html`, `fiche-eleve.html`), données codées en dur en JS/HTML dans chaque page :

```text
eleves: id, nom, classe, contact_parent, statut_frais
  classe ∈ { CP1, CP2, CE1, CE2, CM1, CM2 }
  statut_frais ∈ { a_jour, partiel, en_retard }

frais: id, eleve_id, poste, montant_du, montant_paye, statut, date_echeance
  poste ∈ { inscription, trimestre_1, trimestre_2, trimestre_3 }
  statut ∈ { paye, partiel, a_venir }
```

Barème illustratif : inscription 35 000 XAF (unique) + scolarité 100 000 XAF/trimestre × 3 (année scolaire en 3 trimestres, Oct–Juil, convention confirmée par `docs/research/2026-09-20-school-management-ui-conventions.md`). La liste `eleves.html` affiche 10 élèves à titre d'exemple sur les 187 comptés au tableau de bord ; seule Grâce Loubaki (statut `en_retard`) a une fiche `frais` complète construite (`fiche-eleve.html`), les autres statuts de la liste sont illustratifs sans détail de paiement sous-jacent.

#### gestion-auberge (Phase 2 — livré le 2026-09-21)

Pilote "Auberge du Fleuve" (auberge indépendante fictive, 12 chambres, Brazzaville), 3 écrans (`index.html` tableau de bord, `chambres.html` plan des chambres, `reservation.html`), données codées en dur en JS/HTML dans chaque page :

```text
chambres: numero, type, statut
  type ∈ { standard, confort }
  statut ∈ { libre, occupee, a_nettoyer, hors_service }

reservations: id, client, contact, chambre, date_arrivee, date_depart, tarif_nuit, acompte, mode_paiement_acompte
```

Barème illustratif : 40 000 XAF/nuit (Standard), 65 000 XAF/nuit (Confort) — ancré sur une grille tarifaire réelle d'hôtels indépendants à Brazzaville citée dans `docs/research/2026-09-21-hotel-pms-ui-conventions.md`. Statuts de chambre à 4 états (convention simplifiée inspirée de KiboERP, un PMS africain, plutôt que le vocabulaire plus riche d'Opera/Mews). Seule Pauline Ngouabi (chambre 204) a une fiche `reservations` complète construite.

**Note QA** : livré initialement avec une relecture statique seulement (`agent-browser` bloqué par une stratégie de contrôle d'application Windows). QA visuelle réelle faite le 2026-09-21 via un script Playwright ad hoc contre les pages GitHub Pages en ligne (contournement du blocage, voir `current_state.md`) — aucun bug trouvé, écran confirmé.

#### gestion-comptable (Phase 2 — livré le 2026-09-21)

Pilote "Cabinet Malonga & Associés" (cabinet comptable fictif, Brazzaville), 3 écrans (`index.html` tableau de bord, `factures.html`, `facture-detail.html`), données codées en dur en JS/HTML dans chaque page :

```text
factures: numero, client, date_emission, date_echeance, montant_ht, tva, montant_ttc, statut
  numero au format FA-AAAA-NNNN (numérotation séquentielle SYSCOHADA)
  statut ∈ { payee, attente, retard }

depenses: poste, montant
  poste ∈ { loyer, salaires, charges_diverses }
```

TVA à 18 % (taux standard Congo/zone OHADA, voir `docs/research/2026-09-21-accounting-dashboard-ui-conventions.md`), présentation HT/TVA/TTC systématique. La facture détaillée (`facture-detail.html`, exemple FA-2026-0014) affiche le NIU et le RCCM fictifs du cabinet en en-tête, conformément à l'obligation légale SYSCOHADA — seule cette facture a un détail de prestations HT/TVA construit, les 6 autres de `factures.html` n'ont qu'un statut et un montant.

#### gestion-restaurant (Phase 2 — livré le 2026-09-21)

Pilote "Le Mbongui" (restaurant fictif distinct de Chez Tantine/restaurant-vitrine, Brazzaville), 3 écrans (`index.html` tableau de bord, `salle.html`, `stock.html`), données codées en dur en JS/HTML dans chaque page :

```text
tables: numero, couverts, statut
  statut ∈ { libre, cuisine, pret, servi }

ingredients: nom, stock_actuel, unite, seuil, fournisseur, statut
  unite ∈ { kg, L, unites }
  statut ∈ { ok, bas, rupture }
```

Statuts de table à 4 états, convention couleur inspirée de Lightspeed (voir `docs/research/2026-09-21-restaurant-back-office-ui-conventions.md`) : libre = neutre/pas de couleur, en cuisine = vert, prêt = ambre, servi = gris neutre. Liste d'ingrédients cohérente avec la carte de `templates/restaurant-vitrine/` (tilapia, poulet, feuilles de manioc, piment pili-pili...) sans reprendre le même établissement fictif. Le tableau de bord (`index.html`) et `salle.html`/`stock.html` sont numériquement cohérents entre eux (5 commandes en cours, 4 alertes stock, mêmes tables et ingrédients cités des deux côtés).

#### agence-livraison (Phase 2 — livré le 2026-09-21)

Pilote "Éclair Coursiers" (agence de coursiers moto fictive, Brazzaville — nom choisi pour ne pas entrer en collision avec le futur `templates/noki-clone` : "Noki" est le nom d'un vrai service de coursiers à Brazzaville, cité dans `docs/research/2026-09-21-delivery-dispatch-ui-conventions.md`). 3 écrans (`index.html` tableau de bord, `courses.html`, `livreur.html`), données codées en dur en JS/HTML :

```text
courses: id, client, retrait, livraison, livreur, montant, statut
  statut ∈ { attente, encours, livree, echouee }

livreurs: nom, contact, vehicule, zone, statut
  statut ∈ { encours, disponible, hors_service }
```

Tarifs par zone (1 000 / 2 000 / 3 000 XAF selon centre-ville/périphérie proche/éloignée) et modèle de statut livreur à 3 états ancrés sur la recherche (Onfleet, OptimoRoute, et le contexte local Brazzaville). Seule Rachel Nzaba a une fiche `livreur.html` complète construite.

#### noki-clone (Phase 3 — livré le 2026-09-21)

Pilote "Elonga" (boutique en ligne généraliste fictive, mode/électronique/maison, paiement à la livraison), inspiration fonctionnelle sur noki-services.com/fr (aucune reprise visuelle). 5 écrans (`index.html` tableau de bord, `commandes.html`, `stock.html`, `dispatch.html` livraison, `reconciliation.html`), données codées en dur en JS/HTML :

```text
commandes: id, client, articles, mode_paiement, montant, statut
  mode_paiement ∈ { mobile_money, especes }
  statut ∈ { confirmee, expediee, livree, echouee }

produits: nom, categorie, prix, stock_disponible, stock_reserve, statut
  categorie ∈ { electronique, mode, maison }
  statut ∈ { ok, bas, rupture }

missions: id, commande_id, livreur, zone, montant_a_encaisser, statut
  statut ∈ { encours, terminee }

reconciliation: livreur, montant_collecte, montant_reverse, ecart, statut
  statut ∈ { solde, a_reverser }
```

Vocabulaire des statuts et modules (Commande & confirmation, Stock & préparation, Livraison & dispatch, COD & reversements) directement issu de la recherche sur noki-services.com/fr (voir `docs/research/2026-09-21-ecommerce-cod-dispatch-ui-conventions.md`) — la distinction stock disponible/réservé et le suivi séparé de l'encaissement (à la livraison) vs. du reversement (à la boutique) sont des mécaniques réelles du paiement à la livraison, pas des inventions. Les 3 montants clés (cash chez les livreurs au tableau de bord, montant à encaisser en livraison, écart en réconciliation) sont numériquement cohérents entre les 3 écrans concernés.

C'est le dernier des 8 templates génériques planifiés — l'initiative "templates génériques" est maintenant complète.
