<script context="module" lang="ts">
  import { sotion } from "sotion";

  export async function preload({ params }) {
    sotion.setScope("fb38e374eb2c4048a443bdd52e95502d");
    const { blocks, meta: workGroupMeta } = await sotion.slugPage(
      params.workGroup
    );

    const parsedBlocks: any[] = JSON.parse(blocks);
    const tableId = parsedBlocks.find(
      (block) => block.type === "collection_view"
    )?.id;

    sotion.setScope(tableId);
    let meta = await sotion.getScope();

    return { meta, workGroupMeta, slug: params.work };
  }
</script>

<script lang="ts">
  import { fadeIn, fadeOut } from "../../../utils/pageFade";
  import { goto } from "@sapper/app";
  import Page from "../../../components/Page.svelte";

  export let meta: { Name: string; slug: string; image: { url: string }[] }[];
  export let workGroupMeta: { Name: string; slug: string };
</script>

<svelte:head>
  <title>{workGroupMeta.Name}</title>
</svelte:head>

<Page>
  <a href="/work">Werke</a> / <span>{workGroupMeta.Name}</span>

  <div class="m-5" />

  <section
    class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"
  >
    {#each meta as work}
      <article
        class="flex flex-col cursor-pointer"
        on:click={() => goto("/work/" + workGroupMeta.slug + "/" + work.slug)}
      >
        <div
          class="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <img
            class="h-96 w-full object-cover"
            src={work.image && work.image[0].url}
            alt={work.Name}
          />
        </div>
        <h1 class="text-xl">{work.Name}</h1>
      </article>
    {/each}
  </section>
</Page>
