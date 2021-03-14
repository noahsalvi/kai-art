<script>
  import { stores } from "@sapper/app";

  export let path;

  const { page } = stores();

  $: isActive =
    path === "/" ? $page.path === path : $page.path.startsWith(path);
</script>

<a
  href={path}
  class="text-lg {isActive
    ? 'underline text-black'
    : 'text-gray'} hover:text-black"><slot /></a
>
