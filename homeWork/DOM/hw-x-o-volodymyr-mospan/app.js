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

newGame(content);

content.addEventListener("click", onClick);

function onClick(e) {
  const elem = e.target;
  if (elem.textContent) {
    return;
  }
  elem.textContent = PLAYER[currentPlayer];
  playerSteps[currentPlayer].push(Number(elem.dataset.id));

  const isWiner = WIN_COMBINATIONS.some((combination) => {
    return combination.every((el) => {
      return playerSteps[currentPlayer].includes(el);
    });
  });

  if (isWiner) {
    alert(`${currentPlayer} is WINER`);
    newGame(content);
    return;
  }

  currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
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
}

function ai() {}
