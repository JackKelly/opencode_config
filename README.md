# OpenCode ML Forecasting Agents

This repository contains a suite of custom AI agents for [OpenCode](https://github.com/opencode), specifically designed for **production-grade Machine Learning and Time-Series Energy Forecasting** in Python.

Rather than relying on a single general-purpose coding assistant, this configuration splits the software development lifecycle into **seven distinct personas** coordinated by a **Conductor**. This separation of concerns prevents the AI from "marking its own homework" and enforces strict scientific and engineering rigor.

## The Multi-Agent Architecture

The agents are coordinated by a **Conductor** and follow a rigorous review-and-implementation loop.

### 1. 🚦 Conductor (`conductor`)
* **Role:** Primary Router & Orchestrator
* **Focus:** Triage user prompts, route tasks to subagents, manage the implementation loop, and handle all `git` commits. It ensures that every change is reviewed by multiple specialized agents.

### 2. 🏗️ Architect (`architect`)
* **Role:** System Designer & Planner
* **Focus:** Analyzes the codebase and plans architectural changes. Enforces modern Python practices (e.g., `polars` over `pandas`), modularity, and elegance. It creates the blueprint before any code is written.

### 3. ⚙️ Data Engineer (`data_engineer`)
* **Role:** Data Ingestion Specialist
* **Focus:** Builds robust, defensive data ingestion pipelines. Specializes in `Patito` schemas, `Dagster` assets, and API integrations. Assumes all external data is garbage until proven otherwise.

### 4. 💻 Builder (`custom_build`)
* **Role:** Software Engineer
* **Focus:** Executes the Architect's plan. Writes robust, production-ready code that "fails loudly." Enforces strict typing and ensures invalid states are unrepresentable.

### 5. 🔬 Scientist (`scientist`)
* **Role:** ML Auditor & Methodologist
* **Focus:** The domain expert. Rigorously audits ML pipelines for **data leakage** and **lookahead bias**. It verifies that temporal cross-validation is used correctly and ensures physical realism in data.

### 6. 🕵️ Reviewer (`review`)
* **Role:** Code Reviewer
* **Focus:** Inspects new and existing code for dead code, logical flaws, and inefficiencies. It flags functions that are too long and checks for proper exception handling.

### 7. 💥 Tester (`tester`)
* **Role:** Adversarial QA Engineer
* **Focus:** Actively tries to break the code. Writes aggressive unit tests, property-based tests (via `hypothesis`), and runs mutation testing (via `mutmut`).

## Standard Workflows

### Standard Complex Workflow
1. **Plan:** The **Architect** drafts an initial implementation plan (`v0_draft.md`). The **Scientist**, **Tester**, and **Reviewer** review it **sequentially**. If flaws are found, the Architect updates the plan (e.g., `v0.1_after_scientist.md`).
2. **Approve:** The **Conductor** presents the final plan to the user for approval.
3. **Build & Review Loop:** The **Builder** implements the latest plan. The **Scientist**, **Tester**, and **Reviewer** audit the code **sequentially** in three "Stations":
    *   **Station 1 (Math):** Scientist audits for data leakage and ML rigor.
    *   **Station 2 (Robustness):** Tester audits for edge cases and testability.
    *   **Station 3 (Polish):** Reviewer audits for code quality and style.
    If any station finds flaws, the Architect updates the plan (e.g., `v1.1_after_scientist.md`) and the Builder fixes the code before moving to the next station.
4. **Finalize:** The **Architect** updates documentation and ADRs. The **Conductor** commits the changes.

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
```
