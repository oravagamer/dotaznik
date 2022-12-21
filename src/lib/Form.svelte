<script>
  import Radio from "@smui/radio";
  import Button, { Group } from "@smui/button";
  import { questions, answers, responses, no } from "../stores";
  import "./radio.css";

  function submit() {
    console.log($responses);
  }

  function changeNo(type) {
    if (type == 0) {
      if ($no >= 14) {
        return;
      }
      $no += 1;
    } else {
      if ($no <= 0) {
        return;
      }
      $no -= 1;
    }
  }

  $: $responses = [...Array($questions.length).fill("")];
  // TODO:
  // Bigger buttons
  // Fix width
  // Animation
  // Algorithm
</script>

<form on:submit|preventDefault>
  <div class="survey">
    <h2>Survey</h2>
    <p>Please answer the following questions:</p>
  </div>

  <div class="wrapper">
    <h3><span>{$no + 1}</span> {$questions[$no]}?</h3>
    {#each $answers as a, y}
      <div>
        <Radio name={`${no}${y}`} bind:group={$responses[$no]} value={a} />
        <span>
          {a}
        </span>
      </div>
    {/each}
  </div>
</form>
<Group
  style="
    position: fixed;
    bottom: 3em;"
>
  <Button
    type="button"
    style="font-size: 2em; padding: 1em; margin: 1em"
    variant="unelevated"
    on:click={() => changeNo(1)}>Prev</Button
  >
  <Button
    type="button"
    variant="unelevated"
    style="font-size: 2em; padding: 1em; margin: 1em"
    on:click={() => changeNo(0)}>Next</Button
  >
  <Button
    type="submit"
    variant="unelevated"
    style="font-size: 2em; padding: 1em; margin: 1em"
    on:click={submit}>Submit</Button
  >
</Group>

<style>
  form {
    display: flex;
    flex-direction: column;
    row-gap: 3em;
    padding: 4em;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 4em;
    max-width: 32rem;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 32rem;
  }
  span {
    font-weight: lighter;
    font-size: 1.2em;
  }
  .survey {
    margin-bottom: 5em;
  }
  h2 {
    font-size: 4em;
    margin-top: 0;
    margin-bottom: 6px;
  }
  h3 {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.5em;
    margin: 0;
  }
</style>
