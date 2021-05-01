<script lang="ts">
	import { page } from '$app/stores';

	$: breadCrumbs = ($page.path as string).split('/').slice(1);
</script>

{JSON.stringify(breadCrumbs)}
