import "@unocss/reset/tailwind.css";
import 'virtual:uno.css';

import { render } from 'solid-js/web';
import Shell from "@/shell";

render(
  () => <Shell />, 
  document.getElementById('root') as HTMLDivElement
);
