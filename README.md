# adrianwedd.dev

Tools index. Installable artefacts only — MCP servers, CLIs, libraries that strangers can `pip install`, `git clone`, or wire into Claude Code.

## What lives here

- One card per tool on `/`. Name, description, install command(s), links to GitHub / PyPI / docs.
- Per-tool page at `/<slug>/` only when the tool has notes worth a paragraph or two beyond the README.
- `/feed.json` — machine-readable JSON Feed of every tool, for piping into other surfaces.

## What does NOT live here

- Blog posts (those are on [adrianwedd.com](https://adrianwedd.com)).
- AI-safety research / Failure-First papers (those are on [failurefirst.org](https://failurefirst.org)).
- SPARK / family / companion-AI work (that's on [spark.wedd.au](https://spark.wedd.au)).
- Enterprise / Orchestrix positioning (that's on [wedd.xyz](https://wedd.xyz)).
- Analytics, consent banners, search, audio players, gallery infrastructure. Devs hate that.

## Curation rule

If a tool isn't installable by a stranger, it doesn't appear here. Repos that need bespoke setup, hand-tuning, or a private dependency are out.

## Adding a tool

Drop a markdown file at `src/content/tools/<slug>.md` with the schema in `src/content.config.ts`:

```yaml
---
name: my-tool
description: 'One sentence, ≤200 chars.'
repo: https://github.com/adrianwedd/my-tool
install:
  - 'pip install my-tool'
pkg:
  registry: pypi   # or npm, mcp, binary, source
  name: my-tool
  url: https://pypi.org/project/my-tool/
tags: ['cli', 'whatever']
status: stable     # or beta, experimental, archived
featured: false
---

Optional markdown body. If empty, no per-tool page is rendered — the
home grid is the canonical surface for the tool.
```

## Stack

Astro 6 + Tailwind 4. Same shape as adrianwedd.com without the islands, content collections beyond `tools`, Pagefind, GA, or consent banner. Static HTML, deployed to GitHub Pages via Actions, custom domain `adrianwedd.dev`.

## Sunset clause

If the tool count drops below 8 active entries, or last-updated dates rot across the board for >6 months, retire by 301-redirecting to [adrianwedd.com/projects/?type=tool](https://adrianwedd.com/projects/?type=tool). Don't keep a stale index alive — broken install commands hurt trust more than a missing hub helps it.

## Local development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output to dist/
npm run check    # astro type-check
```
