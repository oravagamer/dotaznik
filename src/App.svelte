<script>
  import Select from "./lib/Survey.svelte";
</script>

<main>
  <Select />
</main>

<style>
  main {
    display: flex;
    align-items: center;
    min-height: inherit;
    flex-direction: column;
  }
  :global(body) {
    background: linear-gradient(to bottom, #505a99, #5c66a9);
    margin: 3rem;
  }
</style>
