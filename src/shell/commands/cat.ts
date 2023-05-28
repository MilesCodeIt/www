import type { ShellCommandHandler } from "./";

import { shellStore } from "@/stores/shell";
import { DirectoryEntry, FileEntry, storageStore } from "@/stores/storage";

export const version: ShellCommandHandler["version"] = "0.0.1b";
export const binary: ShellCommandHandler["binary"] = async (args) => {
  const cwd = shellStore.cwd.slice(1);
  const file_name = args[0];


  const paths = cwd.split("/");
  let content: DirectoryEntry["data"]["content"] = storageStore.data.content;
  
  for (const path of paths) {
    const found_content = content.find(entry => entry.type === "directory" && entry.data.name === path);
    content = found_content.data.content as DirectoryEntry["data"]["content"];
  }

  const file = content.find(item => item.data.name === file_name && item.type === "file") as FileEntry;
  if (!file || file.type !== "file") return {
    code: 1,
    stdout: `cat: ${file_name}: Is a directory`,
    stderr: null
  }

  const file_content = atob(file.data.content);
  
  return {
    code: 0,
    stdout: file_content,
    stderr: null
  }
}