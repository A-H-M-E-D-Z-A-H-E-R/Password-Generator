const passwordOutput = document.querySelector("#password-output");
const copyBtn = document.querySelector("#copy-btn");
const lengthValue = document.querySelector("#length-value");
const passwordLength = document.querySelector("#password-length");
const upperCaseEl = document.querySelector("#uppercase");
const lowerCaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const strengthText = document.querySelector("#strength-text");
const strengthFill = document.querySelector("#strength-fill");
const generateBtn = document.querySelector("#generate-btn");
const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const symbolsCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "?",
  "/",
];
const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  const length = Number(passwordLength.value);
  let strengthScore = 0;
  let characterPool = [];

  if (upperCaseEl.checked) {
    characterPool.push(...uppercaseCharacters);
  }
  if (lowerCaseEl.checked) {
    characterPool.push(...lowercaseCharacters);
  }
  if (symbolsEl.checked) {
    characterPool.push(...symbolsCharacters);
  }
  if (numbersEl.checked) {
    characterPool.push(...numberCharacters);
  }
  if (characterPool.length === 0) {
    console.error("choose one at least");
    return;
  }

  if (upperCaseEl.checked) {
    strengthScore++;
  }

  if (lowerCaseEl.checked) {
    strengthScore++;
  }

  if (numbersEl.checked) {
    strengthScore++;
  }

  if (symbolsEl.checked) {
    strengthScore++;
  }

  if (length >= 12) {
    strengthScore++;
  } else if (length <= 8) {
    strengthScore--;
  }

  if (strengthScore >= 4) {
    strengthText.textContent = "strong";
    strengthFill.style.width = "100%";
    strengthFill.style.background = "#32cd32";
  } else if (strengthScore >= 3) {
    strengthText.textContent = "medium";
    strengthFill.style.width = "50%";
    strengthFill.style.background = "#db6409";
  } else {
    strengthText.textContent = "weak";
    strengthFill.style.width = "4%";
    strengthFill.style.background = "#db2727";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);

    const randomCharacter = characterPool[randomIndex];
    password += randomCharacter;
  }

  passwordOutput.value = password;
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

passwordLength.addEventListener("input", () => {
  lengthValue.textContent = passwordLength.value;
  generatePassword();
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard
    .writeText(passwordOutput.value)
    .then(() => {
      alert("password copied");
    })
    .catch(() => {
      alert("error when copy");
    });
});

upperCaseEl.addEventListener("change", () => {
  generatePassword();
});
lowerCaseEl.addEventListener("change", () => {
  generatePassword();
});
numbersEl.addEventListener("change", () => {
  generatePassword();
});
symbolsEl.addEventListener("change", () => {
  generatePassword();
});
