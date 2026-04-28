---
name: agentic-inbox
description: 'Self-hosted email client with an AI agent, running entirely on Cloudflare Workers. Triage, draft, and act on email at the edge.'
repo: https://github.com/adrianwedd/agentic-inbox
install:
  - 'git clone https://github.com/adrianwedd/agentic-inbox && cd agentic-inbox && npm install'
  - 'npm run dev   # local'
  - 'npm run deploy   # CF Workers'
pkg:
  registry: source
  name: agentic-inbox
tags: ['email', 'cloudflare-workers', 'ai-agents', 'self-hosted']
status: experimental
---

Email client that lives entirely at the edge. Runs as Cloudflare Workers — no server to maintain, no inbox sync background job, no client-side state to lose. The AI agent triages incoming mail, drafts responses, and routes to follow-up actions inline.

Self-hosted means: bring your own CF account, your own domain, your own data. The model talks to your inbox, not someone else's.
