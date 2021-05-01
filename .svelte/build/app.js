import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"/favicon.svg\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t<link href=\"https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap\" rel=\"stylesheet\">\n\t<link rel=\"stylesheet\" href=\"/global.css\">\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-faa40d03.js",
			css: ["/./_app/assets/start-25a78b07.css","/./_app/assets/vendor-025bd988.css"],
			js: ["/./_app/start-faa40d03.js","/./_app/chunks/vendor-499072eb.js","/./_app/chunks/singletons-6b53f818.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.svg","size":924,"type":"image/svg+xml"},{"file":"global.css","size":40,"type":"text/css"},{"file":"icons/hamburger.svg","size":267,"type":"image/svg+xml"},{"file":"icons/instagram.svg","size":1423,"type":"image/svg+xml"},{"file":"images/flex.png","size":442861,"type":"image/png"},{"file":"images/header.png","size":321942,"type":"image/png"},{"file":"images/plant-1.png","size":315400,"type":"image/png"},{"file":"images/plant-2.png","size":410562,"type":"image/png"},{"file":"images/plant-3.png","size":156393,"type":"image/png"},{"file":"images/weed.png","size":513121,"type":"image/png"},{"file":"logo-192.png","size":4760,"type":"image/png"},{"file":"logo-512.png","size":13928,"type":"image/png"},{"file":"logo.svg","size":922,"type":"image/svg+xml"},{"file":"manifest.json","size":324,"type":"application/json"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/oldindex\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/oldindex.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/portrait\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/portrait.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/contact\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/contact.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/work\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/work/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/work\/([^/]+?)\/?$/,
						params: (m) => ({ workGroup: d(m[1])}),
						a: ["src/routes/$layout.svelte", "src/routes/work/[workGroup]/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/work\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ workGroup: d(m[1]), work: d(m[2])}),
						a: ["src/routes/$layout.svelte", "src/routes/work/[workGroup]/[work].svelte"],
						b: [".svelte/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("../../src/routes/$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/oldindex.svelte": () => import("../../src/routes/oldindex.svelte"),"src/routes/portrait.svelte": () => import("../../src/routes/portrait.svelte"),"src/routes/contact.svelte": () => import("../../src/routes/contact.svelte"),"src/routes/work/index.svelte": () => import("../../src/routes/work/index.svelte"),"src/routes/work/[workGroup]/index.svelte": () => import("../../src/routes/work/[workGroup]/index.svelte"),"src/routes/work/[workGroup]/[work].svelte": () => import("../../src/routes/work/[workGroup]/[work].svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-edde3fee.js","css":["/./_app/assets/pages/$layout.svelte-b040365a.css","/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/$layout.svelte-edde3fee.js","/./_app/chunks/vendor-499072eb.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-ab25880d.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/error.svelte-ab25880d.js","/./_app/chunks/vendor-499072eb.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-18aea9fb.js","css":["/./_app/assets/pages/index.svelte-1fb08a4b.css","/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/index.svelte-18aea9fb.js","/./_app/chunks/vendor-499072eb.js"],"styles":null},"src/routes/oldindex.svelte":{"entry":"/./_app/pages/oldindex.svelte-bd206c41.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/oldindex.svelte-bd206c41.js","/./_app/chunks/vendor-499072eb.js","/./_app/chunks/pageFade-a3c22aee.js"],"styles":null},"src/routes/portrait.svelte":{"entry":"/./_app/pages/portrait.svelte-aa0cabab.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/portrait.svelte-aa0cabab.js","/./_app/chunks/vendor-499072eb.js"],"styles":null},"src/routes/contact.svelte":{"entry":"/./_app/pages/contact.svelte-b7a991a4.js","css":["/./_app/assets/pages/contact.svelte-07cb140d.css","/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/contact.svelte-b7a991a4.js","/./_app/chunks/vendor-499072eb.js","/./_app/chunks/Page-c9a1afca.js","/./_app/chunks/pageFade-a3c22aee.js"],"styles":null},"src/routes/work/index.svelte":{"entry":"/./_app/pages/work/index.svelte-d7cab62b.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/work/index.svelte-d7cab62b.js","/./_app/chunks/vendor-499072eb.js","/./_app/chunks/navigation-9e49acea.js","/./_app/chunks/singletons-6b53f818.js","/./_app/chunks/Page-c9a1afca.js","/./_app/chunks/pageFade-a3c22aee.js"],"styles":null},"src/routes/work/[workGroup]/index.svelte":{"entry":"/./_app/pages/work/[workGroup]/index.svelte-2183e036.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/work/[workGroup]/index.svelte-2183e036.js","/./_app/chunks/vendor-499072eb.js","/./_app/chunks/navigation-9e49acea.js","/./_app/chunks/singletons-6b53f818.js","/./_app/chunks/Page-c9a1afca.js","/./_app/chunks/pageFade-a3c22aee.js"],"styles":null},"src/routes/work/[workGroup]/[work].svelte":{"entry":"/./_app/pages/work/[workGroup]/[work].svelte-17e692d0.js","css":["/./_app/assets/vendor-025bd988.css"],"js":["/./_app/pages/work/[workGroup]/[work].svelte-17e692d0.js","/./_app/chunks/vendor-499072eb.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}