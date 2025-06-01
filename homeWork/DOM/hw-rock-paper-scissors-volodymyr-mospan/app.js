import { RULES } from "./js/rules.js";
import { icons, iconsKeys, cX, cY, R, container } from "./js/variables.js";
import { startMarkup, resultMarkup } from "./js/markup.js";

const choised = { p1: "", p2: "" };

container.innerHTML = startMarkup({ icons, cX, cY, R, iconsKeys });

container.addEventListener("click", onClick);
function onClick(e) {
  const playerChoice = e.target.closest("button")?.dataset.id;
  if (!playerChoice) {
    return;
  }

  choised.p1 = playerChoice;
  choised.p2 = pcChoosing(playerChoice);

  // const isPlayerWin = RULES[playerChoice].win.includes(choised.p2);

  container.innerHTML = resultMarkup({ icons, choised });
  container.classList.add("container-result");
}

function pcChoosing(playerResult) {
  const pcChoise = iconsKeys[Math.floor(Math.random() * iconsKeys.length)];

  if (playerResult === pcChoise) {
    return pcChoosing(playerResult);
  }

  return pcChoise;
}
