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

  let navigationBarHeight: number;
</script>

<!-- Using flex with flex-grow on the slot doesn't work on safari, that's why we do it programatically 🥲 -->
<div class="w-full h-full bg-gray rounded-xl p-1">
  <div class="h-full bg-white min-h-full rounded-xl overflow-hidden">
    {#if path !== "/"}
      <div bind:clientHeight={navigationBarHeight}>
        <NavigationBar />
      </div>
    {/if}
    <div
      class="overflow-auto"
      style="height: calc(100% - {navigationBarHeight ?? 0}px);"
    >
      <slot />
    </div>
  </div>
</div>

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
