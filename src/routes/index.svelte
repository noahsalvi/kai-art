<script>
  import Hambuger from "$lib/landing/Hambuger.svelte";

  let mainHeight;
</script>

<main class="h-full min-h-150 flex relative" bind:clientHeight={mainHeight}>
  <!-- Mobile aslant top -->
  <nav
    class="w-130 h-full bg-primary -md:(w-full absolute bottom-0 h-auto z-10)"
  >
    <!-- Mobile Nav -->
    <nav class="md:hidden">
      <img
        class="ml-auto mr-10 mb-5 w-12"
        src="icons/hamburger.svg"
        alt="Menu"
      />
    </nav>

    <div class="m-10" />

    <div
      class="flex justify-center items-center space-x-4 text-2xl sm:text-3xl md:text-lg"
    >
      <a class="text-smoke">Email</a>
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a class="text-smoke">Tel</a>
      <div class="bg-smoke rounded-full w-1 h-1" />
      <a class="text-smoke">Instagram</a>
    </div>

    <div class="m-10 md:m-52" />

    <ul class="flex flex-col items-center space-y-8 -md:hidden">
      <li>
        <a class="text-smoke text-5xl font-light" href="work"
          ><strike>Werke</strike></a
        >
      </li>
      <li>
        <a class="text-smoke text-5xl" href="portrait"
          ><strike>Portrait</strike></a
        >
      </li>
      <li>
        <a class="text-smoke text-5xl" href="contact"
          ><strike>Kontakt</strike></a
        >
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
      class="z-20 absolute bottom-48 w-full text-center md:(w-auto bottom-7 text-8xl right-0) text-4xl  lg:(text-9xl) whitespace-nowrap text-smoke"
    >
      Kai Art & Design
    </h1>
  </section>
</main>

<style global>
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
  body {
    @apply bg-primary !important;
  }

  strike {
    text-decoration-thickness: 3px;
  }

  .w-menu {
    width: 500px;
  }
</style>
