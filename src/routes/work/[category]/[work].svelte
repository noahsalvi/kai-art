<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";
  import { WorkAPI } from "../../../api/work-api";
  import { onDestroy, onMount } from "svelte";
  import Images from "../../../lib/ImageViewer/Images.svelte";
  import type { Work } from "../../../models/work";
  import { CategoryAPI } from "../../../api/category-api";

  export async function load({ page }) {
    const categorySlug: string = page.params.category;
    const workSlug: string = page.params.work;
    const [categories, works] = await Promise.all([
      CategoryAPI.getCategories(),
      WorkAPI.getWorks(),
    ]);
    // Since a work can have multiple categories, we get the one from the url instead
    const category = categories.find(
      (category) => category.slug === categorySlug
    );
    const work = works.find((work) => work.slug === workSlug);
    const blocks = await sotion.fetchPage(work.id);

    return { props: { blocks, work, category } };
  }
</script>

<script lang="ts">
  import type { Category } from "../../../models/category";

  export let work: Work;
  export let category: Category;
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

  const images = work?.thumbnail?.map((image) => image.url) ?? [];
</script>

<svelte:head>
  <title>{work.name}</title>
</svelte:head>

<div class="relative h-full max-w-10xl mx-auto flex flex-col">
  <div
    class="h-10 max-w-7xl mx-auto px-5 w-full z-10 text-gray font-sans sm:px-20"
  >
    <a href="..">Werke</a> /
    <a href=".">{category.name}</a> /
    <span>{work.name}</span>
  </div>

  <!-- Decoration Blob -->
  <div
    class="absolute left-0 top-25 bg-primary h-50 w-6/10 rounded-xl md:w-2/5"
  />

  <div class="flex-grow mt-30 mx-3 sm:mx-6">
    <main
      class="relative min-h-2xl flex flex-col-reverse bg-white p-5 rounded-xl sm:p-10 md:(flex-row justify-between)"
    >
      <div class="max-w-[75ch] w-full md:mx-0">
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
