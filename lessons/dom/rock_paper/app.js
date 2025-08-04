const buttons = document.querySelectorAll(".pick-one");

buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    const userChoise = i;
    const computerChoise = Math.floor(Math.random() * 3);

    window.location.href = `./winner.html?user=${userChoise}&computer=${computerChoise}`;
  });
});
