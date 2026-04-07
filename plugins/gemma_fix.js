export const FixGemmaUndefinedArgs = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      // Catch the broken 'task' tool calls
      if (input.tool === "task" && !output.args.description) {
        output.args.description = 'Delegated subtask (auto-recovered)';
      }
      // Catch the broken 'bash' tool calls (another common Gemma 4 casualty)
      if (input.tool === "bash" && !output.args.description) {
        output.args.description = 'Execute a bash command (auto-recovered)';
      }
    }
  }
}
