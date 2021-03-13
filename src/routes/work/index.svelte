<script context="module">
  import { preload as parentPreload } from "./_layout.svelte";
  export async function preload() {
    console.log("index");

    await parentPreload.bind(this)();

    return { meta: await sotion.getScope() };
  }
</script>

<script lang="ts">
  import { sotion } from "sotion";
  import BreadCrumb from "../../components/BreadCrumb.svelte";

  export let meta: { Name: string }[];
</script>

<BreadCrumb />

{#each meta as workGroup}
  {workGroup.Name}
{/each}
