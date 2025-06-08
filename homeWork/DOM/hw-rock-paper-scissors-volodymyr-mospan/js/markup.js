function startMarkup({ icons, cX, cY, R, iconsKeys }) {
  let markup = "";

  iconsKeys.forEach((icon, i) => {
    const theta = -Math.PI / 2 + i * ((2 * Math.PI) / iconsKeys.length);
    const x = cX + R * Math.cos(theta);
    const y = cY + R * Math.sin(theta);

    markup += `
    <button type="button"
        class="circle ${icon}" 
        data-id="${icon}"
        style="
            left: ${x - 48}px; 
            top: ${y - 48}px
        ">
            <img src="${icons[icon].src}" alt="button of ${icon}">
    </button>`;
  });
  return markup;
}

function resultMarkup({ icons, choised, isPlayerWin }) {
  // console.log(choised);
  return `
  <div>
    <div
        class="circle ${choised.p1}-result circle-result"
        data-id="${choised.p1}"
       >
            <img src="${icons[choised.p1].src}" alt="button of ${choised.p1}">
            ${
              isPlayerWin
                ? '<div class="riple "></div><div class="riple riple-1 "></div><div class="riple riple-2 "></div>'
                : ""
            }
    </div>
              
    <p class="description">YOU PICKED</p>
  </div>
  <div>
    <div
        class="circle ${choised.p2}-result circle-result"
        data-id="${choised.p2}"
       >
            <img src="${icons[choised.p2].src}" alt="button of ${choised.p2}">
            ${
              isPlayerWin
                ? ""
                : '<div class="riple "></div><div class="riple riple-1 "></div><div class="riple riple-2 "></div>'
            }
    </div>
    <p class="description">THE HOUSE PICKED</p>
  </div>
    `;
}

function controlMarkup(isPlayerWin) {
  return `
    <p class="js-text-result text-result">${
      isPlayerWin ? "YOU WIN" : "YOU LOSE"
    }</p>
      <button type="button" class="js-play-again btn-play-again">
        PLAY AGAIN
      </button>
        `;
}

export { startMarkup, resultMarkup, controlMarkup };
