const PLAYER = { p1: "X", p2: "0" };
const WIN_COMBINATIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [7, 5, 3],
  [1, 5, 9],
];

const content = document.querySelector(".js-content");
let currentPlayer = "";
let playerSteps = {
  p1: [],
  p2: [],
};
let stepCounter = 0;

newGame(content);

content.addEventListener("click", onClick);

async function onClick(e) {
  console.log("start P1");
  const allElements = e.currentTarget.children;
  const elem = e.target;
  if (elem.textContent) return;

  elem.textContent = PLAYER[currentPlayer];
  playerSteps[currentPlayer].push(Number(elem.dataset.id));

  await delay(200);
  if (checkWinner(currentPlayer)) return;
  if (checkStepCounter()) return;
  changePlayer();

  content.removeEventListener("click", onClick);
  await delay(500);
  if (stepCounter < 9) ai(allElements);
}

function newGame(vraper) {
  let markup = "";
  for (let i = 0; i < 9; i++) {
    markup += `<div class="item" data-id="${i + 1}"></div>`;
  }
  vraper.innerHTML = markup;

  currentPlayer = "p1";
  playerSteps = {
    p1: [],
    p2: [],
  };
  stepCounter = 0;
}

function checkWinner(currentPlayer) {
  const isWinner = WIN_COMBINATIONS.some((combination) => {
    return combination.every((el) => {
      return playerSteps[currentPlayer].includes(el);
    });
  });

  if (isWinner) {
    alert(`${currentPlayer} is WINER`);
    newGame(content);
  }
  return isWinner;
}

function checkStepCounter() {
  stepCounter += 1;
  if (stepCounter === 9) {
    alert(`Nobody wins ;)`);
    newGame(content);
    return true;
  }
}

function changePlayer() {
  currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
}

async function ai(allElements) {
  const position = Math.floor(Math.random() * 9);
  const elem = allElements[position];

  if (elem.textContent) {
    return ai(allElements);
  }
  content.addEventListener("click", onClick);

  console.log("start AI");

  elem.textContent = PLAYER[currentPlayer];
  playerSteps[currentPlayer].push(Number(elem.dataset.id));

  await delay(100);
  if (checkWinner(currentPlayer)) return;
  if (checkStepCounter()) return;
  changePlayer();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
