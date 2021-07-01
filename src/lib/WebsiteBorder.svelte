<script>
  export let path;
  let borderColor = "border-white";
  $: {
    if (path === "/") borderColor = "border-gray";
    else borderColor = "border-white";
  }
</script>

<div
  class="absolute h-full w-full z-200 border-7 transition transition-colors duration-200 {borderColor} rounded-xl pointer-events-none"
/>
<div
  class="h-full min-h-full w-full border-7 border-black overflow-hidden relative"
>
  <slot />
</div>
