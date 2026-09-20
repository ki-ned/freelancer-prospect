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

**Statut : Phase 0 (infrastructure) terminée le 2026-09-19.** Voir `docs/feature-backlog.md` pour le détail des contextes et le phasage (Phase 0 → Phase 3).

- `templates/index.html` créé : galerie des 8 contextes prévus, tous marqués "à venir" pour l'instant (aucun lien tant que le template n'est pas construit).
- `index.html` racine refondu avec une identité propre ("Kongo Nancy Emmanuel", Fraunces/Work Sans, ink `#1c1f2e`/paper `#f6f3ec`/accent teal `#2f6f62`) — corrige le fait qu'elle recyclait auparavant la palette exacte de Brandon Service Location. Section "Templates génériques" ajoutée, qui pointe vers `templates/index.html`.
- QA responsive faite via `agent-browser` (1440/834/390px) sur les deux pages : rien à signaler.
- **Phase 1, premier pilote livré (2026-09-20)** : `templates/restaurant-vitrine/` — vitrine "Chez Tantine" (cuisine congolaise traditionnelle revisitée), identité terracotta/or dédiée (encre `#241a15`, crème `#f7ecda`, brique `#b8492b`, or `#d1962f`, typo Unbounded/Manrope), 5 sections (hero, carte, ambiance, horaires/localisation, contact WhatsApp), mode clair/sombre. Carte mise à jour dans `templates/index.html`. QA `agent-browser` faite (1440/834/390px, clair et sombre) — un bug réel trouvé et corrigé : le panneau de contact réutilisait `--ink`/`--paper` (tokens réactifs au thème) au lieu de tokens fixes, rendant les libellés "GÉRANTE"/"ZONE" illisibles en mode sombre ; corrigé avec des tokens `--panel-ink`/`--panel-paper` dédiés, même pattern que Brandon Service Location.
- **Phase 1, second pilote livré (2026-09-20)** : `templates/gestion-caisse/` — premier prototype multi-écrans (famille B) du repo, "Épicerie du Coin" fictive. 3 pages liées (`index.html` caisse, `historique.html`, `resume.html`) avec sidebar de navigation commune, identité "outil" dédiée (encre gris-bleu `#171b23`, accent bleu `#2f5fd6`, typo Space Grotesk/Inter). Écran caisse interactif en JS pur (panier cliquable, calcul du total en direct, confirmation de vente simulée par mode de paiement — espèces/carte/Mobile Money) ; ancrage rapide via `research` sur de vrais dashboards POS avant construction (voir `docs/research/2026-09-20-pos-dashboard-ui-conventions.md`, clé : le Mobile Money est un standard de facto en Afrique francophone). QA `agent-browser` complète (clic-à-clic sur le panier et le paiement, 1440/834/390px, clair/sombre) — deux bugs trouvés et corrigés : (1) le panneau "Répartition par mode de paiement" avait un sélecteur CSS groupé qui rendait les libellés invisibles (texte et fond de même couleur), (2) la sidebar débordait sans indice de scroll sur mobile — passée en barre d'onglets icône+libellé empilés sous 720px. Modèle de données documenté dans `docs/data-dictionary.md`.
- **Phase 2, premier pilote livré (2026-09-20)** : `templates/gestion-ecole/` — "École La Réussite" (école primaire privée fictive, Congo). 3 écrans (`index.html` tableau de bord, `eleves.html`, `fiche-eleve.html`), identité bordeaux/or dédiée (encre `#2a1420`, accent `#8c2f4b`, or `#c9a227`, typo Lora/Nunito Sans). Ancrage via `research` (voir `docs/research/2026-09-20-school-management-ui-conventions.md` — clé : année scolaire en 3 trimestres Oct–Juil, statut de paiement visible dès la liste). QA `agent-browser` faite (1440/390px, clair/sombre), aucun bug trouvé cette fois (le réflexe de vérifier les sélecteurs CSS groupés après le bug de gestion-caisse a payé). Modèle de données dans `docs/data-dictionary.md`.
- Prochaine étape : reste de la Phase 2 (`gestion-auberge`, `gestion-comptable`, `gestion-restaurant`, `agence-livraison`), au fil des sessions, sans rythme fixe.

Skills installés pour cette initiative : `prototype` (emilkowalski), `research` (mattpocock). Le dossier `templates/` contient encore `proposal-template.html` (squelette hérité pour les prospects réels, pré-initiative — sans rapport avec la galerie `templates/index.html`).

## Infrastructure

- **Git local** : historique complet depuis la création du repo (voir `git log`).
- **GitHub** : le dépôt distant (`ki-ned/freelancer-prospect`, public) est créé et **`main` local est synchronisé avec `origin/main`**. **GitHub Pages activé et confirmé en ligne** (2026-09-19) : `https://ki-ned.github.io/freelancer-prospect/` sert la galerie racine (Healthy Baobab + Brandon Service Location). `gh` CLI installé par l'utilisateur mais pas encore détecté dans le PATH de cette session — à revérifier une prochaine fois après redémarrage du terminal.
- **PDF** : `scripts/render-pdf.js` (puppeteer-core) est la méthode correcte — ne pas utiliser `agent-browser pdf` (bug de marges, voir CLAUDE.md).

## Prochaines étapes

1. Confirmer l'URL du dépôt GitHub et l'état de GitHub Pages.
2. Phase 0 de l'initiative templates : arborescence `templates/`, galerie, lien depuis `index.html` racine.
3. Phase 1 (pilotes) : `templates/restaurant-vitrine/` + `templates/gestion-caisse/`.
4. Récupérer les infos de prospection pour Restaurant 4 Saisons auprès d'Emmanuel avant de le construire.
