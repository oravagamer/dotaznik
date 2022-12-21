<script>
  import Form from "./lib/Form.svelte";
</script>

<main>
  <Form />
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
  }
</style>
