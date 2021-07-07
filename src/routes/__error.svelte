<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  import Page from "../lib/Page.svelte";
  export let title;
</script>

<Page>
  <h1 class="font-bold font-sans text-xl text-red-500">{title}</h1>
</Page>
