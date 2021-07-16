<script lang="ts">
  import { slide } from "svelte/transition";

  export let show = false;
</script>

<div class="md:hidden">
  {#if show}
    <div
      class="z-20 mt-10 flex flex-col items-stretch text-xl text-white px-10 font-sans space-y-2"
      transition:slide|local
    >
      <a href="work" class="mobile-footer-navigation-item">Werke</a>
      <a href="portrait" class="mobile-footer-navigation-item">Portrait</a>
      <a href="contact" class="mobile-footer-navigation-item">Kontakt</a>
    </div>
  {/if}
</div>

<style>
  .mobile-footer-navigation-item {
    @apply bg-white bg-opacity-2 py-3 text-center rounded-xl hover:(bg-opacity-10);
  }
</style>
