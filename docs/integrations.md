# Integrations

**Note avant l'interview de `help.txt` (Round 4) :** ce round suppose un stack Supabase + Vercel + paiements/email/SMS — ça ne correspond pas à ce repo (site statique, pas d'app backend). Les questions équivalentes pertinentes ici sont plutôt : quels outils/CDN externes sont chargés par les pages, et quels outils sont utilisés pour construire/vérifier le contenu.

## Ce qui est réellement intégré aujourd'hui

| Outil / service | Usage | Où |
| --- | --- | --- |
| Google Fonts (CDN) | Polices de chaque mockup (Bricolage Grotesque/Karla, Archivo/IBM Plex…) | `<link>` dans le `<head>` de chaque `index.html` |
| GitHub Pages | Hébergement public des mockups et de la galerie | Racine de `main`, voir `.nojekyll` |
| WhatsApp deep links (`wa.me/...`) | Boutons de réservation/contact direct sur les mockups | ex. `prospects/brandon-service-location/index.html` |
| `agent-browser` (vercel-labs) | QA responsive (desktop/tablette/mobile), captures d'écran pour les PDF | Utilisé en local pendant la construction, pas embarqué dans le site |
| `puppeteer-core` + Chrome local | Rendu PDF fidèle (marges correctes) | `scripts/render-pdf.js` |
| Claude Artifacts (claude.ai) | Partage rapide d'une maquette avant/en parallèle de sa publication GitHub Pages | Historique : Healthy Baobab et Brandon ont d'abord existé comme artefacts |

## À trancher / compléter

- Pour l'initiative "templates génériques" (famille B, prototypes de gestion) : ces prototypes resteront-ils 100% statiques (données fictives en dur dans le HTML/JS), ou faut-il prévoir un vrai backend léger si un prospect signe et veut aller plus loin que la démo ? Si oui, lequel (Supabase serait raisonnable vu le Round 4 de `help.txt`).
- Nom de domaine personnalisé pour GitHub Pages (vs. le domaine `github.io` par défaut) — pas encore décidé.
