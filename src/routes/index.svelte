<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="bg-white rounded-tl-3xl rounded-tr-3xl p-20 space-y-10"
  transition:fly
>
  <div class="relative">
    <img
      src="/images/header.png"
      alt="Header"
      class="w-full h-72 object-cover object-top"
    />
    <a
      href="/portrait"
      class="absolute bottom-0 right-0 py-2 px-3 rounded-tl bg-white"
    >
      About Me
    </a>
  </div>
  <section class="flex space-x-10 max-h-96">
    <img
      src="/images/plant-1.png"
      alt="Plant 1"
      class="flex-1 object-cover object-bottom"
    />
    <div class="flex-1">
      <h1 class="font-semibold text-3xl">Kaktuse</h1>
      <p class="">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </section>
  <section class="flex space-x-4 flex-row-reverse">
    <img
      src="/images/plant-2.png"
      alt="Plant 2"
      class="flex-1 object-cover object-bottom"
    />
    <p class="flex-1">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
  </section>
</div>
