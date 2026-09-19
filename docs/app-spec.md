# App spec

**Statut : complété (interview du 2026-09-19).**

## Ce que c'est

Ce repo n'est pas une "app" au sens SaaS classique : c'est l'**outil de prospection commerciale** d'Emmanuel Kongo (développeur freelance, Congo-Brazzaville), qui produit deux types de livrables statiques, publiés via GitHub Pages :

1. des maquettes + audits PDF pour des **prospects réels nommés** (`prospects/`) — famille A (page unique)
2. des **maquettes génériques réutilisables** par secteur (`templates/`), pour démontrer une capacité avant même d'avoir un prospect précis — familles A (vitrines) et B (prototypes de gestion multi-écrans)

Cible : PME locales en République du Congo sans présence web (restaurants, hôtels/auberges, écoles, cabinets comptables, commerces, agences de livraison) — voir la mémoire `prospecting_pipeline` pour les prospects déjà qualifiés.

## Portée de ce document

Un seul app-spec racine couvre l'ensemble du repo (familles A et B, pipeline prospects réels + templates génériques) — pas d'app-spec séparé par template pour l'instant. Si un futur template devient suffisamment complexe pour le justifier (candidat naturel : `templates/noki-clone/`, le plus ambitieux des 9 contextes avec plusieurs modules interconnectés), un app-spec dédié pourra être créé à ce moment-là.

## Utilisateurs

- **Producteur** : Emmanuel Kongo, seul à écrire/publier le contenu.
- **Lecteur d'une maquette famille A (vitrine)** : le décideur du prospect, qui reçoit un lien (LinkedIn/WhatsApp) vers une page de présentation.
- **Lecteur d'un prototype famille B (gestion)** : le décideur du prospect **en démo uniquement**. Le prototype sert à convaincre de signer, pas à outiller l'usage quotidien d'une équipe — le niveau de réalisme visé est celui d'une démo convaincante (parcours crédible, données fictives cohérentes), pas celui d'un outil de production prêt pour un caissier/secrétaire. Cette distinction cadre le niveau de détail attendu à chaque écran : priorité au réalisme visuel et au parcours, pas à l'ergonomie opérationnelle fine (raccourcis clavier, gestion d'erreurs de saisie, etc.).

## Rythme de livraison

Pas de rythme fixe engagé (ex. "1 template/semaine") — l'avancement se fait au fil des sessions, dans l'ordre de phasage déjà fixé par `docs/feature-backlog.md` (Phase 0 → 1 → 2 → 3). Ce document ne documente pas de deadline.

## Ce qui existe déjà

Voir `current_state.md` pour le statut d'avancement à jour (source de vérité, mise à jour à chaque session) : deux prospects livrés (Healthy Baobab, Brandon Service Location), initiative "templates génériques" démarrée mais pas encore construite.

## Ce qui reste hors scope

Voir `docs/feature-backlog.md` § "Hors scope pour l'instant" (prise de commande réelle, authentification, multilingue) — confirmé sans ajout lors de l'interview du 2026-09-19.
