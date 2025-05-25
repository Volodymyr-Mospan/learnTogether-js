import themeToggle from "./js/themeToggle.js";
import {
  originalFill,
  originalVars,
  darkFill,
  darkVars,
} from "./js/themeVariables.js";

const svgRef = document.querySelector("svg");

themeToggle({ vars: darkVars, fill: darkFill });
let isDark = true;

svgRef.addEventListener("click", onSvgClick);

function onSvgClick() {
  if (isDark) {
    themeToggle({ vars: originalVars, fill: originalFill });
    isDark = false;
  } else {
    themeToggle({ vars: darkVars, fill: darkFill });
    isDark = true;
  }
}
