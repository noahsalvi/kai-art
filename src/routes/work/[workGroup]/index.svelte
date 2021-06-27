<script context="module" lang="ts">
  export async function load({ page }) {
    // TODO wrap api calls with Promise.all
    const categories = await CategoryAPI.getCategories();
    const category = categories.find(
      (category) => category.slug === page.params.workGroup
    );

    let works = await WorkAPI.getWorks();
    works = works.filter((work) => work.category?.includes(category.name));

    return { props: { category, works, slug: page.params.work } };
  }
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import Page from "../../../lib/Page.svelte";
  import { WorkAPI } from "../../../api/work-api";
  import { CategoryAPI } from "../../../api/category-api";
  import type { Category } from "$models/category";
  import type { Work } from "$models/work";
  import { onDestroy, onMount } from "svelte";

  export let works: Work[];
  export let category: Category;
</script>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>

<div
  class="-z-10 h-250 w-250 bg-primary absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full"
/>
<Page bodyClass="bg-background">
  <div class="text-gray font-sans">
    <a href="/work">Werke</a> / <span>{category.name}</span>
  </div>

  <div class="m-5" />

  <section
    class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"
  >
    {#each works as work}
      <article
        class="flex flex-col cursor-pointer"
        on:click={() => goto("/work/" + category.slug + "/" + work.slug)}
      >
        <div
          class="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <img
            class="h-96 w-full object-cover"
            src={work.thumbnail && work.thumbnail[0].url}
            alt={work.name}
          />
        </div>
        <h1 class="text-xl">{work.name}</h1>
      </article>
    {/each}
  </section>
</Page>
