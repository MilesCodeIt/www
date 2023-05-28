import { Component, createSignal, JSX, onCleanup, onMount } from "solid-js";
import { shellStore, setShellStore } from "@/stores/shell";
import commands from "@/shell/commands";

import { For, batch } from "solid-js";

const Shell: Component = () => {
  const getCurrentPrompt = () => shellStore.prompt
    .replaceAll("{{cwd}}", shellStore.cwd)
    .replaceAll("{{user}}", shellStore.whoami)
    .replaceAll("{{hostname}}", shellStore.hostname)

  const processUserInput = async (input: string) => {
    const current_prompt = getCurrentPrompt();
        
    if (!input.startsWith(current_prompt)) {
      return "shell: error with prompt.";
    }

    const command = input.slice(current_prompt.length).trim();
    if (!command) return;

    const args = command.split(" ");
    const commandName = args.shift();

    setShellStore(prev => ({
      input_history: [...prev.input_history, command],
      input_history_position: undefined,
      input_state: "idle"
    }))

    const handler = commands[commandName]; 
    if (!handler) {
      return `shell: command '${commandName}' not found.`;
    }

    const { binary } = await handler();
    const output = await binary(args);
    return output.stdout as string;
  };

  const processBackspace = () => {
    const new_input = shellStore.user_input.slice(0, -1);
    const current_prompt = getCurrentPrompt();
    
    if (!new_input.startsWith(current_prompt)) {
      setShellStore("user_input", current_prompt);
      return;
    }

    setShellStore("user_input", new_input);
  }

  const globalKeyUpListener = async (ev: KeyboardEvent) => {
    ev.preventDefault();

    const newUserInput = (output?: string) => batch(() => {
      const new_lines = [shellStore.user_input];
      if (output) new_lines.push(output);

      setShellStore("lines", prev => [...prev, ...new_lines]);
      setShellStore({ user_input: getCurrentPrompt(), user_input_position: 0 });
    });

    switch (ev.key) {
      case "Enter":
        newUserInput(await processUserInput(shellStore.user_input));
        break;

      case "Backspace": {
        processBackspace();
        break;
      }

      case "ArrowUp": {
        setShellStore("input_history_position", prev => {
          if (typeof prev !== "undefined") {
            const new_position = --prev;
            if (new_position < 0) return 0;
            return new_position;
          }

          return shellStore.input_history.length - 1;
        });

        setShellStore("user_input", getCurrentPrompt() + shellStore.input_history[shellStore.input_history_position as number]);
        break;
      }

      case "ArrowDown": {
        setShellStore("input_history_position", prev => {
          const max_length = shellStore.input_history.length - 1;
          if (typeof prev !== "undefined") {
            const new_position = ++prev;
            if (new_position > max_length) return undefined;
            return new_position;
          }

          return undefined;
        });

        const command = shellStore.input_history[shellStore.input_history_position as number];
        if (!command) {
          setShellStore({ user_input: getCurrentPrompt() });
          break;
        }

        setShellStore("user_input", getCurrentPrompt() + command);
        break;
      }

      case "ArrowLeft": {
        setShellStore("user_input_position", prev => {
          const new_value = prev + 1;
          const input = shellStore.user_input.replace(getCurrentPrompt(), "");

          if (new_value > input.length) return input.length;
          return new_value;
        });
        break;
      }

      case "ArrowRight": {
        setShellStore("user_input_position", prev => {
          const new_value = prev - 1;
          if (new_value < 0) return 0;
          return new_value;
        });
        break;
      }

      case "Alt":
      case "Tab":
      case "Shift":
      case "Control":
      case "CapsLock":
      case "Unidentified":
        break;

      case "L":
      case "l": {
        if (ev.ctrlKey) {
          setShellStore("lines", []);
          break; 
        }
      }

      case "c": {
        if (ev.ctrlKey) {
          newUserInput();
          break;
        }
      }

      default:
        setShellStore(prev => ({
          user_input: prev.user_input + ev.key,
          user_input_position: prev.user_input_position
        }));
    }
  };

  onMount(() => {
    setShellStore({ user_input: getCurrentPrompt() });
    window.addEventListener("keydown", globalKeyUpListener);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", globalKeyUpListener);
  });

  let userInputElementRef: HTMLInputElement | undefined;
  const [userInputValue, setUserInputValue] = createSignal("");

  return (
    <>
      <input class="absolute"
        value={userInputValue()}
        onInput={event => setUserInputValue(prev => {
          const curr = event.currentTarget.value;
          
          if (prev.length < curr.length) {
            const new_value = curr.slice(prev.length);
            setShellStore("user_input", q => q + new_value);
          } 
          
          else processBackspace();
          return curr; 
        })}
        style="left: -9999px"
        ref={userInputElementRef}
        type="text"
        autofocus
      />

      <div
      // onClick={() => userInputElementRef.focus()}
      >
        <For each={shellStore.lines}>
          {line => (
            <pre class="whitespace-pre-wrap break-all">{line}</pre>
          )}
        </For>
        
        <div class="relative">
          <pre role="textbox"
            class="w-full bg-transparent outline-none whitespace-pre-wrap break-all"
          >
            {shellStore.user_input}
          </pre>
          <pre class="absolute top-0">
          {" ".repeat(shellStore.user_input.length - shellStore.user_input_position)}<span class="-z-10 h-full w-[2px] bg-gray-100 text-gray-800"> </span>
          </pre>
        </div>

      </div>
    </>
  );
};

export default Shell;
