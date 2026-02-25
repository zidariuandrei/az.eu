import adapter from '@sveltejs/adapter-netlify';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

/** @type {import('shiki').Highlighter} */
let highlighter;

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			if (!highlighter) {
				highlighter = await createHighlighter({
					themes: ['everforest-dark', 'everforest-light'],
					langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'json', 'bash', 'go', 'rust', 'python', 'sql', 'yaml', 'markdown']
				});
			}
			
			const html = escapeSvelte(highlighter.codeToHtml(code, {
				lang,
				themes: {
					light: 'everforest-light',
					dark: 'everforest-dark'
				}
			}));
			
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter({
			// split configuration for edge functions
			edge: false,
			// image optimization
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
			},
		}),
		// prerender configuration for static generation
		prerender: {
			entries: ['*', '/blog/*'],
			handleHttpError: 'warn'
		}
	}
};

export default config;
