---
name: session-handoff
description: Standard procedure for ending a session and creating a handoff document to prevent context bloat.
---
# Session Handoff Procedure

To reduce context bloat, you must end the current session and prepare a handoff document for the next session.

## What I do
1. Write a comprehensive summary to `docs/temp/session_handoff.md` (or a specific filename if requested by the calling skill, e.g., `session_handoff_after_loop_1.md`).
2. **CRITICAL:** Use your `write` tool IMMEDIATELY to create this file. Do not deliberate, do not plan fallback strategies, and **do not delegate this task to any other agent**. You (the Conductor) must write it yourself to capture your current context.
3. The handoff document MUST include:
   - A summary of your overall objectives.
   - Links to relevant planning documents (e.g., `docs/temp/implementation_plan_v1.md`).
   - A description of the current state (what was just completed, what flaws were found, etc.).
   - A clear list of next steps for the new session.
4. **STOP** and output a message to the user instructing them to start a new session. Example: *"I have completed this phase. To prevent context bloat, please start a new chat session and prompt me with: 'Resume workflow from docs/temp/session_handoff.md'."*

## When to use me
Use this skill whenever a major phase is complete (e.g., after planning, after a code review loop) and you need to clear the context window before proceeding to the next phase.
