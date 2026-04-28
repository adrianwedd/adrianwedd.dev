---
name: afterglow-engine
description: 'Offline tool that mines past audio work for new textures. Re-synthesises the residue of finished projects into raw material for the next one.'
repo: https://github.com/adrianwedd/afterglow-engine
install:
  - 'git clone https://github.com/adrianwedd/afterglow-engine && cd afterglow-engine'
  - 'python -m venv venv && source venv/bin/activate && pip install -r requirements.txt'
pkg:
  registry: source
  name: afterglow-engine
tags: ['audio', 'creative', 'cli', 'offline']
status: experimental
---

Point it at a directory of past audio work — stems, masters, project residues. It finds the textures, recombines them into new raw material, hands you back something you can drop into the next project. Offline. No cloud. No subscription.

A studio compost pile, basically.
