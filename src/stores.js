import { writable } from "svelte/store";

// Create the store and set the initial values
export const selectedValues = writable({
  selected1: "Option 1",
  selected2: "Option A",
  selected3: "Option X",
});
