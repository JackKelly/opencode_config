---
name: finalization
description: Finalization steps including updating README, docs, comments, and ADRs.
---
# Finalization Workflow

## What I do
- Call the `architect` to:
  - update `README.md`
  - update docs
  - update code comments
  - update or create a new ADR. Load the `adr-generation` skill to see the instructions for creating ADRs. If an existing relevant ADR already exists then prefer updating that ADR instead of creating a new one.
- Use the `bash` tool to commit all changes to git with a verbose and formatted message.

## When to use me
Use this at the very end of a task, after all code changes have been reviewed and approved, to ensure documentation and git history are properly updated.
