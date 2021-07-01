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

  $: src = $images[imageIndex];

  const previousImage = () => (imageIndex ? imageIndex-- : imageIndex);
  const nextImage = () =>
    imageIndex + 1 < $images.length ? imageIndex++ : imageIndex;

  const close = () => ($activated = false);
</script>

<slot />
{#if $activated}
  <!-- Overlay -->
  <div
    on:click={close}
    class="z-100 fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-85"
  >
    <div class="w-full h-full flex">
      <div class="w-60 h-full flex justify-center items-center">
        <!-- Left Button -->
        <div on:click|stopPropagation={previousImage} class="switch-button">
          &lt;
        </div>
      </div>
      <!-- Image Container -->
      <div class="flex-grow h-full flex justify-center">
        <img
          on:click|stopPropagation
          class="h-full max-w-full object-contain"
          {src}
          alt={{}.toString()}
        />
      </div>
      <div class="w-60 h-full flex justify-center items-center">
        <!-- Right Button -->
        <div on:click|stopPropagation={nextImage} class="switch-button">
          &gt;
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .switch-button {
    @apply w-15 h-15 flex justify-center items-center rounded-full bg-primary text-white;
  }
</style>
