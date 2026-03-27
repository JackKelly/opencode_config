# OpenCode ML Forecasting Agents
This repository contains a suite of custom AI agents for [OpenCode](https://github.com/opencode), specifically designed for **production-grade Machine Learning and Time-Series Energy Forecasting** in Python.
Rather than relying on a single general-purpose coding assistant, this configuration splits the software development lifecycle into **five distinct personas**. This separation of concerns prevents the AI from "marking its own homework" and enforces strict scientific and engineering rigor.

## The 5-Agent Architecture
The agents are divided by their permissions (Read-Only vs. Read/Write) and their specific domain focus.

### 1. 🏗️ Architect (`architect`)
* **Role:** System Designer & Planner
* **Permissions:** Read-Only (can run bash scripts for exploration)
* **Focus:** Analyzes the codebase and plans architectural changes. Enforces modern Python practices (e.g., `polars` over `pandas`), modularity, and elegance. It creates the blueprint before any code is written.

### 2. 💻 Builder (`custom_build`)
* **Role:** Software Engineer
* **Permissions:** Read & Write (Application Code)
* **Focus:** Executes the Architect's plan. Writes robust, production-ready code that "fails loudly." Enforces strict typing (e.g., `Patito` for Polars DataFrames) and ensures invalid states are unrepresentable.

### 3. 🔬 Scientist (`scientist`)
* **Role:** ML Auditor & Methodologist
* **Permissions:** Read-Only
* **Focus:** The domain expert. Rigorously audits ML pipelines for **data leakage** and **lookahead bias**. It verifies that temporal cross-validation is used correctly, checks `shift()`/`rolling()` window logic, and ensures scalers/imputers don't cheat by using future knowledge.

### 4. 🕵️ Reviewer (`review`)
* **Role:** Code Reviewer
* **Permissions:** Read-Only
* **Focus:** Inspects new and existing code for dead code, logical flaws, and inefficiencies. It flags functions that are too long, checks for proper exception handling, and ensures docstrings and variable names (e.g., including physical units like `mw`) meet project standards.

### 5. 💥 Tester (`tester`)
* **Role:** Adversarial QA Engineer
* **Permissions:** Read & Write (Test Files Only)
* **Focus:** Actively tries to break the code. Writes aggressive unit tests, property-based tests (via `hypothesis`), and runs mutation testing (via `mutmut`). It throws NaNs, infinities, and extreme outliers at the functions to ensure they handle edge cases safely.

## Example Workflow
When implementing a new feature or model, the agents are used in the following sequence:
1. **Plan:** Ask the **Architect** to explore the codebase and draft an implementation plan for the new feature.
2. **Build:** Hand the Architect's plan to the **custom_build** to write the application code.
3. **Audit:** Ask the **Scientist** to review the Builder's PR/changes specifically for data leakage or time-series methodology flaws.
4. **Review:** Ask the **Reviewer** to check the code for maintainability, DRY principles, and edge cases.
5. **Test:** Ask the **Tester** to write adversarial unit tests and property-based tests to try and break the Builder's code.

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
