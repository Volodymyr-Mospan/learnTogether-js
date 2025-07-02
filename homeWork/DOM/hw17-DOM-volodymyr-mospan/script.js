"use strict";
const resultDesk = document.querySelector(".result-desk");
const monthlyRepayments = document.querySelector(".monthly-repayments");
const repayOverTerm = document.querySelector(".repay-over-term");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    resultDesk.classList.remove("empty");
    resultDesk.classList.add("calculated");
    const form = e.target;
    const amount = form.elements.namedItem("amount")
        .valueAsNumber;
    const term = form.elements.namedItem("term")
        .valueAsNumber;
    const rate = form.elements.namedItem("rate")
        .valueAsNumber;
    const mortgageType = form.elements.namedItem("mortgageType").value;
    const P = amount;
    const r = rate / 12 / 100;
    const n = term * 12;
    const M = P * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
    monthlyRepayments.textContent = formatCurrency(M);
    repayOverTerm.textContent = formatCurrency(M * n);
    //   monthlyRepayments.textContent = `${String(M.toFixed(2))}`;
    //   repayOverTerm.textContent = `${String((M * n).toFixed(2))}`;
    console.log("Amount:", P);
    console.log("r", r);
    console.log("n:", n);
    console.log("Mortgage Type:", mortgageType);
}
function formatCurrency(repayment) {
    return repayment.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}
//# sourceMappingURL=script.js.map