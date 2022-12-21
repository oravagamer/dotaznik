<script>
  import Radio from "@smui/radio";
  import Button, { Group } from "@smui/button";
  import {
    odbory,
    questions,
    answers,
    responses,
    no,
    isGenerated,
  } from "../stores";
  import "./radio.css";

  function getWeight(response) {
    switch (response) {
      case "Áno":
        return 1;
      case "Skôr áno":
        return 0.5;
      case "Neutrálne":
        return 0;
      case "Skôr nie":
        return -0.5;
      case "Nie":
        return -1;
    }
  }

  function allAnswered() {
    for (let i = 0; i < $responses.length; i++) {
      if ($responses[i] == "") {
        alert("Prosím zodpovedaj všetky otázky.");
        $isGenerated = false;
        break;
      }
    }
  }

  function getPercentages() {
    for (let i = 0; i < $odbory.length; i++) {
      $odbory[i].percentages =
        Math.round(
          ($odbory[i].points / $odbory[i].question.length) * 100 * 100
        ) / 100;
    }
  }

  function submit() {
    const weightResponses = $responses.map((r) => getWeight(r));
    for (let i = 0; i < weightResponses.length; i++) {
      for (let y = 0; y < $odbory.length; y++) {
        if ($odbory[y].question.includes(i)) {
          $odbory[y].points += weightResponses[i];
        }
      }
    }
    getPercentages();
    $odbory.sort((a, b) => {
      if (a.percentages < b.percentages) {
        return 1;
      }
      if (a.percentages > b.percentages) {
        return -1;
      }
      return 0;
    });
    $isGenerated = true;
    // allAnswered();
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
  // Fix width
  // Animation
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
