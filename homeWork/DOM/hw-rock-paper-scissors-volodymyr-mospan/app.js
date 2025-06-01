import { startMarkup } from "./js/start_markup.js";

const container = document.querySelector(".js-container");

container.insertAdjacentHTML("beforeend", startMarkup);

container.addEventListener("click", onClick);
function onClick(e) {
  console.dir(e.target.closest("button").dataset.id);
}
