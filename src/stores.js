import { writable } from "svelte/store";

const questions = writable([
  "Chcel by si viacej pracovat s pocitacom",
  "Chcel by si pracovat s elktrinou",
  "Chces sa naucit umelu inteligenciu",
  "Chces za zaoberat programovanim",
  "Chcel by si pracovat na Pocitacovych sietach",
  "Chcel by si pracovat s nizkoprudovym",
  "Chcel by si pracovat vysokoprudovym napetim",
  "Chcel by si sa naucit robotiku",
  "Chcel  by sa naucit 3D technologie",
  "Chces pracovat s Elektronika",
  "Chces pracovat s Elektrotechnikou",
  "Chces sa naucit nemcinu ako druhy jazyk",
  "Chces sa naucit graficky kreslit?",
  "Chcel by si pracovat v programoch ADOBE",
  "Chces sa naucit robit webovu stranku/aplikaciu",
]);
const answers = writable(["Áno", "Asi áno", "Neutrálne", "Skôr nie", "Nie"]);
const responses = writable([]);
const no = writable(0);

export { questions, answers, responses, no };
