<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import { activatedKey, imagesKey } from "./ImageViewer.svelte";

  export let images: string[] = [];

  let preloadImages = false;
  const viewerImages: Writable<any[]> = getContext(imagesKey);
  const activated: Writable<boolean> = getContext(activatedKey);

  $viewerImages = images;

  onMount(() => (preloadImages = true));
</script>

{#if images.length}
  <img
    on:click={() => ($activated = true)}
    class="{$$props.class} cursor-pointer"
    src={images[0]}
    alt="thumbnail"
  />
{/if}

<!-- Preload all the images -->
{#if preloadImages}
  <div class="hidden">
    {#each images as src}
      <img {src} alt="" />
    {/each}
  </div>
{/if}
