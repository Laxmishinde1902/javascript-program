

function bankName(bankName , accountNo , location , pincode){
     var result = bankName + accountNo + location + pincode;   
     console.log("Bank Details:",bankName , accountNo , location , pincode);
}
bankName("CITI Bank", 1234567890 , " Pune", 431202);
bankName("Axis Bank" ,2345678901, " Mumbai",410206);
bankName("HDFC BAnk", 3456789012, " Pune", 321406);
