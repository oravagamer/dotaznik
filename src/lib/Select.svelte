<script>
  import { selectedOption } from "../stores";

  function handleChange(event) {
    $selectedOption.set(event.target.value);
  }
</script>

<form>
  <label>
    <input
      type="radio"
      name="option"
      value="option1"
      on:change={handleChange}
    />
    Option 1
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="option"
      value="option2"
      on:change={handleChange}
    />
    Option 2
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="option"
      value="option3"
      on:change={handleChange}
    />
    Option 3
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="option"
      value="option4"
      on:change={handleChange}
    />
    Option 4
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="option"
      value="option5"
      on:change={handleChange}
    />
    Option 5
  </label>
</form>
