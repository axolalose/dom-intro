function textBill() {
  var textTotal = 0;
  var callBill = 0;
  var smsBill = 0;

  function text(billText) {
    var availText = billText;
    if (availText === "call") {
      callBill += 2.75;
    } else if (availText === "sms") {
      smsBill += 0.75;
    }
    textTotal = callBill + smsBill;
  }
  function textColor() {
    if (textTotal >= 30 && textTotal < 50) {
      console.log("warning");
      return "warning";
    } else if (textTotal >= 50) {
      console.log("danger");
      return "danger";
    } else {
        return 'safe';
    }
    //console.log(textTotal)
  }
  
  function call() {
    return callBill.toFixed(2);
  }
  function Sms() {
    return smsBill.toFixed(2);
  }

  function textDisplay() {
    return textTotal.toFixed(2);
  }
  return {
    textBill,
    text,
    textDisplay,
    call,
    Sms,
    textColor
  };
}
