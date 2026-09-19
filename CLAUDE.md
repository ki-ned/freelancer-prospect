# CLAUDE.md

Instructions for Claude Code working in this repo. See `current_state.md` for what's actually built right now, and `docs/feature-backlog.md` for what's planned.

## What this repo is

Emmanuel Kongo's freelance business repo: two things live here side by side.

1. **`prospects/`** — real, named prospecting leads (e.g. Healthy Baobab, Brandon Service Location). Each gets a single-page mockup site and a matching commercial-audit PDF, used as sales collateral sent directly to a real decision-maker.
2. **`templates/`** — generic, reusable demo mockups (restaurant showcase, school/hotel/accounting/POS/delivery-dispatch dashboards, a Noki-Service-inspired ops platform). Not tied to a specific lead — built once, shown to whichever prospect fits that industry.

Published as static pages via GitHub Pages (root of `main`, see `.nojekyll`).

## Hard rules

- **Never invent a prospect's contact info** (email, phone, decision-maker name). If a fact isn't verified, don't put it on a real prospect's page or PDF. This does not apply to `templates/`, where all data is intentionally fictional.
- Every mockup and audit PDF ends with a disclaimer footer: real prospects get "Ceci est une maquette conceptuelle réalisée par Emmanuel Kongo à titre de proposition commerciale pour [Client] — pas un site en production." Generic templates use demo language instead (no named client, no "proposition commerciale pour X" phrasing).
- Don't reuse one prospect's/template's exact color theme and fonts for another — each gets a distinctive, subject-grounded identity (see `docs/brand-brief.md` once filled).
- No AI-writing tells in copy: no em-dash-as-universal-connector, no "not just X, Y" contrast padding, no word repeated 3+ times on one page. Run a `humanizer`-style pass before shipping any prospect-facing text.
- Ask before `git push` to the GitHub remote — it's a real, visible action once Pages is live.

## Build pipeline

**Group A — public marketing pages** (single scrolling page: hero, offer, contact):
`brainstorming` (scope/voice) → `frontend-design` + `impeccable` + `emil-design-eng` (design, then a polish pass) → `agent-browser` (screenshot desktop 1440px / tablet 834px / mobile 390px, check for layout clashes before calling it done).

**Group B — management/dashboard prototypes** (3-4 linked screens: dashboard, list, detail):
`brainstorming` (scope which screens actually earn a place — don't build a full app) → `research` (quick grounding in how real vertical-SaaS dashboards in that industry are structured) → `prototype` (emilkowalski skill, for the clickable multi-screen feel) → `frontend-design` + `impeccable` + `emil-design-eng` → `agent-browser` QA.

## Known gotchas (don't rediscover these)

- **PDF export**: use `scripts/render-pdf.js` (puppeteer-core + `preferCSSPageSize: true`, zero margins). Do **not** use `agent-browser pdf` for a print-CSS document — it doesn't set `preferCSSPageSize`, so Chrome applies its own default margins on top of any `@page { margin: 0 }` rule, leaving unwanted white borders. Run `cd scripts && npm install` once per fresh clone (node_modules is gitignored).
- **CSS grid item collapsing to 0×0**: a grid item with `aspect-ratio` + `margin: auto` (or otherwise non-stretch alignment) and only `position: absolute` children can collapse to zero size, since absolutely-positioned children don't contribute to intrinsic content size. Give it an explicit `width` instead. (Bit us once on a circular "fruit wheel" hero graphic — always verify circular/absolutely-positioned decorative layouts in a real browser, not just by reading the CSS.)
- A theme-reactive CSS variable used for a component meant to stay visually fixed across light/dark (e.g. a permanently-dark contact panel) needs its own non-flipping token — reusing a token that flips with the theme can silently produce invisible (same-color-as-background) text in one of the two modes.

## Git conventions

- Create new commits, don't amend, unless explicitly asked.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` (per this session's attribution instructions — check the live instructions in-session, they take precedence over this note if they differ).
