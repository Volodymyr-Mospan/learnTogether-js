import { RULES } from "./js/rules.js";
import { startMarkup } from "./js/markup.js";
import { container, icons } from "./js/variables.js";

const choises = { p1: "", p2: "" };

container.insertAdjacentHTML("beforeend", startMarkup);

container.addEventListener("click", onClick);
function onClick(e) {
  const playerChoice = e.target.closest("button")?.dataset.id;
  if (!playerChoice) {
    return;
  }

  choises.p1 = playerChoice;
  choises.p2 = pcChoosing(playerChoice);

  console.log(RULES[playerChoice].win.includes(choises.p2));
}

function pcChoosing(playerResult) {
  const pcChoise = icons[Math.floor(Math.random() * icons.length)].class;

  if (playerResult === pcChoise) {
    return pcChoosing(playerResult);
  }

  return pcChoise;
}
