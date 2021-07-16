<script lang="ts">
  import MobileNav from "../lib/landing/MobileNav.svelte";
  import { PERSONALITIES } from "../config";

  let showMobileNav = false;
  $: mobileTitlePlacement = showMobileNav ? "top-10" : "bottom-48";
</script>

<svelte:head>
  <title>Kai Art & Design</title>
</svelte:head>

<main class="h-full min-h-150 flex relative">
  <nav
    class="w-full absolute bottom-0 z-10 bg-primary md:(relative w-110 h-full) lg:w-120
    after:(content absolute w-full h-full bg-primary left-0 top-0 -z-1 transform -skew-y-8 origin-bottom-left)"
  >
    <!-- Hamburger for Mobile Nav -->
    <nav class="mr-10 mb-5 md:hidden">
      <img
        class="w-12 ml-auto transform transition active:(scale-120 bg-red)"
        src="icons/hamburger.svg"
        alt="Menu"
        on:click={() => (showMobileNav = !showMobileNav)}
      />
    </nav>

    <div class="m-10" />

    <div
      class="flex justify-center items-center space-x-4 text-xl sm:text-2xl md:text-lg lg:text-xl"
    >
      <a class="text-smoke hover:text-white" href="mailto:{PERSONALITIES.email}"
        >Email</a
      >
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a class="text-smoke hover:text-white" href="tel:{PERSONALITIES.phone}"
        >Tel</a
      >
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a
        class="text-smoke hover:text-white"
        href="https://instagram.com/{PERSONALITIES.instagram}"
        target="_blank">Instagram</a
      >
    </div>

    <!-- Mobile Footer Navigation -->
    <MobileNav show={showMobileNav} />

    <div class="m-10 md:m-52" />

    <ul
      class="flex flex-col items-center space-y-8 text-3xl -md:hidden lg:text-4xl"
    >
      <li>
        <a class="navigation-item" href="work">Werke</a>
      </li>
      <li>
        <a class="navigation-item" href="portrait">Portrait</a>
      </li>
      <li>
        <a class="navigation-item" href="contact">Kontakt</a>
      </li>
    </ul>
  </nav>

  <section class="h-full flex-grow bg-black relative">
    <img src="images/flex.png" alt="Kai" class="h-full w-full object-cover" />
    <h1
      class="z-20 absolute w-full text-center text-4xl whitespace-nowrap text-smoke
      md:(w-auto top-auto bottom-7 text-7xl right-0)
      lg:text-8xl xl:text-9xl 2xl:text-10xl
      {mobileTitlePlacement}"
    >
      Kai Art & Design
    </h1>
  </section>
</main>

<style>
  .navigation-item {
    @apply text-smoke block line-through transform transition duration-150 hover:(text-white no-underline text-red scale-120 animate-pulse);
  }
</style>
