<script context="module">
  export const activatedKey = {};
  export const imagesKey = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { Writable } from "svelte/store";

  let activated = writable(true);
  let images: Writable<string[]> = writable([]);
  setContext(activatedKey, activated);
  setContext(imagesKey, images);

  let imageIndex = 0;
  let bottomHeight: number;

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
</script>

<slot />
{#if $activated}
  <!-- Overlay -->
  <div
    on:click={close}
    class="z-100 fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-85"
  >
    <div style="height: calc(100% - {bottomHeight}px)" class="flex">
      <div class="w-60 h-full flex-shrink-0 flex justify-center items-center">
        <!-- Left Button -->
        {#if hasPrevious}
          <div on:click|stopPropagation={previousImage} class="switch-button">
            &lt;
          </div>
        {/if}
      </div>
      <!-- Image Container -->
      <div class="flex-grow h-full flex justify-center sm:pt-20">
        <img
          on:click|stopPropagation
          class="h-full max-w-full object-contain"
          {src}
          alt={{}.toString()}
        />
      </div>
      <div class="w-60 h-full flex-shrink-0 flex justify-center items-center">
        <!-- Right Button -->
        {#if hasNext}
          <div on:click|stopPropagation={nextImage} class="switch-button">
            &gt;
          </div>
        {/if}
      </div>
    </div>
    <div
      bind:clientHeight={bottomHeight}
      class="h-20 flex justify-center items-center"
    >
      <div
        on:click|stopPropagation
        class="bg-primary py-4 px-5 space-x-4 rounded-xl flex"
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
  </div>
{/if}
<svelte:window on:keyup={handleKeyNavigation} />

<style>
  .switch-button {
    @apply w-15 h-15 flex justify-center items-center rounded-full bg-primary text-white cursor-pointer hover:bg-gray;
  }
</style>
