<script>
  import Form from "./lib/Form.svelte";
  import Result from "./lib/Result.svelte";
  import { isGenerated } from "./stores";
</script>

<main>
  {#if !$isGenerated}
    <Form />
  {:else}
    <Result />
  {/if}
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
