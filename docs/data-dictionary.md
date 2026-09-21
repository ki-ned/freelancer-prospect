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

**Note QA** : contrairement aux deux pilotes précédents, cet écran n'a pas pu être vérifié visuellement — `agent-browser` était bloqué par une stratégie de contrôle d'application Windows (Smart App Control ou AppLocker/WDAC) sur la machine d'Emmanuel. Relecture statique poussée faite à la place (tokens de thème clair/sombre, classes CSS/HTML, cohérence des montants, points de rupture mobile déjà validés sur les pilotes précédents réappliqués à l'identique) mais pas de capture d'écran réelle. À revérifier visuellement dès que le blocage est levé.

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

#### Autres prototypes (Phase 2/3 — pas encore construits)

Sections à ajouter au moment de la construction de chacun : `gestion-restaurant`, `agence-livraison`, `noki-clone`.
