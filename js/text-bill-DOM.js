var callsTotalElem = document.querySelector(".callTotalOne")
var textTotalAddBtn = document.querySelector(".addToBillBtn")
var billTypeText = document.querySelector(".billTypeText")
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne")

var userDataElem = document.querySelector(".userData");
var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
 var textFact = textBill();


add()
function add(){
    var billTypeEntered = billTypeText.value;
    textFact.text(billTypeEntered);
    // console.log(billTypeEntered)

    var colors = textFact.textColor();
    console.log(colors);

    var userDataHTML = userTemplate({
        call : textFact.call(),
        sms : textFact.Sms(),
        total : textFact.textDisplay(),
        colors
    });
    userDataElem.innerHTML = userDataHTML;
}

    textTotalAddBtn.addEventListener('click',add)

    // window.onload = function(){
    //     var userDataHTML = userTemplate({
    //         call : textFact.call(),
    //         sms : textFact.Sms(),
    //         total : textFact.textDisplay(),
    //         colors
    //     });
    //     userDataElem.innerHTML = userDataHTML;
    // }
    



