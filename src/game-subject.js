import { fromEvent, Subject } from "rxjs";
import WORDS_LIST from "./wordsList.json";

let letterRows = document.getElementsByClassName("letter-row");
const onKeyDown$ = fromEvent(document, "keydown");
let letterIndex = 0;
let letterRowIndex = 0;
let userAnswer = []; // [A, B, C, D, E]
const getRandomWord = () =>
  WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];
let rightWord = getRandomWord();
console.log(rightWord);
const userWinOrLose$ = new Subject();

const insertLetter = {
  next: (event) => {
    const { key } = event;
    if (key.length === 1 && key.match(/[a-z]/i)) {
      let letterBox = Array.from(letterRows)[letterRowIndex].children[letterIndex];
      letterBox.textContent = key.toUpperCase();
      letterBox.classList.add("filled-letter");
      userAnswer.push(key.toUpperCase());
      letterIndex++;
    }
  },
};

const checkWord = {
  next: (event) => {
    if (event.key === "Enter") {
      const word = userAnswer.join("");
      if (word === rightWord) {
        userWinOrLose$.next();
      }
    }
  },
};

onKeyDown$.subscribe(insertLetter);
onKeyDown$.subscribe(checkWord);
userWinOrLose$.subscribe(() => {
  let letterRowsWinned = Array.from(letterRows)[letterRowIndex];
  for (let i = 0; i < 5; i++) {
    letterRowsWinned.children[i].classList.add("letter-green");
  }
});
