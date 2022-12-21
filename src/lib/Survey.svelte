<script>
  import { questions, answers, responses } from "../stores";

  // Create a function to update the store
  function updateResponses(newResponses) {
    responses.set(newResponses);
    console.log(newResponses);
  }

  function submit() {
    console.log($responses);
  }

  $: $responses = [...Array($questions.length).fill("")];
  $: console.log($responses);
</script>

<form on:submit|preventDefault={submit}>
  <h2>Survey</h2>
  <p>Please answer the following questions:</p>

  {#each $questions as q, i}
    <h3><span>{i + 1}</span> {q}?</h3>
    {#each $answers as a, y}
      <label
        ><input
          type="radio"
          name={`${i}${y}`}
          bind:group={$responses[i]}
          value={a}
        />
        {a}</label
      >
    {/each}
  {/each}

  <button type="submit">Submit</button>
</form>

<style>
  span {
    font-weight: lighter;
    font-size: 1.2em;
  }
  h2 {
    font-size: 4em;
    margin-top: 2em;
  }
  h3 {
    font-size: 2em;
  }
  p {
    font-size: 1.5em;
  }
</style>
