---
name: code-review-loop
description: Strict sequential code review and iteration loop involving Scientist, Tester, and Reviewer.
---
# Code Review & Iteration Loop (Max 5 loops)

## What I do
You must execute these stations in strict sequential order. **DO NOT start Station N+1 until Station N is completely resolved and the code has been fixed by the Builder.**

You operate in one of two modes (controlled by the user):
- Mode 1 (default): During the "fresh audit" phase, if a reviewer reports any flaws, then pause after the review to get the user's approval. Do NOT pass the review to the architect until the user has approved the review.
- Mode 2: During the "fresh audit" phase, don't wait for the user's review. Move directly onto implementation.

**Start Loop {Loop} (starting at Loop=1):**

1. **Station 1 (Math & ML Rigor):** 
   - **Phase 1 (Verification - Only if Loop > 1):**
     - Call `scientist` and provide `docs/temp/scientist_code_review_{Loop-1}.md`.
     - Ask: "Verification Mode: Did the Builder successfully fix the specific flaws you identified in Loop {Loop-1}? Check the `## Review Responses & Rejections` section of the latest plan to see if the Architect formally rejected any of them. If any flaws remain unfixed and unrejected, output a new review re-raising them. If all are resolved, output `total_flaws: 0`. You are STRICTLY FORBIDDEN from finding or reporting new issues during this phase."
      - If `total_flaws > 0`: Call `architect` using the `task` tool to update the plan, then use the `skill` tool to load the `implement` skill and follow its instructions to fix. Repeat Phase 1 until resolved.
   - **Phase 2 (Fresh Audit):**
     - Call `scientist` to perform a completely fresh, independent audit. **DO NOT provide previous review files.**
     - Ask: "Perform a fresh audit. Output your review to `docs/temp/scientist_code_review_{Loop}.md`."
     - Read the YAML frontmatter. If `total_flaws == 0`, proceed immediately to Station 2.
     - If `total_flaws > 0`: 
       - If in "Mode 1", pause to get the user's approval of the review.
       - Call `architect` using the `task` tool to update the plan to `docs/temp/implementation_plan_v{Loop}.1_after_scientist.md`.
        - Call `custom_build` to fix the code. Wait for completion, then use the `skill` tool to load the `implement` skill and follow its instructions to commit to git with a verbose and formatted message.
       - *Do not proceed to Station 2 until the Builder is finished.*
2. **Station 2 (Simplicity & Elegance):**
   - **Phase 1 (Verification - Only if Loop > 1):**
     - Call `review` and provide `docs/temp/simplicity_review_{Loop-1}.md`.
     - Ask: "Verification Mode: Did the Builder successfully simplify the code as requested in Loop {Loop-1}? Check the `## Review Responses & Rejections` section of the latest plan to see if the Architect formally rejected any of them. If any complexity remains unfixed and unrejected, output a new review re-raising it. If all are resolved, output `total_flaws: 0`. You are STRICTLY FORBIDDEN from finding or reporting new issues during this phase."
      - If `total_flaws > 0`: Call `architect` using the `task` tool to update the plan, then use the `skill` tool to load the `implement` skill and follow its instructions to fix. Repeat Phase 1 until resolved.
   - **Phase 2 (Fresh Audit):**
     - Call `review` to perform a ruthless simplicity audit. **DO NOT provide previous review files.**
     - Ask: "Ruthlessly check for simplicity. Is this the simplest approach? Can we remove any steps? Can we make the code more elegant? Can we reduce the number of lines of code (without making the code unreadable)? Output your review to `docs/temp/simplicity_review_{Loop}.md`."
     - Read the YAML frontmatter. If `total_flaws == 0`, proceed immediately to Station 3.
     - If `total_flaws > 0`:
       - If in "Mode 1", pause to get the user's approval of the review.
       - Call `architect` using the `task` tool to update the plan to `docs/temp/implementation_plan_v{Loop}.2_after_simplicity.md`.
        - Call `custom_build` to fix the code. Wait for completion, then use the `skill` tool to load the `implement` skill and follow its instructions to commit to git with a verbose and formatted message.
       - *Do not proceed to Station 3 until the Builder is finished.*
3. **Station 3 (Robustness & Testing):**
   - **Phase 1 (Verification - Only if Loop > 1):**
     - Call `tester` and provide `docs/temp/tester_code_review_{Loop-1}.md`.
     - Ask: "Verification Mode: Did the Builder successfully fix the specific flaws you identified in Loop {Loop-1}? Check the `## Review Responses & Rejections` section of the latest plan to see if the Architect formally rejected any of them. If any flaws remain unfixed and unrejected, output a new review re-raising them. If all are resolved, output `total_flaws: 0`. You are STRICTLY FORBIDDEN from finding or reporting new issues during this phase."
      - If `total_flaws > 0`: Call `architect` using the `task` tool to update the plan, then use the `skill` tool to load the `implement` skill and follow its instructions to fix. Repeat Phase 1 until resolved.
   - **Phase 2 (Fresh Audit):**
     - Call `tester` to perform a completely fresh, independent audit. **DO NOT provide previous review files.**
     - Ask: "Perform a fresh audit. Output your review to `docs/temp/tester_code_review_{Loop}.md`."
     - Read the YAML frontmatter. If `total_flaws == 0`, proceed immediately to Station 4.
     - If `total_flaws > 0`:
       - If in "Mode 1", pause to get the user's approval of the review.
       - Call `architect` using the `task` tool to update the plan to `docs/temp/implementation_plan_v{Loop}.3_after_tester.md`.
        - Call `custom_build` to fix the code. Wait for completion, then use the `skill` tool to load the `implement` skill and follow its instructions to commit to git with a verbose and formatted message.
       - *Do not proceed to Station 4 until the Builder is finished.*
4. **Station 4 (Polish & Style):**
   - **Phase 1 (Verification - Only if Loop > 1):**
     - Call `review` and provide `docs/temp/reviewer_code_review_{Loop-1}.md`.
     - Ask: "Verification Mode: Did the Builder successfully fix the specific flaws you identified in Loop {Loop-1}? Check the `## Review Responses & Rejections` section of the latest plan to see if the Architect formally rejected any of them. If any flaws remain unfixed and unrejected, output a new review re-raising them. If all are resolved, output `total_flaws: 0`. You are STRICTLY FORBIDDEN from finding or reporting new issues during this phase."
      - If `total_flaws > 0`: Call `architect` using the `task` tool to update the plan, then use the `skill` tool to load the `implement` skill and follow its instructions to fix. Repeat Phase 1 until resolved.
   - **Phase 2 (Fresh Audit):**
     - Call `review` to perform a completely fresh, independent audit. **DO NOT provide previous review files.**
     - Ask: "Perform a fresh audit. Output your review to `docs/temp/reviewer_code_review_{Loop}.md`."
     - Read the YAML frontmatter. If `total_flaws == 0`, proceed to Loop Check.
     - If `total_flaws > 0`:
       - If in "Mode 1", pause to get the user's approval of the review.
       - Call `architect` using the `task` tool to update the plan to `docs/temp/implementation_plan_v{Loop}.4_after_reviewer.md`.
        - Call `custom_build` to fix the code. Wait for completion, then use the `skill` tool to load the `implement` skill and follow its instructions to commit to git with a verbose and formatted message.
       - *Do not proceed to Loop Check until the Builder is finished.*
5. **Loop Check & Human Veto:** 
   - Summarize all changes made during this loop (Stations 1, 2, 3, and 4).
   - **STOP** and ask the user: "Here are the changes made in Loop {Loop}. Would you like to revert or modify any of these decisions before we proceed?"
    - If the user says "Yes": Pass the user's feedback to the `architect` using the `task` tool to update the implementation plan, then use the `skill` tool to load the `implement` skill and follow its instructions to implement the human's corrections.
   - If the user says "No" (or after human corrections are built):
     - If *any* station found flaws in this loop, increment the `{Loop}` counter.
       - **Handoff Phase:** Use the `skill` tool to load the `session-handoff` skill. Follow its instructions to create `docs/temp/session_handoff_after_loop_{loop-1}.md` and instruct the user to start a new chat session to begin Loop {Loop}.
     - If `total_flaws == 0` across ALL four stations in this loop, break the loop.
       - **Handoff Phase:** Use the `skill` tool to load the `session-handoff` skill. Follow its instructions to create `docs/temp/session_handoff.md` and instruct the user to start a new chat session to begin finalization.

**Builder Pushback:** At any point, if `custom_build` reports that a flaw is impossible to implement, call `architect` using the `task` tool to update the plan and reject the flaw with a technical justification (e.g., `docs/temp/implementation_plan_v{Loop}.X_after_builder_pushback.md`), then resume the current Station.

## When to use me
Use this when you have finished implementing a feature or fix and need to ensure it meets the project's scientific, robustness, and style standards. This skill manages the multi-station review process.
