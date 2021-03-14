<script context="module">
  import { sotion } from "sotion";

  export function preload() {
    sotion.setFetch(this.fetch);
  }
</script>

<script lang="ts">
  import Tailwind from "../components/Tailwind.svelte";
  import NavigationBar from "../components/NavigationBar/NavigationBar.svelte";

  export let segment: string;
  segment;
</script>

<Tailwind />

<div class="min-h-full flex flex-col ">
  <NavigationBar />
  <div class="flex-grow">
    <slot />
  </div>
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
