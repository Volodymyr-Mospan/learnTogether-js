"use strict";
const form = document.querySelector(".form");
const resetBtn = document.querySelector(".reset-btn");
const resultDesk = document.querySelector(".result-desk");
const resultTitle = document.querySelector(".result-title");
const resultDescription = document.querySelector(".result-description");
const monthlyRepayments = document.querySelector(".monthly-repayments");
const repayOverTerm = document.querySelector(".repay-over-term");
form.addEventListener("submit", onSubmit);
resetBtn.addEventListener("click", onReset);
function onSubmit(e) {
    e.preventDefault();
    resultDesk.classList.remove("empty");
    resultDesk.classList.add("calculated");
    resultTitle.textContent = "Your results";
    resultDescription.textContent =
        "Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.";
    const form = e.target;
    const amount = form.elements.namedItem("amount")
        .valueAsNumber;
    const term = form.elements.namedItem("term")
        .valueAsNumber;
    const rate = form.elements.namedItem("rate")
        .valueAsNumber;
    const mortgageType = form.elements.namedItem("mortgageType").value;
    console.log(rate);
    const r = rate / 12 / 100;
    console.log(r);
    const months = term * 12;
    console.log(months);
    if (mortgageType === "repayment") {
        const M = amount * ((r * (1 + r) ** months) / ((1 + r) ** months - 1));
        console.log(M);
        monthlyRepayments.textContent = formatCurrency(M);
        repayOverTerm.textContent = formatCurrency(M * months);
    }
    if (mortgageType === "interest-only") {
        const M = amount * r;
        monthlyRepayments.textContent = formatCurrency(M);
        repayOverTerm.textContent = formatCurrency(M * months);
    }
}
function onReset(e) {
    form.reset();
    resultDesk.classList.remove("calculated");
    resultDesk.classList.add("empty");
    resultTitle.textContent = "Results shown here";
    resultDescription.textContent =
        "Complete the form and click “calculate repayments” to see what your monthly repayments would be.";
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