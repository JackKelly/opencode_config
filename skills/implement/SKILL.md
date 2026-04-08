---
name: implement
description: Step-by-step implementation workflow using custom_build and git-commit to minimize context bloat.
---
# Step-by-Step Implementation

## What I do
Implement the final plan step by step: 
1. Tell `custom_build` to implement step i.
2. Wait for `custom_build` to finish.
3. Use the `git-commit` skill to commit the code to git with a verbose and formatted message.
4. Repeat for step i+1. Start each new step with a fresh `custom_build` invocation (to minimise
   context bloat).

Wait for completion of all steps.
