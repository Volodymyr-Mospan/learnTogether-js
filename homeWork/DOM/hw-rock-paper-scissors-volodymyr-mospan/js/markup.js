import { icons, cX, cY, R } from "./variables.js";

let startMarkup = "";

icons.forEach((icon, i) => {
  const theta = -Math.PI / 2 + i * ((2 * Math.PI) / icons.length);
  const x = cX + R * Math.cos(theta);
  const y = cY + R * Math.sin(theta);

  startMarkup += `
    <button type="button"
        class="circle ${icon.class}" 
        data-id="${icon.class}"
        style="
            left: ${x - 48}px; 
            top: ${y - 48}px
        ">
            <img src="${icon.src}" alt="button of ${icon.class}">
    </button>`;
});

export { startMarkup };
