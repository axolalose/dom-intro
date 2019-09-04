describe("calculateBill", function () {
    it("This function takes in a call and returns the ammount", function () {
        var testBill = calculateBill();

        testBill.add("call");
        assert.equal(testBill.total(), "5.00");
    })
    

    it("This function takes in a sms and return the cost per", function () {
        var testBill = calculateBill();

        testBill.add("sms");
        assert.equal(testBill.total(), "0.75");
    })

    it("Should return the cost for 5 calls made and 5 sms sent", function () {
        var testBill = calculateBill();
        var testBillTwo = calculateBill();

        testBillTwo.add("sms");
        testBill.add("call");
        testBillTwo.add("sms");
        testBill.add("call");
        testBillTwo.add("sms");
        testBill.add("call");
        testBillTwo.add("sms");
        testBill.add("call");
        testBillTwo.add("sms");
        testBill.add("call");
        assert.equal(testBill.total(), "13.75");
    })

    it("Should return the cost if 20 calls are made", function () {
        var testBill = calculateBill();

        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");
        testBill.add("call");


        assert.equal(testBill.total(), "55.00");
    })

    it("Should return the cost of sms if 20 sms are sent", function () {
        var testBill = calculateBill();

        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        testBill.add("sms");
        assert.equal(testBill.total(), "15.00");
    })
})