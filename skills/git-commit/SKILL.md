---
name: git-commit
description: Guidelines for creating high-quality, shell-safe git commit messages.
---
# Git Commit Workflow

## What I do
- Provide instructions for creating a verbose, bulleted list of every single change made, explaining the *why* and the *how* for each, and connecting the dots across the codebase.
- Ensure the commit message follows this format:
  1. A concise summary of the changes on the first line.
  2. A blank line.
  3. A verbose, bulleted list of every single change made, explaining the *why* and the *how* for each, and connecting the dots across the codebase.
- **CRITICAL:** Ensure the commit message is shell-safe.
  - Always use single quotes (`'`) for the commit message to prevent the shell from interpreting backticks (`` ` ``) as command substitutions.
  - If the message itself contains single quotes, use a HEREDOC instead: `git commit -F - <<'EOF'\n<message>\nEOF`.

## When to use me
Use this skill whenever you need to commit changes to git. This ensures that the commit history is informative and that the commit command does not fail due to shell interpolation of special characters.
