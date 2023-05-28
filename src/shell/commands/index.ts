export interface ShellCommandOutput {
  code: number;
  stderr: string | null;
  stdout: string;
}

export interface ShellCommandHandler {
  version: string;
  binary: (args: string[]) => Promise<ShellCommandOutput>;
}

const commands = {
  "ls": () => import("./ls"),
  "pwd": () => import("./pwd"),
  "cat": () => import("./cat"),
  "touch": () => import("./touch"),
  "mkdir": () => import("./mkdir"),
  "github": () => import("./github"),
	"articles": () => import("./articles"),
  "help": () => import("./help")
};

export default commands;
