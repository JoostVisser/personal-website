import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { UserConfig } from 'vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite';

export default {
	plugins: [enhancedImages(), tailwindcss(), sveltekit(), svelteTesting()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: ['tests/setup/setup.ts']
	}
} satisfies UserConfig;
