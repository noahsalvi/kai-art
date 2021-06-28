<script lang="ts">
  import "virtual:windi.css";
  import "$lib/Components.css";
  import "$lib/Sotion.css";
  import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
  import { page } from "$app/stores";
  import WebsiteBorder from "$lib/WebsiteBorder.svelte";

  let navigationBarHeight: number;

  $: path = $page.path;
  $: navigationBarInset = path !== "/" ? navigationBarHeight ?? 0 : 0;
</script>

<!-- Using flex with flex-grow on the slot doesn't work on safari, that's why we do it programatically 🥲 -->
<WebsiteBorder bind:path>
  <div bind:clientHeight={navigationBarHeight}>
    {#if path !== "/"}
      <NavigationBar bind:path />
    {/if}
  </div>
  <div
    class="overflow-auto"
    style="height: calc(100% - {navigationBarInset}px);"
  >
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
