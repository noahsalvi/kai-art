<script lang="ts">
  import { stores } from "@sapper/app";

  const { page } = stores();

  $: breadCrumbs = ($page.path as string).split("/").slice(1);
</script>

{JSON.stringify(breadCrumbs)}
