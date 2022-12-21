<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
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

  let mountReady = false;
  onMount(() => {
    mountReady = true;
  });

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
        if (weightResponses[i] > 0) {
          if ($odbory[y].question.includes(i)) {
            $odbory[y].points += weightResponses[i];
          }
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
    allAnswered();
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
  // Animation
</script>

{#if mountReady}
  <form
    class="form"
    on:submit|preventDefault
    in:fly={{ y: -400, duration: 600 }}
  >
    <div class="survey">
      <h2>Dotazník</h2>
      <p>Zodpovedajte nasledujúce otázky:</p>
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
    <div class="wrapper2">
      <img
        on:click={() => changeNo(1)}
        src="/prev.svg"
        alt="prev"
        width="128px"
      />
      <img
        on:click={() => changeNo(0)}
        src="/next.svg"
        alt="prev"
        width="128px"
      />
    </div>
  </form>
{/if}

<Group
  style="
    position: fixed;
    bottom: 3em;"
>
  <Button
    type="submit"
    variant="unelevated"
    style="font-size: 2em; padding: 1em; margin: 1em"
    on:click={submit}>Submit</Button
  >
</Group>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 32rem;
  }
  .wrapper2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    cursor: pointer;
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
