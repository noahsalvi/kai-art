<script lang="ts">
  import MobileNav from "$lib/landing/MobileNav.svelte";

  let showMobileNav;
  let mainHeight;
  let openMobileNavButton: HTMLImageElement;
</script>

<main class="h-full min-h-150 flex relative" bind:clientHeight={mainHeight}>
  <!-- Mobile aslant top -->
  <nav
    class="w-110 h-full bg-primary -md:(w-full absolute bottom-0 h-auto z-10)"
  >
    <!-- Hamburger for Mobile Nav -->
    <nav class="mr-10 mb-5 md:hidden">
      <img
        bind:this={openMobileNavButton}
        class="w-12 ml-auto transform transition active:(scale-120 bg-red)"
        src="icons/hamburger.svg"
        alt="Menu"
        on:click={() => (showMobileNav = !showMobileNav)}
      />
    </nav>

    <div class="m-10" />

    <div
      class="flex justify-center items-center space-x-4 text-xl sm:text-2xl md:text-lg"
    >
      <a class="text-smoke hover:text-white" href="mailto:kai@email">Email</a>
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a class="text-smoke hover:text-white" href="tel:0790000000">Tel</a>
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a
        class="text-smoke hover:text-white"
        href="https://instagram.com/kai_nicolai"
        target="_blank">Instagram</a
      >
    </div>

    <div class="m-10 md:m-52" />

    <ul class="flex flex-col items-center space-y-8 -md:hidden text-3xl">
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

  <section
    class="h-full flex-grow bg-gray relative"
    style="height: {mainHeight}px;"
  >
    <img
      src="images/flex.png"
      alt="Kai"
      class="absolute h-full w-full object-cover"
    />
    <h1
      class="z-20 absolute bottom-48 w-full text-center md:(w-auto bottom-7 text-7xl right-0) text-4xl lg:(text-8xl) whitespace-nowrap text-smoke"
    >
      Kai Art & Design
    </h1>
  </section>

  <MobileNav
    modalClass="absolute bottom-50 right-10 transform"
    bind:open={showMobileNav}
    {openMobileNavButton}
  />
</main>

<style global>
  body {
    @apply bg-primary;
  }

  /* Mobile Nav Slanted Top */
  nav {
    position: relative;
  }
  nav::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    top: 0;
    z-index: -1;
    transform-origin: bottom left;
    transform: skewY(-8deg);
  }

  .navigation-item {
    @apply text-smoke block line-through transform transition duration-150 hover:(text-white no-underline text-red scale-120 animate-pulse);
  }
</style>
