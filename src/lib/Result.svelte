<script>
  import { odbory } from "../stores";
  import LinearProgress from "@smui/linear-progress";
</script>

<h2>Výsledky dotazníka</h2>
<div class="center results">
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

  .results {
    display: flex;
    flex-direction: column;
    padding: 4em;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 4em;
    max-width: 32rem;
  }
  .results > * {
    margin: 0;
  }
</style>
