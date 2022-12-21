<script>
  import { odbory } from "../stores";
</script>

<h2>Výsledky dotazníka</h2>
<div class="center results">
  {#each $odbory as item}
    {#if item.percentages}
      <h3>{item.full}</h3>
      <p>{item.percentages}%</p>
    {/if}
  {/each}
</div>

<style>
  h2 {
    font-size: 3em;
    margin-top: 3em;
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
