<script lang="ts">
  import { page } from "$app/stores";
  import { NAVIGATION_BAR_HEIGHT } from "../config";

  import CSS from "../lib/CSS.svelte";
  import ImageViewer from "../lib/ImageViewer/ImageViewer.svelte";
  import NavigationBar from "../lib/NavigationBar/NavigationBar.svelte";

  const navigationBarHeightRem = NAVIGATION_BAR_HEIGHT / 4;

  $: path = $page.path;
  $: showNavigationBar = path !== "/";
  $: contentHeight = `height: calc(100% - ${
    showNavigationBar ? navigationBarHeightRem : 0
  }rem)`;
</script>

<ImageViewer>
  {#if showNavigationBar}
    <NavigationBar bind:path />
  {/if}
  <div id="content" style={contentHeight}>
    <slot />
  </div>
</ImageViewer>
