<script context="module">
  import { sotion } from "sotion";

  export function preload() {
    console.log("layout");
    sotion.setFetch(this.fetch).setScope("fb38e374eb2c4048a443bdd52e95502d");
  }
</script>

<slot />
