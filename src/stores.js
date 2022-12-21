import { writable } from "svelte/store";

const odbory = writable([
  {
    name: "ai",
    full: "2569 M - Umelá inteligencia",
    question: [0, 2, 3, 4],
    points: 0,
    percentages: 0,
  },
  {
    name: "it",
    full: "2569 M - Informačné a digitálne technológie",
    question: [0, 1, 4, 5, 7, 8, 9, 13],
    points: 0,
    percentages: 0,
  },
  {
    name: "prog",
    full: "2573 M - Programovanie digitálnych technológií",
    question: [0, 3, 4, 11, 12, 13, 14],
    points: 0,
    percentages: 0,
  },
  {
    name: "cukyluky",
    full: "2561 M - Informačné a sieťové technológie",
    question: [0, 1, 3, 4, 5, 6, 7, 9, 10, 11, 14],
    points: 0,
    percentages: 0,
  },
  {
    name: "eng",
    full: "2675 M - ENERGETIKA a inteligentné aplikácie",
    question: [0, 1, 3, 4, 5, 9, 10, 14],
    points: 0,
    percentages: 0,
  },
  {
    name: "ele",
    full: "2675 M - ELEKTRONICKÉ komunikačné systémy",
    question: [0, 1, 3, 4, 5, 6, 9, 10, 12, 13, 14],
    points: 0,
    percentages: 0,
  },
]);
const questions = writable([
  "Chcel by si viacej pracovat s pocitacom", // 0
  "Chcel by si pracovat s elktrinou", // 1
  "Chces sa naucit umelu inteligenciu", // 2
  "Chces za zaoberat programovanim", // 3
  "Chcel by si pracovat na Pocitacovych sietach", // 4
  "Chcel by si pracovat s nizkoprudovym", // 5
  "Chcel by si pracovat vysokoprudovym napetim", // 6
  "Chcel by si sa naucit robotiku", // 7
  "Chcel  by sa naucit 3D technologie", // 8
  "Chces pracovat s Elektronika", // 9
  "Chces pracovat s Elektrotechnikou", // 10
  "Chces sa naucit nemcinu ako druhy jazyk", // 11
  "Chces sa naucit graficky kreslit?", // 12
  "Chcel by si pracovat v programoch ADOBE", // 13
  "Chces sa naucit robit webovu stranku/aplikaciu", // 14
]);
const answers = writable(["Áno", "Skôr áno", "Neutrálne", "Skôr nie", "Nie"]);
const responses = writable([]);
const no = writable(0);
const generated = writable([]);
const isGenerated = writable(false);

export { odbory, questions, answers, responses, no, generated, isGenerated };
