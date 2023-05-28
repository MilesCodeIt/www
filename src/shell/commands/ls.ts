import type { ShellCommandHandler } from "./";

import { shellStore } from "@/stores/shell";
import { DirectoryEntry, storageStore } from "@/stores/storage";

export const version: ShellCommandHandler["version"] = "0.0.1b";
export const binary: ShellCommandHandler["binary"] = async () => {
  const cwd = shellStore.cwd.slice(1);

  // TODO: handle arguments

  const paths = cwd.split("/");
  let content: DirectoryEntry["data"]["content"] = storageStore.data.content;
  
  for (const path of paths) {
    const found_content = content.find(entry => entry.type === "directory" && entry.data.name === path);
    content = found_content.data.content as DirectoryEntry["data"]["content"];
  }
  
  return {
    code: 0,
    stdout: content.map(entry => entry.data.name).join("\n"),
    stderr: null
  }
}