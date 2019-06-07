
// get a reference to the sms or call radio buttons

// get refences to all the settings fields
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
var callCostSetting = document.querySelector(".callCostSetting")
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var totalElementSettings = document.querySelector(".totalSettings")
var smsTotalSetting = document.querySelector(".smsTotalSettings")
var callTotalSetting = document.querySelector(".callTotalSettings")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

//get a reference to the add button
var SettingsBtn = document.querySelector(".SettingsBtn")
var smsTotalSettings = 0;
var callTotalSettings = 0;
var callCostSet = 0;
var smsCostSet = 0;
var warnLevel = 0;
var critLevel = 0;
var totalSettings = 0;

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettingsBtn")

// create a variables that will keep track of all the settings
SettingsBtn.addEventListener('click', function () {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingsBtn) {
        var billItemType = checkedSettingsBtn.value;
    }

    if (billItemType === "call") {
        callTotalSettings += callCostSet;
    }
    if (billItemType === "sms") {
        smsTotalSettings += smsCostSet;
    }
    console.log(callTotalSettings);
    console.log(smsTotalSettings);

    callTotalSetting.innerHTML = callTotalSettings.toFixed(2);
    smsTotalSetting.innerHTML = smsTotalSettings.toFixed(2);
    totalSettings = callTotalSettings + smsTotalSettings;
    //console.log(totalCost)
    totalElementSettings.innerHTML = totalSettings.toFixed(2);
   
    if (totalSettings >= warnLevel) {
        totalElementSettings.classList.add("warning")
    }
    if (totalSettings >= critLevel) {

        totalElementSettings.classList.add("danger")
    }


});

updateSettingsBtn.addEventListener('click', function () {

    critLevel = Number(criticalLevelSetting.value);
    callCostSet = Number(callCostSetting.value);
    smsCostSet = Number(smsCostSetting.value);
    warnLevel = Number(warningLevelSetting.value);
    
    if (totalSettings >= warnLevel) {
        totalElementSettings.classList.add("warning");
        totalElementSettings.classList.remove("danger");
    }
    if (totalSettings >= critLevel) {
        totalElementSettings.classList.remove("warning");
        totalElementSettings.classList.add("danger");
    }





});













// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
