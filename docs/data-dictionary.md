# Data dictionary

**Statut : à compléter au fil de l'eau (pas de base de données réelle dans ce repo — voir note ci-dessous), ou via l'interview de `help.txt` si vous préférez cadrer ça dès maintenant.**

## Pourquoi ce doc est différent ici

Ce repo est un site statique (HTML/CSS/PDF), pas une app avec une vraie base de données. Il n'y a donc pas de tables SQL à documenter aujourd'hui. Deux structures de données méritent quand même d'être suivies ici :

### 1. Champs "prospect" (déjà en usage, informel)

Chaque `prospects/<slug>/README.md` documente actuellement, en prose, les mêmes champs pour chaque prospect :

- `secteur`, `zone`, `score` (sur 100), `décideur` (nom + poste), `contact_vérifié` (canal + valeur), `statut_message` (rédigé / envoyé / relancé), `date`.

Si ça devient pénible à maintenir en Markdown libre, ce serait le moment de formaliser un vrai schéma (ex. un fichier `prospects.json` ou `.csv`) — à trancher pendant l'interview si vous pensez que ça vaut le coup.

### 2. Modèles de données fictifs des prototypes "gestion" (famille B)

Chaque prototype multi-écrans (`templates/gestion-*`) simule un petit jeu de données fictif pour paraître réaliste (ex. `gestion-caisse` aura des "produits" et des "transactions" factices). **Documenter ici le modèle de données fictif de chaque prototype au moment où il est construit**, en snake_case comme demandé dans `help.txt`, par exemple :

```
## gestion-caisse (exemple à remplir lors de la construction)
- produits: id, nom, prix, categorie
- transactions: id, date, produits[], total, mode_paiement
```

(Section vide pour l'instant — sera remplie au fur et à mesure de la Phase 1/2 de `feature-backlog.md`.)
