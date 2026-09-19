# État actuel du projet

Dernière mise à jour : 2026-09-19. Ce fichier reflète l'état réel — pas le plan. Voir `docs/feature-backlog.md` pour ce qui est prévu.

## Prospects réels (`prospects/`)

| Prospect | Score | Statut mockup | Statut PDF audit | Statut envoi |
| --- | --- | --- | --- | --- |
| Healthy Baobab (Pointe-Noire, smoothies) | 65/100 | ✅ Fait, mode clair/sombre, animé | ✅ `docs-marketing/healthy-baobab/` | Message LinkedIn rédigé, **pas encore envoyé** |
| Brandon Service Location (Brazzaville, location véhicules) | 76/100 | ✅ Fait, mode clair/sombre | ✅ `docs-marketing/brandon-service-location/` | Message WhatsApp rédigé, **pas encore envoyé** |
| Apendy Express (Brazzaville, livraison gaz) | 68/100, non qualifié | ❌ Aucun contact vérifié — pas d'approche possible | — | — |
| Restaurant 4 Saisons | Prospect réel confirmé | ❌ Pas encore commencé | ❌ | En attente des infos de prospection (contact, décideur) auprès d'Emmanuel |

Les deux mockups existants ont été audités (bug de layout `.fruit-wheel` corrigé, texte "humanisé" contre les tics d'écriture IA, revue responsive desktop/tablette/mobile via `agent-browser`).

## Initiative "templates génériques" (`templates/`)

**Statut : planifiée, pas encore commencée.** Voir `docs/feature-backlog.md` pour le détail des 9 contextes et le phasage (Phase 0 → Phase 3).

Skills installés pour cette initiative : `prototype` (emilkowalski), `research` (mattpocock). Le dossier `templates/` ne contient encore que `proposal-template.html` (squelette hérité, pré-initiative).

## Infrastructure

- **Git local** : historique complet depuis la création du repo (voir `git log`).
- **GitHub** : le dépôt distant (`ki-ned/freelancer-prospect`, public) est créé et **`main` local est synchronisé avec `origin/main`**. **GitHub Pages activé et confirmé en ligne** (2026-09-19) : `https://ki-ned.github.io/freelancer-prospect/` sert la galerie racine (Healthy Baobab + Brandon Service Location). `gh` CLI installé par l'utilisateur mais pas encore détecté dans le PATH de cette session — à revérifier une prochaine fois après redémarrage du terminal.
- **PDF** : `scripts/render-pdf.js` (puppeteer-core) est la méthode correcte — ne pas utiliser `agent-browser pdf` (bug de marges, voir CLAUDE.md).

## Prochaines étapes

1. Confirmer l'URL du dépôt GitHub et l'état de GitHub Pages.
2. Phase 0 de l'initiative templates : arborescence `templates/`, galerie, lien depuis `index.html` racine.
3. Phase 1 (pilotes) : `templates/restaurant-vitrine/` + `templates/gestion-caisse/`.
4. Récupérer les infos de prospection pour Restaurant 4 Saisons auprès d'Emmanuel avant de le construire.
