import { episodes } from "./data/episodes.js";
const episodesList = document.querySelector(".episodes");

let arrList = [];

for (let i = 0; i < episodes.length; i++) {
  const oneItem = `
        <li>
            <label for="episode-${episodes[i].id}">
              <input type="checkbox" id="episode-${episodes[i].id}" name="episode-${episodes[i].id}" />
              <span>${episodes[i].id} - ${episodes[i].name}</span>
            </label>
        </li>
        `;

  arrList.push(oneItem);
}

episodesList.innerHTML = arrList.join("");
