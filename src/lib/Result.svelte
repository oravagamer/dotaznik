<script>
  import { fly } from "svelte/transition";
  import LinearProgress from "@smui/linear-progress";
  import Button from "@smui/button";
  import { odbory, isGenerated } from "../stores";
</script>

<h2>Výsledky dotazníka</h2>
<div class="center form" in:fly={{ y: -150, duration: 600 }}>
  {#each $odbory as item}
    {#if item.percentages}
      <h3>{item.full}</h3>
      <p>{item.percentages}%</p>
      <LinearProgress progress={item.percentages / 100} />
    {/if}
  {/each}
  <Button
    variant="unelevated"
    style="font-size: 1.5em; margin-top: 2em;"
    on:click={() => ($isGenerated = false)}>Vyskúšaj ešte raz</Button
  >
</div>

<style>
  div {
    margin-bottom: 6em;
  }
  h2 {
    font-size: 3em;
    text-align: center;
    color: white;
  }
  h3 {
    font-weight: 200;
    margin-bottom: 0.5em !important;
    font-size: 2em;
    text-align: center;
  }
  p {
    font-size: 1.4em;
  }
</style>
