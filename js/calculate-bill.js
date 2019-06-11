var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".total");

function calculateBill() {
    var billString = billStringField.value;
    var billItems = billString.split(",");
    var billTotal3 = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem3 = billItems[i].trim();
        if (billItem3 === "call") {
            billTotal3 += 2.75;

        }
        else if (billItem3 === "sms") {
            billTotal3 += 0.75;
        }
    }
    if (billTotal3 >= 20) {
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");

    }
   if (billTotal3 >= 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    }
    if(billTotal3 < 20)  {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
    }

   var roundedBillTotal = billTotal3.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBill);



