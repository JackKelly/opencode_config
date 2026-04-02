---
description: Finalization steps including updating README, docs, comments, and ADRs.
---
# Finalization Workflow

- Call the `architect` to:
  - update `README.md`
  - update docs
  - update code comments
  - update or create a new ADR. See the /adr command for details of how to create ADRs. If an existing relevant ADR already exists then prefer updating that ADR instead of creating a new one.
- Use the `bash` tool to commit all changes to git with a verbose and formatted message.
