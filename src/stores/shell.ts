import { createStore } from "solid-js/store";

export const [shellStore, setShellStore] = createStore<{
  cwd: string;
  whoami: string;
  hostname: string;
  prompt: string;

  user_input: string;
  lines: string[];

  user_input_position: number;

  input_history: string[];
  input_history_position?: number; // index of input_history when state is editing 
  input_state: "idle" | "editing";
}>({
  cwd: "/home/user",
  whoami: "user",
  hostname: "milescode.dev",
  prompt: "{{user}}@{{hostname}} {{cwd}} $ ",

  user_input: "",
  user_input_position: 0,

  lines: [
    "Welcome to MilesCode's VM! Hope you'll have a good time with us.",
    "Here is some pro tips commands:",
    "  * articles # Show an interactive list of the articles we wrote.",
    "  * github # Opens our GitHub page in a new tab.",
    " " // Default lines to show a header when first mount.
  ],

  input_history: [],
  input_state: "idle"
});