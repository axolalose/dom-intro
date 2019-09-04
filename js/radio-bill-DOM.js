var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwo = document.querySelector(".callTotalTwo")
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var totalTwo = document.querySelector(".totalTwo")

var myUserDataElem = document.querySelector(".radioData");
var myTemplateSource = document.querySelector(".userTemplate").innerHTML;
var myUserTemplate = Handlebars.compile(myTemplateSource);

var radioFact = radioBill();


// radioBtn()
    function radioBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;

    }
    radioFact.radioCosts(billItemType);

     var colorChanger = radioFact.color()

    var myUserDataHTML = myUserTemplate({
        call : radioFact.radioCall(),
        sms : radioFact.radioSms(),
        total : radioFact.radioDisplay(),
        colorChanger
    });
    myUserDataElem.innerHTML = myUserDataHTML;
  
    console.log(billItemType);
    };

radioBillAddBtn.addEventListener('click',radioBtn)


window.onload = function(){
    var userDataHTML = userTemplate({
        call : radioFact.radioCall(),
        sms : radioFact.radioSms(),
        total : radioFact.radioDisplay(),
    });
    myUserDataElem.innerHTML = userDataHTML;
}