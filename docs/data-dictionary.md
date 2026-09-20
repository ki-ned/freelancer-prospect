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

#### Autres prototypes (Phase 2/3 — pas encore construits)

Sections à ajouter au moment de la construction de chacun : `gestion-ecole`, `gestion-auberge`, `gestion-comptable`, `gestion-restaurant`, `agence-livraison`, `noki-clone`.
