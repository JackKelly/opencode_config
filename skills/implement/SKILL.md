---
name: implement
description: Step-by-step implementation workflow using custom_build and git-commit to minimize context bloat.
---
# Step-by-Step Implementation

## What I do
Implement the final plan step by step: 
1. Tell `custom_build` to implement step i.
2. Wait for `custom_build` to finish.
3. Pause and notify the user that the step is complete. Ask the user to review the code, make manual tweaks, stage the files (`git add`), and give explicit permission to proceed to the next step.
4. Once the user gives permission, use the `git-commit` skill to commit the code to git with a verbose and formatted message.
5. Repeat for step i+1. Start each new step with a fresh `custom_build` invocation (to minimise
   context bloat).

Wait for completion of all steps.
