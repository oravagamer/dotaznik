<script>
  import Select from "./lib/Select.svelte";
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
  :global(#app) {
    display: block;
    min-height: inherit;
  }
</style>
