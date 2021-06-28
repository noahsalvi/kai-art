<script>
  import NavigationLink from "./NavigationLink.svelte";
  export let path;

  $: darkTheme = ["/work"].includes(path);
  $: whiteTitle = darkTheme ? "text-white" : "";
</script>

<nav
  class="h-24 p-6 px-5 sm:px-20 flex justify-between items-center w-full max-w-7xl mx-auto"
>
  <a href="/" class="flex-shrink-0 flex items-end space-x-4 h-full -sm:hidden">
    <!-- TODO improve log svg and add white border to it directly -->

    <img
      src="/logo.svg"
      alt="Logo"
      class="h-full rounded-lg hover:text-opacity-25 transition-all border border-white"
    />
    <h1
      class="font-thin hidden text-2xl hidden whitespace-nowrap md:block lg:(text-3xl) {whiteTitle}"
    >
      Kai Art & Design
    </h1>
  </a>

  <ul
    class="flex space-x-5 items-end h-full text-white w-full justify-center sm:justify-end"
  >
    <li><NavigationLink path="/work">Werke</NavigationLink></li>
    <li><NavigationLink path="/portrait">Portrait</NavigationLink></li>
    <li><NavigationLink path="/contact">Kontakt</NavigationLink></li>
  </ul>
</nav>
