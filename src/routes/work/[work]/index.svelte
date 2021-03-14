<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";

  export async function preload({ params }) {
    sotion.setScope("fb38e374eb2c4048a443bdd52e95502d");
    const { blocks } = await sotion.slugPage(params.work);
    const parsedBlocks: any[] = JSON.parse(blocks);
    const tableId = parsedBlocks.find(
      (block) => block.type === "collection_view"
    )?.id;

    sotion.setScope(tableId);
    let meta = await sotion.getScope();

    return { meta, slug: params.work };
  }
</script>

<script lang="ts">
  import { fadeIn, fadeOut } from "../../../utils/pageFade";

  export let meta: { Name: string; image: { url: string }[] }[];
  export let slug: string;
</script>

<main class="max-w-7xl mx-auto px-20" in:fadeIn out:fadeOut>
  <a href="/work">Werke</a> / <a href="">{slug}</a>

  <div class="m-5" />

  <div class="grid grid-cols-3 auto-cols-auto gap-10">
    {#each meta as workGroup}
      <article class="flex flex-col h-96 overflow-hidden">
        <div class="flex-1 flex-grow bg-gray">
          <img
            class=" object-cover rounded"
            src={workGroup.image[0].url}
            alt={workGroup.Name}
          />
        </div>

        <h1 class="flex-1 font-medium text-3xl">{workGroup.Name}</h1>
      </article>
    {/each}
  </div>
</main>
