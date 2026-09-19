# Journal des erreurs

Modèle vierge, prêt à l'emploi — ajouter une ligne par incident rencontré (bug de rendu, erreur de build, régression). Objectif : ne pas redécouvrir deux fois le même problème (voir aussi la section "Known gotchas" de `CLAUDE.md` pour les cas déjà résolus et documentés).

| Date | Contexte (fichier / template) | Erreur observée | Cause racine | Correctif | Statut |
| --- | --- | --- | --- | --- | --- |
| _exemple_ 2026-09-15 | `prospects/healthy-baobab/index.html` | Les 5 icônes de fruits s'affichaient toutes empilées au même endroit | `.fruit-wheel` avait `margin: auto` + `aspect-ratio` + uniquement des enfants `position: absolute` → largeur calculée à 0 | Largeur explicite (`width: 100%`) au lieu de `margin: auto` | ✅ Corrigé, documenté dans `CLAUDE.md` |

<!-- Ajouter les nouvelles lignes au-dessus de cette ligne, les plus récentes en haut. -->
