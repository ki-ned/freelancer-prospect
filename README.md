# freelancer-prospect

Maquettes, documents et éléments marketing utilisés pour démarcher des prospects — publiés en pages statiques via GitHub Pages.

## Structure

```
freelancer-prospect/
├── index.html                  # page galerie (liste des maquettes)
├── prospects/                  # une maquette par prospect
│   └── <slug-prospect>/
│       ├── index.html          # la maquette (page HTML autonome)
│       └── README.md           # fiche : secteur, ville, statut, contact
├── templates/
│   └── proposal-template.html  # squelette de départ pour une nouvelle maquette
└── docs-marketing/              # supports non-HTML (PDF, decks, assets de marque…)
```

## Prospects

| Prospect | Secteur | Zone | Statut |
| --- | --- | --- | --- |
| [Healthy Baobab](prospects/healthy-baobab/) | Smoothies / baobab | Pointe-Noire | Proposé |
| [Brandon Service Location](prospects/brandon-service-location/) | Location véhicules + chauffeur | Brazzaville | Proposé |

## Ajouter un nouveau prospect

1. `cp templates/proposal-template.html prospects/<slug-prospect>/index.html`
2. Adapter le contenu, la palette et la typographie au secteur du prospect (éviter de recycler un thème déjà utilisé pour un autre client).
3. Créer `prospects/<slug-prospect>/README.md` avec secteur, zone, contact et statut.
4. Ajouter une carte dans [index.html](index.html) (page galerie).

## Publication

GitHub Pages est activé sur la branche `main`, à la racine du repo (voir `.nojekyll` pour désactiver le traitement Jekyll sur les fichiers HTML bruts).
