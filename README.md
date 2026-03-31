# OpenCode ML Forecasting Agents

This repository contains a suite of custom AI agents for [OpenCode](https://github.com/opencode), specifically designed for **production-grade Machine Learning and Time-Series Energy Forecasting** in Python.

Rather than relying on a single general-purpose coding assistant, this configuration splits the software development lifecycle into **seven distinct personas** coordinated by a **Conductor**. This separation of concerns prevents the AI from "marking its own homework" and enforces strict scientific and engineering rigor.

## The Multi-Agent Architecture

The agents are coordinated by a **Conductor** and follow a rigorous, sequential review-and-implementation loop.

### 1. 🚦 Conductor (`conductor`)
* **Role:** Primary Router & Orchestrator
* **Focus:** Triage user prompts, route tasks to subagents, manage the implementation loop, and handle all `git` commits. It is a pure orchestrator and does not perform technical tasks (like exploration or testing) itself.

### 2. 🏗️ Architect (`architect`)
* **Role:** System Designer & Planner
* **Focus:** Analyzes the codebase and plans architectural changes. It owns the **Versioned Implementation Plan** and acts as the final technical authority, with the power to formally reject reviewer flaws if they are technically impossible.

### 3. ⚙️ Data Engineer (`data_engineer`)
* **Role:** Data Ingestion Specialist
* **Focus:** Builds robust, defensive data ingestion pipelines. Specializes in `Patito` schemas, `Dagster` assets, and API integrations. Assumes all external data is garbage until proven otherwise.

### 4. 💻 Builder (`custom_build`)
* **Role:** Software Engineer
* **Focus:** Executes the Architect's plan. Writes robust, production-ready code that "fails loudly." It can provide technical pushback to the Architect if a requested change is unimplementable.

### 5. 🔬 Scientist (`scientist`)
* **Role:** ML Auditor & Methodologist
* **Focus:** The domain expert. Rigorously audits ML pipelines for **data leakage** and **lookahead bias**. It ensures the mathematical and scientific foundation of the model is sound.

### 6. 🕵️ Reviewer (`review`)
* **Role:** Code Reviewer
* **Focus:** Inspects code for dead code, logical flaws, and maintainability. It is the final "Station" in the review loop, focusing on polish, style, and engineering best practices.

### 7. 💥 Tester (`tester`)
* **Role:** Adversarial QA Engineer
* **Focus:** Strictly focused on **testability and QA**. It writes adversarial tests and identifies architectural barriers to testing. It is forbidden from providing general code review (style, naming, etc.).

## Standard Workflows

### Standard Complex Workflow
1. **Plan (Plan Batching):** The **Architect** drafts an initial implementation plan (`v0_draft.md`). The **Scientist**, **Tester**, and **Reviewer** review the plan **sequentially**. After each review, the Architect updates the plan (e.g., `v0.1_after_scientist.md`). This ensures each reviewer sees the latest, refined blueprint.
2. **Approve:** The **Conductor** presents the final plan (`v0.3`) to the user for approval.
3. **Build & Review Loop:** The **Builder** implements the latest plan (Step 0). The **Conductor** then moves the code through three distinct **Stations** in strict sequential order:
    *   **Station 1 (Math):** Scientist audits for data leakage and ML rigor.
    *   **Station 2 (Robustness):** Tester audits for edge cases and testability.
    *   **Station 3 (Polish):** Reviewer audits for code quality and style.
    
    **Crucially:** Station N+1 never starts until Station N is completely resolved. If a station finds flaws, the Architect updates the plan (e.g., `v1.1_after_scientist.md`) and the Builder fixes the code before the pipeline continues to the next station.
    
    **Retroactive Veto:** At the end of each loop, the Conductor summarizes all changes and stops for human approval. You can choose to revert or modify any decisions before the next loop starts.
4. **Finalize:** The **Architect** updates documentation, ADRs, and code comments. The **Conductor** commits the changes.

### Data Ingestion Workflow
1. **Explore:** The **Data Engineer** profiles the new dataset in `exploration_scripts/`.
2. **Contract:** The **Architect** and **Scientist** define a strict `Patito` data contract and review it for physical realism.
3. **Implement:** The **Data Engineer** builds the ingestion pipeline and adds it to **Dagster**.
4. **Validate:** The **Tester** writes property-based tests, and the **Scientist** audits the actual ingested data.

## Installation

To use these agents across all your local projects, clone this repository and symlink it to your OpenCode config directory:

```bash
# Clone the repository
git clone https://github.com/JackKelly/opencode_config.git ~/dev/opencode_config
# Remove default config if it exists
rm -rf ~/.config/opencode/agents
# Symlink the custom agents
mkdir -p ~/.config/opencode
ln -s ~/dev/opencode_config/agents ~/.config/opencode/agents
ln -s ~/dev/opencode_config/commands ~/.config/opencode/commands
ln -s ~/dev/opencode_config/opencode.json ~/.config/opencode/opencode.json
```
