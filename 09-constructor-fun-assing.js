function Bank (bankName,location,ifscCode,branchCode){
     this.bankName = bankName;
     this.location = location;
     this.ifscCode = ifscCode;
     this.branchCode = branchCode;
}
console.log(`Bank Details is:-`);

     const yesBank  = new Bank("Yes Bank", "Pune", 100001 , 1234567890);
     console.log(` Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code : ${yesBank.branchCode}`);
   
     const mahBank = new Bank("Mah Bank","Mumbai", 100002, 2345678901);
     console.log(` Name : ${mahBank.bankName}, Location: ${mahBank.location}. IFSC Code : ${mahBank.ifscCode}, Branch Code : ${mahBank.branchCode}`);
   
     const axisBank = new Bank("Axis BAnk", "Pune",100004, 3456789012);
     console.log(` Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC Code : ${axisBank.ifscCode}, Branch Code : ${axisBank.branchCode}`);
   
     const sbiBank = new Bank ("SBI Bank", "Mumbai",100005,4567890123);
     console.log(` Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, IFSC Code : ${sbiBank.ifscCode}, Branch Code : ${sbiBank.branchCode}`);
   
console.log(`============================Opening time and Closing Time ===========================`);
    console.log(`Opening and closing time of Bank`);
    
     Bank.prototype.openTime = "9 AM IST";

     Bank.prototype.closeTime = "6 PM IST";

console.log(`================== Open time and Close time of SBI BAnk ====================`);

     console.log(`SBI Bank: Open Time is:- ${sbiBank.openTime} , Close Time is:- ${sbiBank.closeTime}`);

console.log(`================== Log Bank name and close time of Axis bank =================`);
    
    console.log(`Bank name:- ${axisBank.bankName} , Close Time is:- ${axisBank.closeTime}`);

console.log(`================== Bank Name , Branch code and open time of Yes bank =================`);

     console.log(`Bank Name:- ${yesBank.bankName}, Branch Code:- ${yesBank.branchCode}, Closing Time:- ${yesBank.closeTime}`);
     

    



     

     


     
