<script lang="ts">
  import { getContext, onMount, tick } from "svelte";
  import type { Writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { activatedKey, imagesKey, indexKey } from "./ImageViewer.svelte";
  import ImagesOverview from "./ImagesOverview.svelte";

  export let images: string[] = [];

  const imageSelectedIndex: Writable<number> = getContext(indexKey);
  const viewerImages: Writable<any[]> = getContext(imagesKey);
  const activated: Writable<boolean> = getContext(activatedKey);

  const maxOffsetX = 0;
  const minOffsetX = (images.length - 1) * -100;
  const velocityBonusMargin = 0.5;

  let imageContainerElement: HTMLImageElement;
  let preloadImages = false;
  let currentOffsetX = tweened(0, { duration: 0 });

  $: imageSelectedOffsetX = $imageSelectedIndex * -100;
  $: hasPrevious = $imageSelectedIndex;
  $: hasNext = $imageSelectedIndex < images.length - 1;
  $: if ($activated && imageSelectedIndex) {
    $currentOffsetX = imageSelectedOffsetX;
  }

  onMount(() => {
    preloadImages = true;
    setupHammer();
  });

  const setupHammer = async () => {
    const Hammer = (await import("hammerjs")).default;

    const imageHammer = new Hammer(imageContainerElement, {
      inputClass: Hammer.TouchMouseInput,
      recognizers: [
        [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL, threshold: 20 }],
        [Hammer.Tap],
      ],
    });

    imageHammer.on("pan", handlePan);
    imageHammer.on("tap", handleTap);
  };

  const handleTap = () => ($activated = true);

  const handlePan = async (e: HammerInput) => {
    let offset = imageSelectedOffsetX + e.deltaX / 2.5;

    if (offset > maxOffsetX) offset = maxOffsetX;
    else if (offset < minOffsetX) offset = minOffsetX;

    $currentOffsetX = offset;

    // End of pan movement
    if (e.isFinal) {
      const previousIndex = $imageSelectedIndex;
      $imageSelectedIndex = Math.round(offset / -100);

      if (previousIndex === $imageSelectedIndex) {
        // If the pans were fast enough, switch to the next/previous image
        if (e.velocityX <= -velocityBonusMargin && hasNext) {
          $imageSelectedIndex++;
        } else if (e.velocityX >= velocityBonusMargin && hasPrevious) {
          $imageSelectedIndex--;
        }
      }

      await tick();
      currentOffsetX.set(imageSelectedOffsetX, { duration: 200 });
    }
  };

  $viewerImages = images;
</script>

<!-- Image Container -->
<div
  bind:this={imageContainerElement}
  class="relative w-full h-full flex overflow-hidden bg-smoke {$$props.class}"
>
  {#if !$activated}
    {#each images as src}
      <img
        {src}
        class="h-full min-h-full w-full min-w-full object-cover pointer-events-none"
        style="transform: translateX({$currentOffsetX}%)"
        alt="preview images"
      />
    {/each}
    <ImagesOverview {images} imageIndex={$imageSelectedIndex} />
  {/if}
</div>

<!-- Preload all the images -->
{#if preloadImages}
  <div class="hidden">
    {#each images as src}
      <img {src} alt="" />
    {/each}
  </div>
{/if}

<style>
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
