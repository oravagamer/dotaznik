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
    background: linear-gradient(
      to bottom,
      #3b4371,
      #575b89,
      #6a6f9e,
      #7d84b4,
      #9198ca
    );
    margin: 3rem;
  }
</style>
