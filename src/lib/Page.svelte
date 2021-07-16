<script>
  import { onDestroy, onMount } from "svelte";
  export { classes as class };
  export let bodyClass = null;
  let classes = "";
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

<main class="max-w-7xl mx-auto px-5 z-10 sm:px-20 {classes}">
  <slot />
</main>
