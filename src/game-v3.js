import { fromEvent, Subject } from "rxjs";
import WORDS_LIST from "./wordsList.json";

let letterRows = document.getElementsByClassName("letter-row");
const messageText = document.getElementById("message-text");
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
const deleteLetter = {
  next: (event) => {
    const { key } = event;
    if (key === "Backspace" && letterIndex !== 0) {
      let currentRow = Array.from(letterRows)[letterRowIndex];
      let letterBox = currentRow.children[letterIndex - 1];
      letterBox.textContent = "";
      letterBox.classList.remove("filled-letter");
      userAnswer.pop();
      letterIndex--;
    }
  },
};

const checkWord = {
  next: (event) => {
    if (event.key === "Enter") {
      const word = userAnswer.join("");
      const rightWordArray = Array.from(rightWord);
      if (word.length !== 5) {
        messageText.textContent = "La palabra debe tener 5 letras";
        return;
      }
      for (let index = 0; index < 5; index++) {
        let letterColor = "";
        let letterBox = Array.from(letterRows)[letterRowIndex].children[index];
        let letterPosition = Array.from(rightWord).indexOf(userAnswer[index]);
        if (letterPosition === -1) {
          letterColor = "letter-grey";
        } else {
          if (rightWordArray[index] === userAnswer[index]) {
            letterColor = "letter-green";
          } else {
            letterColor = "letter-yellow";
          }
        }
        letterBox.classList.add(letterColor);
      }

      if (userAnswer.length === 5) {
        letterIndex = 0;
        userAnswer = [];
        letterRowIndex++;
      } else {
        messageText.textContent = "La palabra debe tener 5 letras";
      }

      if (word === rightWord) {
        userWinOrLose$.next();
      }
    }
  },
};

onKeyDown$.subscribe(insertLetter);
onKeyDown$.subscribe(checkWord);
onKeyDown$.subscribe(deleteLetter);
userWinOrLose$.subscribe(() => {
  let letterRowsWinned = Array.from(letterRows)[letterRowIndex];
  for (let i = 0; i < 5; i++) {
    letterRowsWinned.children[i].classList.add("letter-green");
  }
});
