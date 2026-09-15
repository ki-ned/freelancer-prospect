# Audit commercial — Brandon Service Location

- **Fichier à envoyer** : [brandon-service-location-audit-commercial.pdf](brandon-service-location-audit-commercial.pdf) (6 pages A4)
- **Source éditable** : [audit-commercial-source.html](audit-commercial-source.html) — reprend la charte de la maquette (`../../prospects/brandon-service-location/`)
- **Captures utilisées** : [assets/](assets/) (aperçus desktop/mobile de la maquette, section 7 du document)

## Régénérer le PDF après une modification

```bash
agent-browser open "file:///$(pwd)/docs-marketing/brandon-service-location/audit-commercial-source.html"
agent-browser pdf "docs-marketing/brandon-service-location/brandon-service-location-audit-commercial.pdf"
agent-browser close
```

Si la maquette change visuellement, régénérer d'abord les captures (`assets/preview-desktop.png`, `assets/preview-mobile.png`) avant de relancer l'export.
