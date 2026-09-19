# Feature backlog

Contenu réel (déjà décidé le 2026-09-19), pas un stub — voir `current_state.md` pour le statut d'avancement à jour.

## V1 — ce qui existe déjà

- Pipeline "prospect réel" : maquette une page (`prospects/<slug>/`) + audit PDF (`docs-marketing/<slug>/`) + fiche README (score, décideur, contact, statut).
- Deux prospects livrés : Healthy Baobab, Brandon Service Location.
- Script de rendu PDF fiable (`scripts/render-pdf.js`).

## En cours — Initiative "templates génériques" (`templates/`)

**Phase 0 — infrastructure**
- Arborescence `templates/` + galerie `templates/index.html`.
- Lien depuis la galerie racine (`index.html`).
- Dépôt GitHub (créé par l'utilisateur le 2026-09-19) + activation de GitHub Pages.

**Phase 1 — pilotes (un par famille, pour roder le pattern)**
- `templates/restaurant-vitrine/` — vitrine publique générique (famille A : page unique).
- `templates/gestion-caisse/` — prototype cliquable multi-écrans (famille B : caisse/encaissement, historique des ventes, résumé de journée).

**Phase 2 — reste de la famille B (prototypes de gestion, 3-4 écrans reliés)**
- `templates/gestion-ecole/`
- `templates/gestion-auberge/`
- `templates/gestion-comptable/`
- `templates/gestion-restaurant/` (back-office : distinct de `restaurant-vitrine`, qui est la page publique)
- `templates/agence-livraison/` (tableau de bord de dispatch, pas une vitrine publique)

**Phase 3 — les plus gros morceaux**
- `prospects/restaurant-4-saisons/` — **prospect réel confirmé**, suit le pipeline "famille A" ci-dessus. Bloqué en attente des infos de prospection (contact, décideur) auprès d'Emmanuel.
- `templates/noki-clone/` — inspiré de [noki-services.com/fr](https://noki-services.com/fr) (plateforme de gestion commandes/paiement-à-la-livraison pour l'e-commerce en Afrique francophone : commandes, stock, dispatch livraison, réconciliation caisse, assistant IA). Inspiration **fonctionnelle uniquement** — pas de clone visuel ni de reprise de la marque. Le plus ambitieux des 9 contextes (plusieurs modules interconnectés).

## Hors scope pour l'instant

- Prise de commande en ligne réelle (paiement, panier persistant) sur les mockups — restent des maquettes statiques, pas des apps fonctionnelles.
- Authentification / comptes utilisateurs sur les prototypes de gestion (famille B) — l'objectif est de démontrer l'expérience visuelle et le parcours, pas de livrer un vrai back-end.
- Localisation multilingue (tout reste en français, marché visé).

## Parking lot (idées non engagées)

- Vitrine publique pour Agence de livraison en plus du tableau de bord de gestion (si ce prospect devient prioritaire).
- Version "démo commentée" (vidéo ou GIF) des prototypes multi-écrans pour l'envoi WhatsApp/LinkedIn, en complément du lien GitHub Pages.
