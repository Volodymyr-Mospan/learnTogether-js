const width = 311;
const height = 305;
const cX = width / 2;
const cY = height / 2;
const R = 120;

const container = document.querySelector(".js-container");

let markup = "";

for (let i = 0; i < 5; i++) {
  const theta = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
  const x = cX + R * Math.cos(theta);
  const y = cY + R * Math.sin(theta);

  markup += `<div class="circle" style="left: ${x - 20}px; top: ${y - 10}px;">${
    i + 1
  }</div>`;
}
container.insertAdjacentHTML("beforeend", markup);

// for (let i = 0; i < 5; i++) {
//   const theta = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
//   const x = cX + R * Math.cos(theta);
//   const y = cY + R * Math.sin(theta);

//   const circle = document.createElement("div");
//   circle.className = "circle";
//   circle.style.left = x - 20 + "px"; // 20 — радіус кола
//   circle.style.top = y - 20 + "px";
//   circle.textContent = i + 1; // Номер вершини (не обов’язково)
//   container.appendChild(circle);
// }
