const container = document.querySelector(".js-container");

const icons = [
  { src: "./images/icon-scissors.svg", class: "scissors" },
  { src: "./images/icon-paper.svg", class: "paper" },
  { src: "./images/icon-rock.svg", class: "rock" },
  { src: "./images/icon-lizard.svg", class: "lizard" },
  { src: "./images/icon-spock.svg", class: "spock" },
];

const width = container.getBoundingClientRect().width;
const cX = width / 2;
const cY = cX;
const R = width / 2 - 48;

export { icons, cX, cY, R, container };
