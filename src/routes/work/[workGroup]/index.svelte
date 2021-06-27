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
  import { WorkAPI } from "../../../sotion/work-api";
  import { CategoryAPI } from "../../../sotion/category-api";
  import type { Category } from "src/models/category";
  import type { Work } from "src/models/work";

  export let works: Work[];
  export let category: Category;
</script>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>

<Page>
  <a href="/work">Werke</a> / <span>{category.name}</span>

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
