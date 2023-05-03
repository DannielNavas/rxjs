import { fromEvent } from "rxjs";

let letterRows = document.getElementsByClassName("letter-row");
const onKeyDown$ = fromEvent(document, "keydown");
let letterIndex = 0;
let letterRowIndex = 0;

const insertLetter = {
  next: (event) => {
    const { key } = event;
    if (key.length === 1 && key.match(/[a-z]/i)) {
      let letterBox = Array.from(letterRows)[letterRowIndex].children[letterIndex];
      letterBox.textContent = key.toUpperCase();
      letterBox.classList.add("filled-letter");
      letterIndex++;
      if (letterIndex === 5) {
        letterIndex = 0;
        letterRowIndex++;
      }
      if (letterRowIndex === 6) {
        letterRowIndex = 0;
      }
    }
  },
};

onKeyDown$.subscribe(insertLetter);
