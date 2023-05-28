import { defineConfig } from 'vite';
import path from 'node:path';

import solidPlugin from 'vite-plugin-solid';
import UnocssPlugin from '@unocss/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnocssPlugin(),
  ],
  
  server: {
    port: 3000,
  },

  build: {
    target: 'esnext',
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  }
});
