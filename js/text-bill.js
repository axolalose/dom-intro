var callsTotal = 0;
var smsTotal = 0;
var callsTotalElem = document.querySelector(".callTotalOne")
var textTotalAddBtn = document.querySelector(".addToBillBtn")
var billTypeText = document.querySelector(".billTypeText")
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne")
var totalCost = 0;

textTotalAddBtn.addEventListener('click',function(){
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }
    console.log(callsTotal)
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost > 30) {
        totalCostElem.classList.add("warning")
        totalCostElem.classList.remove("danger")

    }
    if (totalCost > 50) {
        totalCostElem.classList.remove("warning")
        totalCostElem.classList.add("danger")

    }
})


