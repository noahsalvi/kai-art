<script>
  import NavigationLink from "./NavigationLink.svelte";
  export let path;

  $: darkTheme = ["/work"].includes(path);
</script>

<nav
  class="h-24 p-6 flex justify-between items-center w-full max-w-7xl mx-auto"
>
  <a href="/" class="flex items-end space-x-4 h-full">
    <img
      src="/logo.svg"
      alt="Logo"
      class="h-full max-h-full rounded-lg hover:text-opacity-25 transition-all"
    />
    <h1
      class="text-3xl font-thin hidden {darkTheme ? 'text-white' : ''} sm:block"
    >
      Kai Art & Design
    </h1>
  </a>

  <ul class="flex space-x-5 items-end h-full text-white">
    <li><NavigationLink path="/">Home</NavigationLink></li>
    <li><NavigationLink path="/work">Werke</NavigationLink></li>
    <li><NavigationLink path="/portrait">Portrait</NavigationLink></li>
    <li><NavigationLink path="/contact">Kontakt</NavigationLink></li>
  </ul>
</nav>
