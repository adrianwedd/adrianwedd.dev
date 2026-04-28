---
name: dodgylegally
description: 'Generate audio sample packs from random YouTube clips. Words become phrases become sources become one-shots. A CLI for chaos-driven sound design.'
repo: https://github.com/adrianwedd/dodgylegally
install:
  - 'git clone https://github.com/adrianwedd/dodgylegally && cd dodgylegally && pip install .'
pkg:
  registry: source
  name: dodgylegally
tags: ['audio', 'cli', 'sample-generation', 'creative-tools']
status: experimental
---

Type a number. The machine picks two words at random — *spinelet digeny*, *goshen duress* — searches YouTube for each absurd phrase, grabs one second of audio from the middle of whatever it finds, hands you back a sample. Do it ten times for a sample pack. A hundred times for an instrument.

CLI tool for generating audio samples from the chaos of YouTube. Searches, downloads, processes, combines; tracks every sample back to its origin.
