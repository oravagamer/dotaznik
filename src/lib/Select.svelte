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

<!-- Display the selected values -->
<p>Selected values: {selected1}, {selected2}, {selected3}</p>
