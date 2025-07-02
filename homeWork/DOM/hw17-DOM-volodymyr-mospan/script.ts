const resultDesk = document.querySelector(".result-desk") as HTMLDivElement;
const monthlyRepayments = document.querySelector(
  ".monthly-repayments"
) as HTMLParagraphElement;
const repayOverTerm = document.querySelector(
  ".repay-over-term"
) as HTMLParagraphElement;
const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", onSubmit);

function onSubmit(e: SubmitEvent): void {
  e.preventDefault();
  resultDesk.classList.remove("empty");
  resultDesk.classList.add("calculated");

  const form = e.target as HTMLFormElement;
  const amount = (form.elements.namedItem("amount") as HTMLInputElement)
    .valueAsNumber;
  const term = (form.elements.namedItem("term") as HTMLInputElement)
    .valueAsNumber;
  const rate = (form.elements.namedItem("rate") as HTMLInputElement)
    .valueAsNumber;
  const mortgageType = (
    form.elements.namedItem("mortgageType") as RadioNodeList
  ).value;

  const P: number = amount;
  const r: number = rate / 12 / 100;
  const n: number = term * 12;
  const M: number = P * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));

  monthlyRepayments.textContent = formatCurrency(M);
  repayOverTerm.textContent = formatCurrency(M * n);
  //   monthlyRepayments.textContent = `${String(M.toFixed(2))}`;
  //   repayOverTerm.textContent = `${String((M * n).toFixed(2))}`;

  console.log("Amount:", P);
  console.log("r", r);
  console.log("n:", n);
  console.log("Mortgage Type:", mortgageType);
}

function formatCurrency(repayment: number): string {
  return repayment.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
