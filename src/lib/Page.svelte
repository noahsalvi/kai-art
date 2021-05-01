<script>
	import { fadeIn, fadeOut } from '../utils/pageFade';
</script>

<main class="max-w-7xl mx-auto px-5 sm:px-20 min-h-full" in:fadeIn out:fadeOut>
	<slot />
</main>
