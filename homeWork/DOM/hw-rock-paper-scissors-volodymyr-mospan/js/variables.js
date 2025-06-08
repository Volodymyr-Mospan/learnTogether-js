const container = document.querySelector(".js-container");
const controlContainer = document.querySelector(".js-control-container");

const icons = {
  scissors: { src: "./images/icon-scissors.svg" },
  paper: { src: "./images/icon-paper.svg" },
  rock: { src: "./images/icon-rock.svg" },
  lizard: { src: "./images/icon-lizard.svg" },
  spock: { src: "./images/icon-spock.svg" },
};

const iconsKeys = Object.keys(icons);

const width = container.getBoundingClientRect().width;
const cX = width / 2;
const cY = cX;
const R = width / 2 - 48;

export { icons, iconsKeys, cX, cY, R, container, controlContainer };
