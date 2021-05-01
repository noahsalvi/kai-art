<script context="module">
  import "virtual:windi.css";
  import { sotion } from "sotion";

  export function load({ fetch }) {
    sotion.setFetch(fetch);
    return {};
  }
</script>

<script lang="ts">
  import NavigationBar from "../lib/navigationBar/NavigationBar.svelte";
  import { page } from "$app/stores";

  const { path } = $page;
</script>

<div class="w-full h-full bg-gray rounded-xl p-2">
  <div
    class="h-full bg-white min-h-full rounded-xl overflow-hidden flex flex-col"
  >
    {#if path !== "/"}
      <NavigationBar />
    {/if}

    <slot />
  </div>
</div>

<style global>
  /* html {
    overflow-y: scroll;
  } */

  html,
  body,
  #sapper {
    height: 100%;
  }

  .white-border {
    box-shadow: 0 0 0 0.6em #655;
  }
</style>
