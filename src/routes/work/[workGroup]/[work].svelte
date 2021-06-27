<script context="module" lang="ts">
  import { sotion, Sotion } from "sotion";
  import { WorkAPI } from "../../../sotion/work-api";
  import type { Work } from "src/models/work";

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
  export let blocks;
</script>

<pre>
    {JSON.stringify(work, null, 2)}
</pre>
<Sotion {blocks} />
