export default function themeToggle({ vars, fill }) {
  const styles = document.documentElement.style;
  const path = document.querySelector("svg path");

  path.setAttribute("fill", fill);
  for (const key in vars) {
    styles.setProperty(key, vars[key]);
  }
}
