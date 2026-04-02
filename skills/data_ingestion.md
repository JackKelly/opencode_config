---
description: Workflow for adding and exploring new datasets, including Patito contracts and Dagster integration.
---
# Data Ingestion Workflow

1. **Exploration Phase:** 
   - Call the `data_engineer` subagent to write scripts in `exploration_scripts/` to download sample data and explore it.
2. **Contract & Plan Phase:** 
   - Call the `architect` subagent to review the exploration results and draft an implementation plan in `docs/temp/implementation_plan.md`, including a strict Patito Data Contract.
   - Call the `scientist` subagent to review the contract for physical realism and generate a handful of plots and statistical summaries of the new dataset in `docs/temp/dataset_summary.md`.
   - **STOP** and ask the user for approval. Provide a summary of the plan, the data contract, and the plots/statistics.
3. **Implementation Phase:**
   - Call the `data_engineer` subagent to implement the new data package and add it to Dagster.
4. **Validation Phase:**
   - Call the `tester` subagent to write property-based tests for the Patito contract.
   - Call the `scientist` subagent to run the pipeline locally and review the actual downloaded data for physical flaws.
   - If flaws are found, loop back to `data_engineer` to add defensive checks.
5. **Finalization:**
   - Load and proceed to the `finalization` skill.
