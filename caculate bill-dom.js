
    var billString = billStringField.value;



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


calculateBtn.addEventListener('click', calculateBill);