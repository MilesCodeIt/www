import { defineConfig } from 'vite';
import path from 'node:path';

import solid from 'vite-plugin-solid';
import pages from 'vite-plugin-pages';
import unocss from '@unocss/vite';

export default defineConfig({
  plugins: [
    solid(),
    pages(),
    unocss()
  ],
  
  server: {
    port: 3000
  },

  build: {
    target: 'esnext'
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  }
});
