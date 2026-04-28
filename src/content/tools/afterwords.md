---
name: afterwords
description: 'Local voice-cloning TTS server for Claude Code. Clone any voice from a 15-second clip and run inference on your Mac. No cloud, no subscription.'
repo: https://github.com/adrianwedd/afterwords
homepage: https://adrianwedd.github.io/afterwords/
install:
  - 'git clone https://github.com/adrianwedd/afterwords && cd afterwords && bash setup.sh'
pkg:
  registry: source
  name: afterwords
tags: ['tts', 'voice-cloning', 'mlx', 'claude-code', 'apple-silicon']
status: stable
featured: true
---

Local voice-cloning TTS server. Clone any voice from a 15-second YouTube clip and run inference locally on Apple Silicon. Use as a standalone TTS API, or pair with Claude Code to hear every response spoken aloud.

Ships with 50+ voices across four MLX backends (Qwen3 0.6B / 1.7B, Chatterbox, VoxCPM 1.5). No cloud API. No subscription. No data leaves your machine.

Background reading: [Voice Cloning with Qwen3-TTS and MLX on Apple Silicon](https://adrianwedd.com/blog/voice-cloning-qwen3-tts-mlx/) and [Afterwords: Completing the Voice Loop in Claude Code](https://adrianwedd.com/blog/afterwords/).
