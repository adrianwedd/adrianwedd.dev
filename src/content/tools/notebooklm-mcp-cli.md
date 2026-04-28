---
name: notebooklm-mcp-cli
description: 'Unofficial CLI / MCP server for Google NotebookLM. Cookie-authenticated. Drives notebook creation, source addition, and Studio artifact generation programmatically.'
repo: https://github.com/adrianwedd/notebooklm-automation
install:
  - 'pip install notebooklm-mcp-cli'
pkg:
  registry: pypi
  name: notebooklm-mcp-cli
  url: https://pypi.org/project/notebooklm-mcp-cli/
tags: ['notebooklm', 'cli', 'mcp', 'automation']
status: stable
featured: true
---

NotebookLM has no public API or CLI — Google ships it as a consumer web app. This is the unofficial automation layer: cookie-authenticated, reverse-engineered RPCs, exposed as both a standalone CLI (`nlm`) and an MCP server. Drive notebook creation, source ingestion (URLs, text, Drive docs, file uploads), Studio artifact generation (audio, video, infographic, mind-map, quiz, flashcards, report, data-table), and multi-format export (Obsidian, Notion, Anki).

Substrate is fragile by definition — it can break the moment Google ships a frontend change. Read the longform writeup at [The NotebookLM Pipeline](https://adrianwedd.com/blog/the-notebooklm-pipeline/).
