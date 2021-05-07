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
  import WebsiteBorder from "$lib/WebsiteBorder.svelte";

  let navigationBarHeight: number;

  $: path = $page.path;
  $: contentHeight = `height: calc(100% - 
  ${path !== "/" ? navigationBarHeight ?? 0 : 0}
    px);`;
</script>

<!-- Using flex with flex-grow on the slot doesn't work on safari, that's why we do it programatically 🥲 -->
<WebsiteBorder bind:path>
  <div bind:clientHeight={navigationBarHeight}>
    {#if path !== "/"}
      <NavigationBar bind:path />
    {/if}
  </div>
  <div class="overflow-auto" style={contentHeight}>
    <slot />
  </div>
</WebsiteBorder>

<style global>
  html,
  body,
  #svelte {
    height: 100%;
  }
  .white-border {
    box-shadow: 0 0 0 0.6em #655;
  }
</style>
