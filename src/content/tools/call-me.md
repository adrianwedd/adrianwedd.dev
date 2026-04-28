---
name: call-me
description: 'Claude Code plugin that lets the agent call you on the phone. Twilio or Telnyx backend, minimal config.'
repo: https://github.com/adrianwedd/call-me
install:
  - 'claude plugin install adrianwedd/call-me'
pkg:
  registry: mcp
  name: call-me
tags: ['claude-code', 'telephony', 'agents', 'plugin']
status: experimental
---

When a long-running Claude Code task finishes, fails, or hits a question only you can answer — the agent calls you. Twilio and Telnyx are both supported backends; webhook security included. Two minutes of env config and the loop is closed.

Useful pattern: pair with overnight runs of expensive jobs you don't want to babysit. The phone is the one channel that still cuts through.
