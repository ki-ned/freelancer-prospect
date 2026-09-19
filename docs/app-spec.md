# App spec

**Statut : à compléter via l'interview de `help.txt` (Round 1).** Ce qui suit est un point de départ factuel, pas le document final — l'interview sert justement à clarifier et challenger ces points avec vous.

## Ce qu'on sait déjà

- Ce repo n'est pas une seule "app" au sens SaaS classique : c'est un **outil de prospection commerciale** pour Emmanuel Kongo (développeur freelance, Congo-Brazzaville), qui produit deux types de livrables statiques :
  1. des maquettes + audits PDF pour des **prospects réels nommés** (`prospects/`)
  2. des **maquettes génériques réutilisables** par secteur, pour démontrer une capacité avant même d'avoir un prospect précis (`templates/`)
- Cible : PME locales en République du Congo sans présence web (restaurants, hôtels/auberges, écoles, cabinets comptables, commerces, agences de livraison) — voir `prospecting_pipeline` en mémoire pour les prospects déjà qualifiés.
- Stade actuel : deux prospects livrés (mockup + PDF), l'initiative "templates génériques" vient de démarrer (voir `feature-backlog.md`).

## Questions à trancher pendant l'interview

- Round 1 de `help.txt` suppose "une app" au singulier — à adapter ici : s'agit-il de spécifier CE REPO (l'outil de prospection dans son ensemble) ou UN template précis (ex. le prototype "gestion de caisse") ? Probablement les deux méritent chacun leur propre app-spec courte si le repo grossit.
- Qui est l'utilisateur final de chaque prototype "gestion" (famille B) : le prospect lui-même en démo, ou l'équipe du prospect au quotidien si le projet est signé ? Ça change le niveau de réalisme attendu.
