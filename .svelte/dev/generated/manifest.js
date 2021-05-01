const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/oldindex.svelte"),
	() => import("../../../src/routes/portrait.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/work/index.svelte"),
	() => import("../../../src/routes/work/[workGroup]/index.svelte"),
	() => import("../../../src/routes/work/[workGroup]/[work].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/oldindex.svelte
	[/^\/oldindex\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/portrait.svelte
	[/^\/portrait\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/work/index.svelte
	[/^\/work\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/work/[workGroup]/index.svelte
	[/^\/work\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ workGroup: d(m[1])})],

	// src/routes/work/[workGroup]/[work].svelte
	[/^\/work\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ workGroup: d(m[1]), work: d(m[2])})]
];

export const fallback = [c[0](), c[1]()];