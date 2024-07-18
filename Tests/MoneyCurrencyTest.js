// lets import moneycurrency.js
import { moneyCurrency} from '../scripts/utils/moneycurrecy.js';


//log test suite name
console.log("moneyCurrency function test");

// lets create a new instance of the MoneyCurrency class
console.log(" works with zero amount");
if(moneyCurrency(0) === "0.00"){

    console.log("  Test Passed");
} else {
    console.log("  Test Failed");
}
console.log(" works with rounding");

if(moneyCurrency(1) === "0.01"){

    console.log("  Test Passed");
} else {
    console.log("  Test Failed");
}
// test  if code works withdolar amount
console.log(" works with dollar amount");
if(moneyCurrency(100) === "1.00"){

    console.log("  Test Passed");
} else { 
    console.log("  Test Failed");
}