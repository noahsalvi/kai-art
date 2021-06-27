<script>
  import { onDestroy, onMount } from "svelte";

  export let bodyClass = null;
  let addedClass = false;
  onMount(() => {
    if (bodyClass) {
      document.body.classList.add(bodyClass);
      addedClass = true;
    }
  });

  onDestroy(() => {
    if (addedClass && bodyClass) {
      document?.body.classList.remove(bodyClass);
    }
  });
</script>

<main class="max-w-7xl mx-auto px-5 sm:px-20 h-full z-10">
  <slot />
</main>
