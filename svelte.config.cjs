const preprocess = require('svelte-preprocess');
const WindiCSS = require('vite-plugin-windicss').default;
const netlify = require('@sveltejs/adapter-netlify');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlify(),
		target: '#svelte',
		vite: {
			plugins: [WindiCSS({})],
			optimizeDeps: {
				include: ['prismjs', 'katex']
			}
		}
	}
};
