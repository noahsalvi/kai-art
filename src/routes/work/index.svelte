<script context="module">
  import { CategoryAPI } from "../../api/category-api";

  export async function load() {
    const categories = await CategoryAPI.getCategories();
    return { props: { categories } };
  }
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import Page from "../../lib/Page.svelte";
  import type { Category } from "$models/category";

  export let categories: Category[];
</script>

<svelte:head>
  <title>Werke</title>
</svelte:head>

<div
  class="bg-primary w-full h-170 absolute top-0 left-0 -translate-y-120 transform -skew-y-10 -z-1"
/>
<Page bodyClass="bg-background">
  <a class="text-white font-sans" href="/work">Werke</a>

  <div class="m-5" />

  <section
    class="font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"
  >
    {#each categories as workGroup}
      <article
        class="flex flex-col cursor-pointer"
        on:click={() => goto("work/" + workGroup.slug)}
      >
        <div
          class="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <img
            class="h-96 w-full object-cover"
            src={workGroup.thumbnail && workGroup.thumbnail[0].url}
            alt={workGroup.name}
          />
        </div>
        <h1 class="text-xl">{workGroup.name}</h1>
      </article>
    {/each}
  </section>
</Page>
