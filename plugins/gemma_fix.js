export const DefaultDescription = async ({ project, client, $, directory, worktree }) => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "bash" && !output.args.description) {
        output.args.description='Execute a command'
      }
    }
  }
}
