import type { ShellCommandHandler } from "./";

export const version: ShellCommandHandler["version"] = "1.0.0";
export const binary: ShellCommandHandler["binary"] = async () => {
  window.location.replace("https://blog.milescode.dev");

  return {
    code: 0,
    stdout: "loading the articles...",
    stderr: null
  }
}