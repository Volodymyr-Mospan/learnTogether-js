import themeToggle from "./js/themeToggle.js";
import {
  originalFill,
  originalVars,
  darkFill,
  darkVars,
} from "./js/themeVariables.js";

const svgRef = document.querySelector("svg");

themeToggle(darkVars, darkFill);
let isDark = true;

svgRef.addEventListener("click", onSvgClick);

function onSvgClick() {
  if (isDark) {
    themeToggle(originalVars, originalFill);
    isDark = false;
  } else {
    themeToggle(darkVars, darkFill);
    isDark = true;
  }
}
