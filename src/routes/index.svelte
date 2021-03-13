<script>
  import { fly } from "svelte/transition";

  const items = [
    {
      title: "Kakteen",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.`,
      image: "/images/plant-2.png",
      path: "/plant-2",
    },
    {
      title: "Ringe",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.`,
      image: "/images/plant-3.png",
      path: "/rings",
    },
  ];

  function isEven(number) {
    return number % 2 === 0;
  }
</script>

<div
  class="bg-white rounded-tl-3xl rounded-tr-3xl p-5 sm:p-20 space-y-10"
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

  {#each items as item, index}
    <section
      class="flex gap-5 sm:gap-10 sm:{isEven(index)
        ? 'flex-row'
        : 'flex-row-reverse'} flex-col-reverse"
    >
      <a
        href={item.path}
        class="secondary mt-auto w-full sm:hidden sm:w-44 mx-auto"
        >Mehr Ansehen</a
      >
      <div class="flex-1">
        <img
          src={item.image}
          alt="Plant 1"
          class="w-full max-h-60 sm:max-h-80 min-h-full object-cover object-bottom"
        />
      </div>
      <div class="flex-1 flex flex-col">
        <h1 class="font-semibold text-3xl">{item.title}</h1>
        <p class="">
          {item.description}
        </p>
        <div class="sm:m-3" />

        <a
          href={item.path}
          class="secondary mt-auto w-full hidden sm:block sm:w-44 mx-auto"
          >Mehr Ansehen</a
        >
      </div>
    </section>
  {/each}
</div>

<footer
  transition:fly
  class="h-56 p-5 sm:px-20 mb-8 bg-accent max-w-7xl mx-auto rounded-bl-3xl rounded-br-3xl"
>
  <div class="flex flex-col h-full">
    <h1 class="text-2xl text-white">Interessiert an meinen Werken?</h1>
    <h2 class="text-xl text-gray">Kontaktiere mich per Email</h2>
    <div class="mt-auto text-white">&copy; 2021 Kai Mäder</div>
  </div>
</footer>
