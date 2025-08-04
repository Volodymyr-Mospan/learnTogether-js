const params = new URLSearchParams(location.search);
if (!params.has("user") || !params.has("computer")) {
  window.location.href = "./index.html";
}
const user = params.get("user");
const computer = params.get("computer");

const userImg = document.querySelector(".your-pick img");
const computerImg = document.querySelector(".computer-pick img");

const choiceToImgMap = {
  0: { src: "./images/0.png", alt: "Rock" },
  1: { src: "./images/1.png", alt: "Paper" },
  2: { src: "./images/2.png", alt: "Scissors" },
};

userImg.src = choiceToImgMap[user].src;
userImg.alt = choiceToImgMap[user].alt;
computerImg.src = choiceToImgMap[computer].src;
computerImg.alt = choiceToImgMap[computer].alt;

const playAgain = document.querySelector(".play-again");
playAgain.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const winningCombos = {
  0: { beat: "2", losesTo: "1" },
  1: { beat: "0", losesTo: "2" },
  2: { beat: "1", losesTo: "0" },
};

let winner = "";

const body = document.body;
const youWinText = document.querySelector(".you-win");
const computerWinText = document.querySelector(".computer-wins");

function checkWinner() {
  if (user === computer) {
    youWinText.textContent = computerWinText.textContent = "Нічія!";
    return;
  }
  const isUserWinn = winningCombos[user].beat === computer;
  if (isUserWinn) {
    body.classList.add("you-win");
    youWinText.textContent = "Ви перемогли";
  } else {
    body.classList.add("computer-wins");
    computerWinText.textContent = "Комп'ютер переміг!";
  }
}

checkWinner();
