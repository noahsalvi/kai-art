<script lang="ts">
  import Tailwind from "../components/Tailwind.svelte";
  import NavigationBar from "../components/NavigationBar/NavigationBar.svelte";

  export let segment: string;
  segment;
</script>

<Tailwind />

<div class="min-h-full flex flex-col ">
  <NavigationBar />
  <main class="flex-grow">
    <slot />
  </main>
</div>

<style global>
  html {
    overflow-y: scroll;
  }

  html,
  body,
  #sapper {
    height: 100%;
  }
</style>
