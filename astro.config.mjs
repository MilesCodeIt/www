import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import image from '@astrojs/image';
import mdx from "@astrojs/mdx";

import { remarkReadingTime } from './src/utils/frontmatter.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: "https://www.milescode.dev",
	base: "/",

	output: 'static',

	integrations: [
        solid(),
		tailwind(),

		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),

		mdx()
	],

	markdown: {
        remarkPlugins: [remarkReadingTime],
        extendDefaultPlugins: true,
    },

	vite: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, "./src"),
			},
		},
	},
});