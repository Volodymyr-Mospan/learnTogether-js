const form = document.querySelector(".form") as HTMLFormElement;
const resetBtn = document.querySelector(".reset-btn") as HTMLButtonElement;
const resultDesk = document.querySelector(".result-desk") as HTMLDivElement;
const resultTitle = document.querySelector(".result-title") as HTMLTitleElement;
const resultDescription = document.querySelector(
  ".result-description"
) as HTMLParagraphElement;
const monthlyRepayments = document.querySelector(
  ".monthly-repayments"
) as HTMLParagraphElement;
const repayOverTerm = document.querySelector(
  ".repay-over-term"
) as HTMLParagraphElement;

form.addEventListener("submit", onSubmit);
resetBtn.addEventListener("click", onReset);

function onSubmit(e: SubmitEvent): void {
  e.preventDefault();
  resultDesk.classList.remove("empty");
  resultDesk.classList.add("calculated");
  resultTitle.textContent = "Your results";
  resultDescription.textContent =
    "Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.";

  const form = e.target as HTMLFormElement;
  const amount = (form.elements.namedItem("amount") as HTMLInputElement)
    .valueAsNumber;
  const term = (form.elements.namedItem("term") as HTMLInputElement)
    .valueAsNumber;
  const rate = (form.elements.namedItem("rate") as HTMLInputElement)
    .valueAsNumber;
  const mortgageType = (
    form.elements.namedItem("mortgageType") as RadioNodeList
  ).value as "repayment" | "interest-only";
  console.log(rate);
  const r: number = rate / 12 / 100;
  console.log(r);
  const months: number = term * 12;
  console.log(months);

  if (mortgageType === "repayment") {
    const M: number =
      amount * ((r * (1 + r) ** months) / ((1 + r) ** months - 1));
    console.log(M);
    monthlyRepayments.textContent = formatCurrency(M);
    repayOverTerm.textContent = formatCurrency(M * months);
  }

  if (mortgageType === "interest-only") {
    const M: number = amount * r;
    monthlyRepayments.textContent = formatCurrency(M);
    repayOverTerm.textContent = formatCurrency(M * months);
  }
}

function onReset(e: MouseEvent) {
  form.reset();
  resultDesk.classList.remove("calculated");
  resultDesk.classList.add("empty");
  resultTitle.textContent = "Results shown here";
  resultDescription.textContent =
    "Complete the form and click “calculate repayments” to see what your monthly repayments would be.";
}

function formatCurrency(repayment: number): string {
  return repayment.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
