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

function resultMarkup({ icons, choised }) {
  console.log(choised);
  const markup = `
  <div>
    <button type="button"
        class="circle ${choised.p1}-result circle-result"
        data-id="${choised.p1}"
       >
            <img src="${icons[choised.p1].src}" alt="button of ${choised.p1}">
    </button>
    <p class="description">YOU PICKED</p>
  </div>
  <div>
    <button type="button"
        class="circle ${choised.p2}-result circle-result"
        data-id="${choised.p2}"
       >
            <img src="${icons[choised.p2].src}" alt="button of ${choised.p2}">
    </button>
    <p class="description">THE HOUSE PICKED</p>
  </div>
    `;

  return markup;
}

export { startMarkup, resultMarkup };
