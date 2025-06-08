import { RULES } from "./js/rules.js";
import {
  icons,
  iconsKeys,
  cX,
  cY,
  R,
  container,
  controlContainer,
  counter,
} from "./js/variables.js";
import { startMarkup, resultMarkup, controlMarkup } from "./js/markup.js";

let scoreNumber = 0;
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

  const isPlayerWin = RULES[playerChoice].win.includes(choised.p2);

  container.innerHTML = resultMarkup({ icons, choised, isPlayerWin });
  container.classList.add("container-result");

  setTimeout(() => {
    if (isPlayerWin) {
      scoreNumber += 1;
      counter.textContent = scoreNumber;
    }

    controlContainer.innerHTML = controlMarkup(isPlayerWin);
    const btnPlayAgain = document.querySelector(".js-play-again");
    btnPlayAgain.addEventListener("click", handlePlayAgain);
  }, 1000);
}

function pcChoosing(playerResult) {
  const pcChoise = iconsKeys[Math.floor(Math.random() * iconsKeys.length)];

  if (playerResult === pcChoise) {
    return pcChoosing(playerResult);
  }

  return pcChoise;
}

function handlePlayAgain() {
  removeEventListener("click", handlePlayAgain);
  container.classList.remove("container-result");
  container.innerHTML = startMarkup({ icons, cX, cY, R, iconsKeys });
  controlContainer.innerHTML = "";
  choised.p1 = "";
  choised.p2 = "";
}
