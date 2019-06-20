
function calculateBill() {


    var billTotal = 0;


    function addBill(billItems) {

    var string =  billItems.split(",");

        for (var i = 0; i < string.length; i++) {
            var bill = string[i].trim();

            if (bill === "call") {
                billTotal += 2.75;

            }
            else if (bill === "sms") {
                billTotal += 0.75;
            }
        }
    }

    function displayBill() {
        return billTotal.toFixed(2);
    }

    return {
        add: addBill,
        total: displayBill,
    }
}

