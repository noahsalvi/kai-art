<script context="module">
  export async function preload() {
    sotion.setScope("fb38e374eb2c4048a443bdd52e95502d");

    return { meta: await sotion.getScope() };
  }
</script>

<script lang="ts">
  import { sotion } from "sotion";
  import BreadCrumb from "../../components/BreadCrumb.svelte";
  import { goto } from "@sapper/app";

  export let meta: { Name: string; slug: string; image: { url: string }[] }[];
</script>

<main class="max-w-7xl mx-auto px-20">
  <a href="/work">Werke</a>

  <div class="m-5" />

  <section
    class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"
  >
    {#each meta as workGroup}
      <article
        class="flex flex-col cursor-pointer"
        on:click={() => goto("work/" + workGroup.slug)}
      >
        <div
          class="bg-white rounded-xl overflow-hidden shadow border-2 border-background hover:shadow-xl transition"
        >
          <img
            class="h-96 w-full object-cover"
            src={workGroup.image?.[0].url}
            alt={workGroup.Name}
          />
        </div>
        <h1 class="text-xl">{workGroup.Name}</h1>
      </article>
    {/each}
  </section>
</main>
