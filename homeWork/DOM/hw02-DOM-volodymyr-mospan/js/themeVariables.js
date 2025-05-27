const originalFill = document.querySelector("svg path").getAttribute("fill");
const originalVars = {
  "--background-color": getComputedStyle(document.documentElement)
    .getPropertyValue("--background-color")
    .trim(),
  "--text-color": getComputedStyle(document.documentElement)
    .getPropertyValue("--text-color")
    .trim(),
  "--primary-dark": getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-dark")
    .trim(),
  "--highlight-color": getComputedStyle(document.documentElement)
    .getPropertyValue("--highlight-color")
    .trim(),
  "--secondary-text-color": getComputedStyle(document.documentElement)
    .getPropertyValue("--secondary-text-color")
    .trim(),
  "--bg-btn-color": getComputedStyle(document.documentElement)
    .getPropertyValue("--bg-btn-color")
    .trim(),
};

const darkFill = "#ffffff";
const darkVars = {
  "--background-color": "#1c1c1e",
  "--text-color": "#adbac7",
  "--primary-dark": "#ffffff",
  "--highlight-color": "#f6c177",
  "--secondary-text-color": "#768390",
  "--bg-btn-color": "#f6c177",
};

export { originalFill, originalVars, darkFill, darkVars };
