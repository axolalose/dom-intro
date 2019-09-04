function radioBill(){
    var radioTotal = 0;
    var callRadio = 0;
    var smsRadio = 0;

    function radioCosts(billRadio){
        var updated = billRadio.split(",")
            for(var i=0; i<updated.length; i++){
                var availRadio = updated[i].trim();
                if (availRadio === "call") {
                    callRadio += 2.75;
                }
                else if(availRadio === "sms") {
                    smsRadio += 0.75;

                } 

            }
            radioTotal = callRadio + smsRadio

    }
    function color(){
        if(radioTotal >= 30 && radioTotal < 50) {
            console.log("warning")
            return "warning";
    
        }
      else if (radioTotal >= 50) {      
            console.log("danger");            
            return "danger";           
        }
    }

    function radioCall(){
        return callRadio.toFixed(2);
    }
    function radioSms(){
        return smsRadio.toFixed(2);
    }

function radioDisplay() {
    return radioTotal.toFixed(2);
}
return{
        radioBill,
        radioCosts,
        radioDisplay,
        radioCall,
        radioSms,
        color
    }
}