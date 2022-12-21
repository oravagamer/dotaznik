<script>
  import Button from "@smui/button";
  import Banner from "./lib/Banner.svelte";
  import Form from "./lib/Form.svelte";
  import Result from "./lib/Result.svelte";
  import { isGenerated } from "./stores";
</script>

<Banner />
<main>
  {#if !$isGenerated}
    <Form />
  {:else}
    <Result />
    <div
      style="
    position: fixed;
    bottom: 3em;"
    >
      <Button
        type="submit"
        variant="unelevated"
        style="font-size: 1.5em; padding: 1em; margin: 1em"
        on:click={() => ($isGenerated = false)}>Vyskúšaj ešte raz</Button
      >
    </div>
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
    background: rgb(23, 18, 116);
    background: linear-gradient(
      180deg,
      rgba(23, 18, 116, 1) 0%,
      rgba(26, 68, 156, 1) 100%
    );
  }
</style>
