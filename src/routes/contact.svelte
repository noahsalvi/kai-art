<script context="module">
  export async function load() {
    return {
      props: {
        blocks: await sotion.fetchPage("7cbab3af4d124ebb8e373ff153943a76"),
      },
    };
  }
</script>

<script>
  import { sotion, Sotion } from "sotion";
  import Page from "../lib/Page.svelte";
  import { PERSONALITIES } from "../config";

  export let blocks;
</script>

<svelte:head>
  <title>Kontakt</title>
</svelte:head>

<div class="relative md:h-full">
  <!-- Decoration Blob -->
  <div class="-z-10 absolute right-0 bottom-0 overflow-hidden">
    <div
      class="transform translate-x-1/2 translate-y-1/2 rounded-full bg-primary h-300 w-300"
    />
  </div>

  <Page bodyClass="bg-background" class="h-full">
    <div class="pb-8 min-h-md h-full md:max-h-3xl">
      <div
        class="font-sans bg-white rounded-lg flex flex-col p-5 justify-between md:(h-full flex-row p-10)"
      >
        <div class="flex flex-col">
          <div class="md:mt-10">
            <Sotion {blocks} />
          </div>
          <a
            href="mailto:{PERSONALITIES.email}"
            class="secondary mt-5 md:mt-auto ">Email verfassen</a
          >
        </div>

        <div class="mt-5 md:(flex justify-end)">
          <img
            src="images/weed.png"
            alt="Kai"
            class="h-full w-full max-h-full md:w-auto"
          />
        </div>
      </div>
    </div>
  </Page>
</div>

<style global>
  @screen <md {
    body {
      position: relative;
    }
  }
  .sotion .no-page-cover-spacer {
    @apply h-0;
  }

  .sotion .page-title {
    @apply text-3xl;
  }

  .sotion .text {
    @apply text-gray;
  }
</style>
