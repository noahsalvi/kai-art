<script>
  import { page } from "$app/stores";

  export let path;

  $: isActive =
    path === "/" ? $page.path === path : $page.path.startsWith(path);

  $: darkTheme = ["/work"].includes($page.path);
  $: textColor = darkTheme ? "text-white" : "text-black";
  $: hoverTextColor = darkTheme ? "hover:text-gray" : "hover:text-black";
  $: activeTextColor = darkTheme ? "text-white" : "text-black";
</script>

<a
  href={path}
  class="dark {hoverTextColor} {isActive
    ? 'underline ' + activeTextColor
    : textColor}"><slot /></a
>
