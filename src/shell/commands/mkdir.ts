import type { ShellCommandHandler } from "./";

import { shellStore } from "@/stores/shell";
import { DirectoryEntry, FileEntry, storageStore, setStorageStore, createDirectory } from "@/stores/storage";

export const version: ShellCommandHandler["version"] = "0.0.1b";
export const binary: ShellCommandHandler["binary"] = async (args) => {
  const cwd = shellStore.cwd.slice(1);

  const paths = cwd.split("/");
  let content: DirectoryEntry["data"]["content"] = storageStore.data.content;

  const setStorageStoreArgs: (string | ((entry: FileEntry | DirectoryEntry) => boolean))[] = [];
  
  for (const path of paths) {
    const found_content = content.find(entry => entry.type === "directory" && entry.data.name === path);
    content = found_content.data.content as DirectoryEntry["data"]["content"];

    setStorageStoreArgs.push("data", "content", name => name.data.name === path);
  }

  const newFiles = args.map(name => createDirectory(name, []));
  setStorageStore(...(setStorageStoreArgs as []), "data", "content", (prev: (FileEntry | DirectoryEntry)[]) => [...prev, ...newFiles]);
  
  return {
    code: 0,
    stdout: "",
    stderr: null
  }
}