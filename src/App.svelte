<script>
  import Background from "./lib/Background.svelte";
  import Banner from "./lib/Banner.svelte";
  import Form from "./lib/Form.svelte";
  import Result from "./lib/Result.svelte";
  import { isGenerated } from "./stores";
</script>

<Background />
<Banner />
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
    margin: auto;
  }
</style>
