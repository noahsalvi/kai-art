<script>
  import successkid from "images/successkid.jpg";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1
  class="bg-green-300 ring ring-offset-gray-600 text-xl ml-11 hover:(bg-black animate-pulse)"
>
  Great success!
</h1>

<figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <strong
    >Try editing this file (src/routes/index.svelte) to test live reloading.</strong
  >
</p>

<style>
  h1 {
    margin-top: 24px;
  }

  :global(body) {
    background: gray;
  }
</style>
