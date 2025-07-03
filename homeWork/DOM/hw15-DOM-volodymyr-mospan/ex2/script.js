import { throttle } from "./throttle.js";

let counter = 0;
const MAX_TRACES = 30;
const traces = [];

document.addEventListener("mousemove", throttle(onMouseMove, 5));

for (let i = 0; i < MAX_TRACES; i++) {
  const div = document.createElement("div");
  div.classList.add("mouseTrarce");
  div.style.top = "-100px";
  div.style.left = "-100px";
  document.querySelector("body").insertAdjacentElement("afterbegin", div);
  traces.push(div);
}

console.dir(traces);

function onMouseMove(e) {
  const trace = traces[counter];

  trace.classList.remove("opacityTrace");
  trace.style.top = `${e.clientY - 10}px`;
  trace.style.left = `${e.clientX - 10}px`;

  setTimeout(() => {
    trace.classList.add("opacityTrace");
  }, 10);

  counter = (counter + 1) % MAX_TRACES;
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .mouseTrarce {
    width: 10px;
    height: 10px;
    background-color: aquamarine;
    position: absolute;
    opacity: 1;
    transition: none; 
  }
  .mouseTrarce.opacityTrace {
    opacity: 0;
    transition: opacity 2s ease;
  }  
`);

document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
