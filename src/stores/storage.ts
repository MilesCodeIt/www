import { createStore } from "solid-js/store";

export interface FileEntry {
  type: "file";
  data: {
    name: string;
    /** Base64 encoded content. */
    content: string;
    // TODO: permissions: number;
  }
}

export interface DirectoryEntry {
  type: "directory";
  data: {
    name: string;
    content: (FileEntry | DirectoryEntry)[];
    // TODO: permissions: number;
  }
}

export const createDirectory = (name: string, content: DirectoryEntry["data"]["content"]): DirectoryEntry => ({
  type: "directory",
  data: {
    name,
    content
  }
});

export const createFile = (name: string, content: FileEntry["data"]["content"]): FileEntry => ({
  type: "file",
  data: {
    name,
    content: btoa(content)
  }
});

const DEFAULT_FS: DirectoryEntry = createDirectory("/", [
  createDirectory("home", [
    createDirectory("user", [
      createFile("user.txt", "bruh")
    ])
  ])
])

export const [storageStore, setStorageStore] = createStore<DirectoryEntry>(DEFAULT_FS);
