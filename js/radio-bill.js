var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwo = document.querySelector(".callTotalTwo")
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var totalTwo = document.querySelector(".totalTwo")
var callsTotal1 = 0;
var smsTotal1 = 0;
var totalCost1 = 0;

radioBillAddBtn.addEventListener('click',function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }
 
    if (billItemType === "call"){
        callsTotal1 += 2.75;
    }
    if (billItemType === "sms"){
        smsTotal1 += 0.75;
    }

    callTotalTwo.innerHTML = callsTotal1.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal1.toFixed(2);
    totalCost1 = callsTotal1 + smsTotal1;
    totalTwo.innerHTML = totalCost1.toFixed(2);



  
    if (totalCost1 >= 30) {
        totalTwo.classList.add("warning")

    }
    if (totalCost1 >= 50) {
       
        totalTwo.classList.add("danger")
     

    }



});
