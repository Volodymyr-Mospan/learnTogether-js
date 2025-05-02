const CORRECT_PASSWORD = "1234";
const TOTAL_FIELDS = 4;

const verificationInputs = [
  ...document.querySelectorAll('.fields > input[type="text"]'),
];

verificationInputs.forEach((input, i) => {
  input.addEventListener("keyup", (e) => {
    if (i === TOTAL_FIELDS - 1 && e.key !== "Tab") {
      verify();
      // verificationInputs[i].focus()
      return;
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && !input.value) {
      e.preventDefault();
    }
  });
});

function verify() {
  // console.log('перевірка');
  const password = verificationInputs.map((input) => input.value).join("");
  console.log(password);
  if (CORRECT_PASSWORD === password) {
    console.log("ok");
  } else {
    console.log("fail");
  }
}
