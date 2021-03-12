<script lang="ts">
  import Counter from "../components/Counter.svelte";

  export let segment: string;
</script>

<main>
  <Counter />
  <slot />
</main>
