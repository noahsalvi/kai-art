<script context="module">
  export const activatedKey = {};
  export const imagesKey = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { Writable } from "svelte/store";

  let activated = writable(false);
  let images: Writable<string[]> = writable([]);
  setContext(activatedKey, activated);
  setContext(imagesKey, images);

  let imageIndex = 0;
  let bottomHeight: number;
  let image: HTMLImageElement;

  $: if (image) handleSwipes();
  $: src = $images[imageIndex];
  $: hasPrevious = imageIndex;
  $: hasNext = imageIndex + 1 < $images.length;

  const previousImage = () => (hasPrevious ? imageIndex-- : imageIndex);
  const nextImage = () => (hasNext ? imageIndex++ : imageIndex);

  const close = () => {
    $activated = false;
    imageIndex = 0;
  };

  const handleKeyNavigation = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "Escape") {
      close();
    }
  };

  const handleSwipes = async () => {
    console.log(image);

    const Hammer = (await import("hammerjs")).default;
    const imageHammer = new Hammer(image, {});

    imageHammer.on("swipe", (e) => {
      if (e.direction === Hammer.DIRECTION_LEFT) {
        nextImage();
      } else if (e.direction === Hammer.DIRECTION_RIGHT) {
        previousImage();
      }
    });
  };
</script>

<slot />
{#if $activated}
  <!-- Overlay -->
  <div
    on:click={close}
    class="z-220 fixed left-0 top-0 h-screen-ios w-screen bg-black bg-opacity-85 overflow-hidden"
  >
    <div style="height: calc(100% - {bottomHeight}px)" class="flex">
      <div class="button-container">
        <!-- Left Button -->
        {#if hasPrevious}
          <div
            on:click|stopPropagation={previousImage}
            class="switch-button ui-color"
          >
            &lt;
          </div>
        {/if}
      </div>
      <!-- Image Container -->
      <div class="flex-grow h-full flex justify-center md:pt-20">
        <img
          bind:this={image}
          on:click|stopPropagation
          class="h-full max-w-full object-contain"
          {src}
          alt={{}.toString()}
        />
      </div>
      <div class="button-container">
        <!-- Right Button -->
        {#if hasNext}
          <div
            on:click|stopPropagation={nextImage}
            class="switch-button ui-color"
          >
            &gt;
          </div>
        {/if}
      </div>
    </div>

    <!-- Bottom Overview thingy -->
    <div
      bind:clientHeight={bottomHeight}
      class="h-20 flex justify-center items-center"
    >
      <div
        on:click|stopPropagation
        class="ui-color py-4 px-5 space-x-4 rounded-xl flex"
      >
        {#each $images as _, index}
          <div
            class="
              h-2 w-2 rounded-full
              {index === imageIndex ? 'bg-white' : 'bg-gray'}
            "
          />
        {/each}
      </div>
    </div>

    <!-- Close Button -->
    <div
      on:click|stopPropagation={close}
      class="
      h-14 w-14 fixed bottom-5 left-5 md:(bottom-auto left-auto top-10 right-10) 
      bg-primary bg-opacity-80 rounded-xl text-white font-sans
      flex justify-center items-center
      cursor-pointer
      hover:bg-gray
      "
    >
      X
    </div>
  </div>
{/if}
<svelte:window on:keyup={handleKeyNavigation} />

<style>
  .switch-button {
    @apply w-15 h-15 flex justify-center items-center rounded-full text-white cursor-pointer hover:bg-gray;
  }

  .button-container {
    @apply w-25 h-full flex-shrink-0 flex justify-center items-center -md:hidden lg:w-40 xl:w-60;
  }

  .ui-color {
    @apply bg-primary bg-opacity-80;
  }

  .h-screen-ios {
    height: 100vh;
    height: -webkit-fill-available;
  }
</style>
