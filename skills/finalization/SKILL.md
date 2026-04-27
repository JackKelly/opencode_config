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
  - update existing ADRs if relevant. Do NOT automatically create a new ADR. Only consider creating a new ADR for a large architectural decision, and even then, you MUST ask the user for permission before proceeding. If permission is granted, load the `adr-generation` skill.
- Use the `skill` tool to load the `git-commit` skill and follow its instructions to commit all changes to git with a verbose and formatted message.

## When to use me
Use this at the very end of a task, after all code changes have been reviewed and approved, to ensure documentation and git history are properly updated.
