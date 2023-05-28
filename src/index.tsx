import "@unocss/reset/tailwind.css";
import 'virtual:uno.css';

import { render } from 'solid-js/web';

import { Router, useRoutes } from '@solidjs/router';
import routes from '~solid-pages';

import ShellWindow from "@/layouts/ShellWindow";

render(
  () => {
    const Routes = useRoutes(routes);
    
    return (
      <Router>
        <ShellWindow>
          <Routes />
        </ShellWindow>
      </Router>
    );
  },
  document.getElementById('root') as HTMLDivElement
);
