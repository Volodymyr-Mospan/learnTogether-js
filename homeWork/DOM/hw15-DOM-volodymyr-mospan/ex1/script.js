const balloon = document.querySelector(".balloon");
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;
let balloonSize = 20;

document.addEventListener("keyup", onKeyUp);

function onKeyUp(e) {
  //   console.log(e);

  if (e.key === "ArrowUp") {
    balloonSize *= 1.1;
    balloon.style.fontSize = `${balloonSize}px`;
  }

  if (balloonSize > viewportHeight / 3 || balloonSize > viewportWidth / 3) {
    balloon.textContent = "✨";
    document.removeEventListener("keyup", onKeyUp);
  }
}
