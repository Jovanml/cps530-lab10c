import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/cps530-lab10c",
	plugins: [sveltekit()],
  });
