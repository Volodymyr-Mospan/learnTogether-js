const PLAYER = {
  p1: "X",
  p2: "0",
};
const content = document.querySelector(".js-content");
let currentPlayer = "p1";
const playerSteps = {
  p1: [],
  p2: [],
};

let markup = "";
for (let i = 0; i < 9; i++) {
  markup += `<div class="item" data-id="${i + 1}"></div>`;
}
content.insertAdjacentHTML("beforeend", markup);

content.addEventListener("click", onClick);

function onClick(e) {
  const elem = e.target;
  heanleStep(currentPlayer, e);

  function heanleStep(player, e) {
    if (elem.textContent) {
      return;
    }

    playerSteps[player].push(elem.dataset.id);

    elem.textContent = PLAYER[player];
    currentPlayer = player === "p1" ? "p2" : "p1";
  }
}
