<script>
  import { stores } from "@sapper/app";

  export let path;

  const { page } = stores();

  $: isActive = $page.path === path;
</script>

<a
  href={path}
  class="text-lg {isActive
    ? 'underline text-black'
    : 'text-gray'} hover:text-black"><slot /></a
>
