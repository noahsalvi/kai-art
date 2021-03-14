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
  <div class="bg-white rounded-lg flex p-10 h-full">
    <div class="flex-flex-col">
      <Sotion {blocks} />
      <a href="kai@mäder.ch" class="secondary">Email verfassen</a>
    </div>
    <div>
      <img src="" alt="" />
    </div>
  </div>
</Page>

<style global>
  .sotion .page-title {
    @apply text-2xl;
  }

  .sotion .text {
    @apply text-gray;
  }
</style>
