<script>
  import Select from "./lib/Select.svelte";
</script>

<main>
  <Select />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: inherit;
  }
  :global(#app) {
    display: block;
    min-height: inherit;
  }
</style>
