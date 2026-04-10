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

## Pre-commit Checklist
- **CRITICAL:** Before finalizing a commit, YOU MUST verify that all pre-commit hooks (e.g., linting, testing, formatting) have passed successfully.
- If pre-commit checks fail:
    1. Try running `git commit` a second time to see if the hooks pass.
    2. If they still fail, diagnose and address the root cause (e.g., fix linting errors, fix test regressions).
    3. If the failure is a known false positive or cannot be resolved, only then run `git commit --no-verify`.

## When to use me
Use this skill whenever you need to commit changes to git. This ensures that the commit history is informative and that the commit command does not fail due to shell interpolation of special characters.
