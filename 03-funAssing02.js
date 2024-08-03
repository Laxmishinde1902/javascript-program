console.log("============Function with Argument and No return Value================");
function bankDetails(bankName, accountNo, location, pincode){
var result = bankName + accountNo + location + pincode;
console.log("Bank Details :",result);
}
bankDetails("Axis BAnk ", 1234567890, " Pune ", 410206);
bankDetails("CITI Bank ", 2314567890, " Mumbai ", 416206);
bankDetails("HDFC Bank ", 2356981234, " Pune ",  410216);