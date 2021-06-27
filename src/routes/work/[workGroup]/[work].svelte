<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";
  import { WorkAPI } from "../../../api/work-api";
  import type { Work } from "$models/work";
  import { onDestroy, onMount } from "svelte";

  export async function load({ page }) {
    const workSlug = page.params.work;
    const works = await WorkAPI.getWorks();
    const work = works.find((work) => work.slug === workSlug);
    const blocks = await sotion.fetchPage(work.id);

    return { props: { blocks, work } };
  }
</script>

<script lang="ts">
  export let work: Work;
  export let blocks: string;

  const backgroundColor = "bg-background";
  let mounted = false;

  onMount(async () => {
    document.body.classList.add(backgroundColor);
    mounted = true;
  });

  onDestroy(() => {
    if (mounted) document.body.classList.remove(backgroundColor);
  });
</script>

<div class="h-full max-w-10xl mx-auto">
  <div class="h-10 max-w-7xl mx-auto px-5 sm:px-20 z-10 text-gray font-sans">
    <a href="/work">Werke</a> /
    <a href=".">{work.category}</a> /
    <span>{work.name}</span>
  </div>

  <div class="h-full -mt-10 flex flex-col font-sans">
    <main
      class="relative flex-grow flex -md:flex-col justify-between mt-30 bg-white mx-6 p-10 rounded"
    >
      <div class="mx-auto max-w-[75ch]">
        <Sotion {blocks} />
      </div>

      <div class="m-5" />

      <div class="md:min-w-90 lg:min-w-120" />

      <div
        class="w-full md:(absolute right-10 transform -translate-y-30 h-140 w-90) lg:(h-170 w-120) rounded-lg border-8 border-primary"
      >
        <img
          class="min-w-full min-h-full object-cover"
          src={work.thumbnail && work.thumbnail[0].url}
          alt={work.name}
        />
      </div>
    </main>
  </div>
</div>

<style global>
  .sotion .no-page-cover-spacer {
    @apply h-0;
  }

  @screen md {
    .sotion .no-page-cover-spacer {
      @apply h-20;
    }
  }

  .sotion .page-title {
    @apply font-bold text-3xl text-primary;
  }

  .sotion .text {
    @apply text-gray text-lg;
  }
</style>
