<script lang="ts">
  import { clickOutside } from "$lib/actions/clickOutside";
  import { tick } from "svelte";

  import { fade, slide, fly, blur } from "svelte/transition";
  export let modalClass = "";
  export let open = false;
  export let openMobileNavButton: HTMLImageElement;

  function handleClick(event: MouseEvent) {
    if (!openMobileNavButton.contains(event.target as Node)) {
      open = !open;
    }
  }
</script>

{#if open}
  <div
    class="{modalClass} z-100 bg-smoke w-50 rounded-lg flex flex-col items-stretch text-center"
    transition:blur
    use:clickOutside={handleClick}
  >
    <a href="work" class="py-6 hover:(bg-white)">Werke</a>
    <a href="portrait" class="py-6 hover:(bg-white)">Portrait</a>
    <a href="contact" class="py-6 hover:(bg-white)">Kontakt</a>
  </div>
{/if}
