# scripts

## render-pdf.js

Renders an HTML/CSS document (with `@page` print rules) to a pixel-perfect PDF using an installed Chrome/Chromium via `puppeteer-core` (no bundled browser download).

**Why not a generic browser CLI's `pdf` command:** tools like `agent-browser pdf` call Chrome's print-to-PDF without setting `preferCSSPageSize: true`, so Chrome falls back to its own default page size/margins instead of respecting the page's own `@page { size: A4; margin: 0; }` — the result has unwanted white margins around every page. This script sets `preferCSSPageSize: true` and zero explicit margins, so the `@page` CSS in the document is what actually gets used.

### Usage

```bash
cd scripts
npm install   # once, installs puppeteer-core only (uses your existing Chrome)
node render-pdf.js "../docs-marketing/brandon-service-location/audit-commercial-source.html" "../docs-marketing/brandon-service-location/brandon-service-location-audit-commercial.pdf"
```

Requires a local Chrome or Chromium install. Auto-detects common install paths; set `CHROME_PATH` to override.
