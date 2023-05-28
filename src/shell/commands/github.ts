import type { ShellCommandHandler } from "./";

export const version: ShellCommandHandler["version"] = "1.0.0";
export const binary: ShellCommandHandler["binary"] = async () => {
  const url = "https://github.com/MilesCodeIt";
  window.open(url, "_blank").focus();

  return {
    code: 0,
    stdout: "Opened a new tab for you! Thanks you for checking our GitHub :D\nIf it didn't worked, please try it yourself: " + url,
    stderr: null
  }
}