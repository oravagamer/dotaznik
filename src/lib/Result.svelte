<script>
  import { fly } from "svelte/transition";
  import LinearProgress from "@smui/linear-progress";
  import { odbory } from "../stores";
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
</div>

<style>
  div {
    margin-bottom: 12em;
  }
  h2 {
    font-size: 3em;
    margin-top: 3em;
    text-align: center;
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
