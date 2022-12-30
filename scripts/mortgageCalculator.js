function calculateMortgage() {
    const principal = document.getElementById("principal").value;
    const interest = document.getElementById("interest").value;
    const years = document.getElementById("years").value;
    const downPayment = document.getElementById("downPayment").value;
    const downPaymentPercent = document.getElementById("downPaymentPercent").value;
    const paymentFrequency = document.getElementById("paymentFrequency").value;
    const payment = document.getElementById("payment");

    const monthlyInterest = (interest / 100) / paymentFrequency;
    const numberOfPayments = years * paymentFrequency;
    const principalWithDownPayment = principal - downPayment;
    const x = Math.pow(1 + monthlyInterest, numberOfPayments);
    const monthly = (principalWithDownPayment * x * monthlyInterest) / (x - 1);

    if (isFinite(monthly)) {
      payment.value = monthly.toFixed(2);
    }
    else {
        payment.value = "";
    }
}

function downpaymentToPercent() {
    const principal = document.getElementById("principal").value;
    const downPayment = document.getElementById("downPayment").value;
    const downPaymentPercent = document.getElementById("downPaymentPercent");
    downPaymentPercent.value = (downPayment / principal * 100).toFixed(2);
    calculateMortgage();
}

function percentToDownpayment() {
    const principal = document.getElementById("principal").value;
    const downPaymentPercent = document.getElementById("downPaymentPercent").value;
    const downPayment = document.getElementById("downPayment");
    downPayment.value = (downPaymentPercent / 100 * principal).toFixed(2);
    calculateMortgage();
}

calculateMortgage();
document.getElementById("downPayment").addEventListener("input", downpaymentToPercent);
document.getElementById("downPaymentPercent").addEventListener("input", percentToDownpayment);
