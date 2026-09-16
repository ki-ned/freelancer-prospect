# Audit commercial — Healthy Baobab

- **Fichier à envoyer** : [healthy-baobab-audit-commercial.pdf](healthy-baobab-audit-commercial.pdf) (6 pages A4)
- **Source éditable** : [audit-commercial-source.html](audit-commercial-source.html) — reprend la charte de la maquette (`../../prospects/healthy-baobab/`)
- **Captures utilisées** : [assets/](assets/) (aperçus desktop/mobile de la maquette, section « exemple concret »)

## Régénérer le PDF après une modification

Utiliser `scripts/render-pdf.js` (voir [scripts/README.md](../../scripts/README.md)), pas `agent-browser pdf` : ce dernier n'active pas `preferCSSPageSize`, ce qui ajoute des marges blanches parasites autour de chaque page A4.

```bash
cd scripts && npm install   # une seule fois
node render-pdf.js "../docs-marketing/healthy-baobab/audit-commercial-source.html" "../docs-marketing/healthy-baobab/healthy-baobab-audit-commercial.pdf"
```

Si la maquette change visuellement, régénérer d'abord les captures (`assets/preview-desktop.png`, `assets/preview-mobile.png`) avant de relancer l'export.
