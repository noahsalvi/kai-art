<script>
  import { fadeIn, fadeOut } from "../utils/pageFade";
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

<svelte:head>
  <title>Kai Art & Design</title>
</svelte:head>

<main class="bg-white rounded-tl-3xl rounded-tr-3xl" in:fadeIn out:fadeOut>
  <section class="max-w-7xl mx-auto p-5 sm:p-20 space-y-10">
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
      <article
        class="flex flex-col-reverse sm:{isEven(index)
          ? 'flex-row'
          : 'flex-row-reverse'}"
      >
        <a
          href={item.path}
          class="secondary mt-5 sm:m-0 w-full sm:hidden sm:w-44 mx-auto"
          >Mehr Ansehen</a
        >

        <section class="flex-1 flex max-h-60 mt-5 sm:m-0 sm:max-h-96 bg-gray">
          <img
            src={item.image}
            alt="Plant 1"
            class="w-full max-h-full object-cover object-bottom"
          />
        </section>

        <div class="sm:m-5" />

        <section class="flex-1 flex flex-col">
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
        </section>
      </article>
    {/each}
  </section>
</main>

<footer class="h-56 bg-accent">
  <div class="max-w-7xl mx-auto h-full p-5 sm:px-20">
    <div class="flex flex-col h-full">
      <h1 class="text-2xl text-white">Interessiert an meinen Werken?</h1>
      <h2 class="text-xl text-gray">Kontaktiere mich per Email</h2>
      <div class="mt-auto text-white">&copy; 2021 Kai Mäder</div>
    </div>
  </div>
</footer>
