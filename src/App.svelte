<script>
  import Button from "@smui/button";
  import Form from "./lib/Form.svelte";
  import Result from "./lib/Result.svelte";
  import { isGenerated } from "./stores";
</script>

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
    background: linear-gradient(to bottom, #505a99, #5c66a9);
    background-image: url("/ai.jfif");
  }
</style>
