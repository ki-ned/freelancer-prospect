# Integrations

**Statut : complété (interview du 2026-09-19).** Ce repo est un site statique (pas d'app backend) — les intégrations pertinentes sont les outils/CDN chargés par les pages, et les outils utilisés pour construire/vérifier le contenu.

## Ce qui est réellement intégré aujourd'hui

| Outil / service | Usage | Où |
| --- | --- | --- |
| Google Fonts (CDN) | Polices de chaque mockup (Bricolage Grotesque/Karla, Archivo/IBM Plex…) | `<link>` dans le `<head>` de chaque `index.html` |
| GitHub Pages | Hébergement public prévu des mockups et de la galerie | Racine de `main`, voir `.nojekyll` — **activation pas encore confirmée, voir "Prochaine étape" ci-dessous** |
| WhatsApp deep links (`wa.me/...`) | Boutons de réservation/contact direct sur les mockups | ex. `prospects/brandon-service-location/index.html` |
| `agent-browser` (vercel-labs) | QA responsive (desktop/tablette/mobile), captures d'écran pour les PDF | Utilisé en local pendant la construction, pas embarqué dans le site |
| `puppeteer-core` + Chrome local | Rendu PDF fidèle (marges correctes) | `scripts/render-pdf.js` |
| Claude Artifacts (claude.ai) | Partage rapide d'une maquette avant/en parallèle de sa publication GitHub Pages | Historique : Healthy Baobab et Brandon ont d'abord existé comme artefacts |

## Prochaine étape technique

GitHub Pages n'est pas encore activé (dépôt distant créé le 2026-09-19, aucun push depuis une session Claude à ce jour). Reste à faire : pousser le repo sur `main` et activer Pages (source : racine de `main`). Voir `current_state.md` pour le suivi à jour de cette étape.

## Décisions prises (interview du 2026-09-19)

- **Backend pour les prototypes "gestion"** : aucun. Les prototypes famille B restent 100% statiques, données fictives codées en dur dans le HTML/JS — cohérent avec le "Hors scope" de `docs/feature-backlog.md` (pas d'authentification, pas de persistance réelle). Pas de choix de backend (Supabase ou autre) documenté tant qu'aucun prospect n'a signé pour aller au-delà de la démo — à retrancher le jour où ce cas se présente réellement.
- **Nom de domaine personnalisé** : non retenu. Le domaine `github.io` par défaut suffit pour envoyer un lien de démo à un prospect ; pas de coût/complexité supplémentaire pour l'instant.
- **Autres intégrations** : rien à ajouter au-delà de la liste ci-dessus — pas d'icônes/analytics/CDN supplémentaires prévus à ce stade.
