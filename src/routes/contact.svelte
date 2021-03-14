<script context="module">
  export async function preload() {
    return {
      blocks: await sotion.fetchPage("7cbab3af4d124ebb8e373ff153943a76"),
    };
  }
</script>

<script>
  import { sotion, Sotion } from "sotion";
  import Page from "../components/Page.svelte";

  export let blocks;
</script>

<!-- <pre>
    {JSON.stringify(JSON.parse(blocks), null, "    ")}
</pre> -->

<Page>
  <div
    class="bg-white rounded-lg flex flex-col md:flex-row p-10 h-full justify-between"
  >
    <div class="flex flex-col">
      <Sotion {blocks} />
      <a href="kai@mäder.ch" class="secondary mt-5 md:mt-auto "
        >Email verfassen</a
      >
    </div>
    <div class="mt-5">
      <img src="images/weed.png" alt="Kai" class="w-full md:w-auto" />
    </div>
  </div>
</Page>

<style global>
  .sotion .no-page-cover-spacer {
    @apply h-0;
  }

  .sotion .page-title {
    @apply text-2xl;
  }

  .sotion .text {
    @apply text-gray;
  }
</style>
