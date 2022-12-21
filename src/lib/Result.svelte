<script>
  import LinearProgress from "@smui/linear-progress";
  import { odbory } from "../stores";
</script>

<h2>Výsledky dotazníka</h2>
<div class="center form">
  {#each $odbory as item}
    {#if item.percentages}
      <h3>{item.full}</h3>
      <p>{item.percentages}%</p>
      <LinearProgress progress={item.percentages / 100} />
      <br />
    {/if}
  {/each}
</div>

<style>
  div {
    margin-bottom: 6em;
  }
  h2 {
    font-size: 3em;
    margin-top: 3em;
  }
  h3 {
    font-weight: 200;
    margin: 1em 0 !important;
    font-size: 2em;
  }
  p {
    font-size: 1.4em;
  }
</style>
