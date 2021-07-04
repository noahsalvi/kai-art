<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";
  import { WorkAPI } from "../../../api/work-api";
  import { onDestroy, onMount } from "svelte";
  import ImageViewer from "../../../lib/ImageViewer/ImageViewer.svelte";
  import Images from "../../../lib/ImageViewer/Images.svelte";
  import type { Work } from "../../../models/work";

  export async function load({ page }) {
    const workSlug: string = page.params["work"];
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

  const images = work.thumbnail.map((image) => image.url);
</script>

<svelte:head>
  <title>{work.name}</title>
</svelte:head>

<ImageViewer>
  <div class="relative h-full max-w-10xl mx-auto flex flex-col">
    <div
      class="h-10 max-w-7xl mx-auto px-5 w-full z-10 text-gray font-sans md:px-20"
    >
      <a href="/work">Werke</a> /
      <a href=".">{work.category}</a> /
      <span>{work.name}</span>
    </div>

    <div
      class="absolute left-0 top-25 bg-primary h-50 w-6/10 md:w-2/5 rounded-xl"
    />

    <div class="flex-grow mt-30 mx-3 sm:mx-6">
      <main
        class="relative min-h-2xl flex flex-col md:(flex-row justify-between) bg-white p-5 sm:p-10 rounded-xl"
      >
        <div class="max-w-[75ch] md:mx-0">
          <Sotion {blocks} />
        </div>

        <div class="m-5" />

        <div class="md:min-w-90 lg:min-w-120" />

        <div
          class="w-full h-100 md:(absolute right-10 transform -translate-y-30 h-140 w-90) lg:(h-170 w-120) rounded-lg border-8 border-primary"
        >
          <Images {images} />
        </div>
      </main>
    </div>
  </div>
</ImageViewer>

<style global>
  .sotion .no-page-cover-spacer {
    @apply h-0;
  }

  @screen md {
    .sotion .no-page-cover-spacer {
      @apply h-20;
    }
  }
</style>
