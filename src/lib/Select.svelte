<script>
  // Import the selectedValues store and destructure the selected1, selected2, and selected3 values
  import { selectedValues } from "../stores.js";
  let { selected1, selected2, selected3 } = $selectedValues;

  // Create an array of options for each select box
  let options1 = ["Option 1", "Option 2", "Option 3"];
  let options2 = ["Option A", "Option B", "Option C"];
  let options3 = ["Option X", "Option Y", "Option Z"];
</script>

<!-- Render the select boxes with their respective options and bind the selected value to the corresponding store value -->
<div>
  <select bind:value={selected1}>
    {#each options1 as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  <select bind:value={selected2}>
    {#each options2 as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  <select bind:value={selected3}>
    {#each options3 as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
<!-- Display the selected values -->
<p>Selected values: {selected1}, {selected2}, {selected3}</p>

<style>
  /* styles.css */

  /* Apply material design styles to the select element */
  select {
    display: block;
    height: 40px;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background-color: white;
    color: rgba(0, 0, 0, 0.87);
  }

  /* Apply material design styles to the options within the select element */
  select option {
    font-weight: normal;
  }

  /* Apply material design styles to the label for the select element */
  label[for^="select"] {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  /* Apply material design styles to the placeholder text in the select element */
  select::-ms-expand {
    display: none;
  }

  /* Use the ::placeholder pseudo-element to style the placeholder text */
  select::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }

  /* Use the :focus pseudo-class to style the select element when it has focus */
  select:focus {
    border-color: #2196f3;
  }

  /* Use the :disabled pseudo-class to style the select element when it is disabled */
  select:disabled {
    color: rgba(0, 0, 0, 0.38);
    border-color: rgba(0, 0, 0, 0.12);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
  }
</style>
