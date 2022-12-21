<script>
  let count = 0;
</script>

<main>
  <button on:click={() => count++}>click me {count}</button>
</main>

<style>
  main {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
</style>
