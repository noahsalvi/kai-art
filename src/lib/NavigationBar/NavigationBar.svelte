<script>
  import { NAVIGATION_BAR_HEIGHT } from "../../config";
  import NavigationLink from "./NavigationLink.svelte";

  export let path;

  $: darkTheme = ["/work"].includes(path);
  $: whiteTitle = darkTheme ? "text-white" : "";
  $: logoBorderColor = darkTheme ? "border-white" : "border-primary";
</script>

<nav
  class="h-{NAVIGATION_BAR_HEIGHT} p-6 px-5 space-x-4 sm:px-20 flex justify-between items-center w-full max-w-7xl mx-auto"
>
  <a
    href="/"
    class="flex-basis-full flex items-center space-x-4 h-full sm:items-end"
  >
    <!-- TODO improve log svg and add white border to it directly -->

    <img
      src="/logo.svg"
      alt="Logo"
      class="w-16 rounded-lg transition-all border sm:(w-auto h-full) hover:text-opacity-25 {logoBorderColor}"
    />
    <h1
      class="font-thin hidden text-2xl hidden whitespace-nowrap md:block lg:(text-3xl) {whiteTitle}"
    >
      Kai Art & Design
    </h1>
  </a>

  <ul
    class="flex space-x-5 items-center h-full text-white w-full justify-end text-md sm:(text-lg items-end)"
  >
    <li><NavigationLink path="/work">Werke</NavigationLink></li>
    <li><NavigationLink path="/portrait">Portrait</NavigationLink></li>
    <li><NavigationLink path="/contact">Kontakt</NavigationLink></li>
  </ul>
</nav>

<style>
  .flex-basis-full {
    flex-basis: 100%;
  }
</style>
