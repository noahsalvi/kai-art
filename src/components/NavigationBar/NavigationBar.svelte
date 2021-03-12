<script>
  import NavigationLink from "./NavigationLink.svelte";
</script>

<nav class="h-24 p-6 flex justify-between items-center">
  <div class="flex items-end space-x-4 h-full">
    <img
      src="/logo.svg"
      alt="Logo"
      class="h-full max-h-full rounded-lg hover:text-opacity-25 transition-all"
    />
    <h1 class="text-3xl font-thin">Kai Art & Design</h1>
  </div>

  <ul class="flex space-x-5 items-end h-full">
    <li><NavigationLink path="/">Home</NavigationLink></li>
    <li><NavigationLink path="/work">Werke</NavigationLink></li>
    <li><NavigationLink path="/portrait">Portrait</NavigationLink></li>
    <li><NavigationLink path="/contact">Kontakt</NavigationLink></li>
  </ul>
</nav>
