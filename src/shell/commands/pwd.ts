import type { ShellCommandHandler } from "./";

import { shellStore } from "@/stores/shell";

export const version: ShellCommandHandler["version"] = "0.0.1b";
export const binary: ShellCommandHandler["binary"] = async () => {
  const cwd = shellStore.cwd;
  
  return {
    code: 0,
    stdout: cwd,
    stderr: null
  }
}