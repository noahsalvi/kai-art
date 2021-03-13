<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";

  export async function preload({ params }) {
    let { blocks } = await sotion.slugPage(params.work);
    const parsedBlocks: any[] = JSON.parse(blocks);
    const tableId = parsedBlocks.find(
      (block) => block.type === "collection_view"
    ).id;

    sotion.setScope(tableId);
    let meta = await sotion.getScope();

    return { meta, blocks };
  }
</script>

<script lang="ts">
  export let meta: { Name: string; image: { url: string }[] }[];
  export let blocks;
</script>

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
