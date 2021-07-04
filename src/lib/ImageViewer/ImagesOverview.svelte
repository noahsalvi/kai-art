<script>
  export let images;
  export let imageIndex;
</script>

<!-- Bottom Overview thingy -->
<div
  class="absolute bottom-0 right-1/2 transform translate-x-1/2 h-20 flex justify-center items-center"
>
  <div class="bg-primary bg-opacity-80 py-2 px-3 space-x-2 rounded-lg flex">
    {#each images as _, index}
      <div
        class="
      h-2 w-2 rounded-full
      {index === imageIndex ? 'bg-white' : 'bg-gray'}
    "
      />
    {/each}
  </div>
</div>
