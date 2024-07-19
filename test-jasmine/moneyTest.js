import { moneyCurrency } from "../scripts/utils/moneycurrecy.js"


// write jasmine test cases for money.js
describe("Test suite: moneyCurrency function test", function() {
    it("works with zero amount", function() {
        expect(moneyCurrency(0)).toEqual("0.00");
    });
    it("works with rounding", function() {
        expect(moneyCurrency(1)).toEqual("0.01");
    });
    it("works with dollar amount", function() {
        expect(moneyCurrency(100)).toEqual("1.00");
    });
});
