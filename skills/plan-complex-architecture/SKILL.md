---
name: plan-complex-architecture
description: Standard scatter-gather planning workflow for complex changes, ML logic, or significant refactoring.
---
# Standard Complex Workflow

## What I do
1. **Planning Phase (Concurrent Scatter-Gather):**
   - **Step 0 (Draft):** Call the `architect` subagent to draft `docs/temp/implementation_plan_v0_draft.md`. Wait for completion.
   - **Step 1 (Concurrent Review):** Call the `scientist`, `tester`, and `review` subagents **concurrently** (in parallel) to review `v0_draft.md`. Note that you're calling the `review` agent twice in parallel:
     - Scientist outputs `docs/temp/scientist_plan_review_0.md`.
     - Tester outputs `docs/temp/tester_plan_review_0.md`.
     - Reviewer outputs `docs/temp/reviewer_plan_review_0.md`.
     - Simplicity Audit: Call the `review` subagent to perform a ruthless simplicity audit of `docs/temp/implementation_plan_v0_draft.md`.
       - Ask: "Is this the simplest approach? Can we remove any steps? Can we make the design more elegant? Can we reduce the complexity of the proposed implementation?"
       - Reviewer outputs `docs/temp/simplicity_plan_review_0.md`.
     - Wait for all four reviews to complete.
   - **Step 2 (Gather & Merge):** Call the `architect` to read all four reviews (Scientist, Tester, Reviewer, and Simplicity) and synthesize them into `docs/temp/implementation_plan_v1_merged.md`. 
     - Instruct the Architect to explicitly look for conflicting constraints or fundamental shifts (e.g., the Scientist invalidating the core architecture).
     - If the Architect finds major unresolvable conflicts, it must document them in a `## Conflicts` section in the merged plan.
    - Use the `skill` tool to load the `git-commit` skill and follow its instructions to commit the final plans to git.
    - **STOP** and ask the user for approval. Provide a detailed summary of the merged plan. **CRITICAL:** If the Architect flagged any major disagreements or conflicts between the reviewers, explicitly present these to the user for a final decision.
    - After approval (and resolving any conflicts with the user), use the `skill` tool to load the `implement` skill and follow its instructions to implement the final plan.

2. **Handoff Phase:**
   - YOU (the Conductor) must write a comprehensive summary of the current state, the finalized merged plan, and the next steps to `docs/temp/session_handoff.md`. **Do NOT delegate this to the Architect or any other agent; you must write it yourself to capture your current context.**
   - **STOP** and output the following message to the user: *"I have completed the planning and initial implementation phase. To prevent context bloat, please start a new chat session and prompt me with: 'Resume workflow from docs/temp/session_handoff.md to start the code review loop'."*

## When to use me
Use this for complex tasks that require careful planning and multi-disciplinary review (e.g., new ML models, major refactors, or architectural shifts). This skill manages the concurrent review and merging of plans.
