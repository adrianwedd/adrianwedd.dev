---
name: rlm-mcp
description: 'MCP server implementing the Recursive Language Model pattern. Treats long prompts as environment objects the LLM can query symbolically — bypasses context-window limits.'
repo: https://github.com/adrianwedd/rlm-mcp
install:
  - 'pip install rlm-mcp'
  - 'claude mcp add rlm rlm-mcp'
pkg:
  registry: pypi
  name: rlm-mcp
  url: https://pypi.org/project/rlm-mcp/
tags: ['mcp', 'llm', 'context-windows', 'claude-code']
status: stable
featured: true
---

Recursive Language Model server for Claude Code. Implements the pattern from [Zhang et al. 2025](https://arxiv.org/abs/2512.24601): instead of feeding long prompts directly into the model, treat the prompt as an environment object the LLM can interact with symbolically — load, search, summarise, and operate on documents that wouldn't fit in any single context window.

Concrete: persistent indexes, concurrent session safety, atomic budget enforcement, exact BM25 doc-ids filtering, batch document loading 2–3× faster than naive sequential.

The longform writeup is [Beyond Context Windows](https://adrianwedd.com/blog/beyond-context-windows/).
