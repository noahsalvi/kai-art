<script>
	import { page } from '$app/stores';

	export let path;

	$: isActive = path === '/' ? $page.path === path : $page.path.startsWith(path);
</script>

<a href={path} class="text-lg  hover:text-black {isActive ? 'underline text-black' : 'text-gray'}"
	><slot /></a
>
