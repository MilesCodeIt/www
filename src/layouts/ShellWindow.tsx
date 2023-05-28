import { FlowComponent, For, createEffect } from "solid-js";

import { createSignal } from "solid-js";
import { useNavigate, A } from "@solidjs/router";

import { currentShellTab } from "@/stores/window";
import { setShells } from "@/stores/shells";

export interface ShellWindowTab {
  id: string;
  name: string;
}

const ShellWindow: FlowComponent<{  }> = (props) => {
  const navigate = useNavigate();

  const [tabs, setTabs] = createSignal<ShellWindowTab[]>([
    { name: "New tab", id: crypto.randomUUID() }
  ]);

  createEffect(() => {
    const tab_id = currentShellTab();
    if (tabs().find(tab => tab.id === tab_id)) return;

    navigate(`/${tabs()[0].id}`);
  });

  return (
    <div class="h-full flex flex-col">
      <div class="flex justify-between h-[24px] bg-black flex-shrink-0">
        <For each={tabs()}>
          {tab => (
            <A href={`/${tab.id}`}>
              <div classList={{
                "bg-white text-black": tab.id === currentShellTab()
              }}>
                {tab.name}
              </div>
            </A>
          )}
        </For>

        <button type="button"
          onClick={() => {
            const new_id = crypto.randomUUID();
            setTabs(prev => [...prev, {
              id: new_id,
              name: "New tab"
            }]);

            navigate(`/${new_id}`);
          }}
        >
          +
        </button>
      </div>
      <div class="h-full">
        {props.children}
      </div>
    </div>
  )
}

export default ShellWindow;
