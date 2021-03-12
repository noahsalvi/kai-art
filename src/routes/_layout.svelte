<script lang="ts">
  import Tailwind from "../components/Tailwind.svelte";
  import NavigationBar from "../components/NavigationBar/NavigationBar.svelte";

  export let segment: string;
  segment;
</script>

<Tailwind />

<div class="max-w-7xl mx-auto">
  <NavigationBar />
  <main class=" mt-8">
    <slot />
  </main>
</div>

<style global>
  html {
    overflow-y: scroll;
  }
</style>
