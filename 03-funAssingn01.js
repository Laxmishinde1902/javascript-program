console.log("=============Function with No Argument and No Return value================");
function happy(){
    console.log("Always be Happy");
}
happy();
function learn(){
    console.log("I am learning JavaScript");
}
learn();

console.log("=================Personal Details============================");
function personalDetails(firstName, lastName, collegeName){
   console.log("My First name is: Laxmi"); 
   console.log("My last name is: Shinde");
   console.log("My College Name is: NGSPM College of pharmacy");
}
personalDetails("Laxmi","Shinde","NGSPM College Of Pharmacy");

console.log("=====================Addition===============================");
function addThreeValues(n1,n2,n3){
    console.log("The Given Numbers are :",n1,n2,n3);
    var result = n1 + n2 + n3;
    console.log("The addition is:",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues('hello','good','morning');

