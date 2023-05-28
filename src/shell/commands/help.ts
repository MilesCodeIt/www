import type { ShellCommandHandler } from "./";
import commands from "./index";

export const version: ShellCommandHandler["version"] = "0.0.1b";
export const binary: ShellCommandHandler["binary"] = async () => {
  const comands_return = "commands:\n" + Object.keys(commands).filter(i => i!="help").map(i => " -" + i).join("\n");
  
  return {
    code: 0,
    stdout: comands_return,
    stderr: null
  }
}