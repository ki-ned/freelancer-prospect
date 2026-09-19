# freelancer-prospect

Maquettes, documents et éléments marketing utilisés pour démarcher des prospects — publiés en pages statiques via GitHub Pages.

Pour travailler sur ce repo (humain ou Claude Code) : lire [CLAUDE.md](CLAUDE.md) (conventions) et [current_state.md](current_state.md) (état réel à jour) avant de commencer.

## Structure

```
freelancer-prospect/
├── CLAUDE.md                   # conventions du repo pour Claude Code
├── current_state.md            # état réel du projet, à jour
├── docs/                       # pilotage du projet (scope, bugs connus…) — voir docs/README.md
├── index.html                  # page galerie (liste des maquettes)
├── prospects/                  # une maquette par prospect réel nommé
│   └── <slug-prospect>/
│       ├── index.html          # la maquette (page HTML autonome)
│       └── README.md           # fiche : secteur, ville, statut, contact
├── templates/                   # maquettes génériques réutilisables (pas liées à un prospect précis)
│   └── proposal-template.html  # squelette de départ pour une nouvelle maquette
├── docs-marketing/              # livrables prospects non-HTML (PDF d'audit, assets…)
│   └── <slug-prospect>/        # ex. audit commercial PDF + sa source HTML éditable
└── scripts/
    └── render-pdf.js           # rendu HTML → PDF sans marges parasites (voir scripts/README.md)
```

## Prospects

Issus d'une étude de plateformes (LinkedIn, Crustdata) : score de qualification, décideur identifié, statut du canal de contact vérifié, et statut d'envoi du message de prospection.

| Prospect | Score | Secteur | Zone | Statut |
| --- | --- | --- | --- | --- |
| [Healthy Baobab](prospects/healthy-baobab/) | 65/100 | Smoothies / baobab | Pointe-Noire | Message LinkedIn prêt, pas envoyé — [audit commercial](docs-marketing/healthy-baobab/healthy-baobab-audit-commercial.pdf) |
| [Brandon Service Location](prospects/brandon-service-location/) | 76/100 | Location véhicules + chauffeur | Brazzaville | Message WhatsApp prêt, pas envoyé — [audit commercial](docs-marketing/brandon-service-location/brandon-service-location-audit-commercial.pdf) |
| Apendy Express (non qualifié) | 68/100 | Livraison de gaz à domicile (300+ abonnés) | Brazzaville | Aucun contact vérifié — pas de maquette ni d'approche possible pour l'instant |

## Ajouter un nouveau prospect

1. `cp templates/proposal-template.html prospects/<slug-prospect>/index.html`
2. Adapter le contenu, la palette et la typographie au secteur du prospect (éviter de recycler un thème déjà utilisé pour un autre client).
3. Créer `prospects/<slug-prospect>/README.md` avec secteur, zone, contact et statut.
4. Ajouter une carte dans [index.html](index.html) (page galerie).

## Publication

GitHub Pages est activé sur la branche `main`, à la racine du repo (voir `.nojekyll` pour désactiver le traitement Jekyll sur les fichiers HTML bruts).
