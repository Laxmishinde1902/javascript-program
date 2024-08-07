console.log("=================Function with NO ARGUMENT and NO RETURN VALUE=========================");

function show(){
    console.log("I Love Only javascript");   
}
show();

function happy(){
    console.log("Be happy always"); 
}
happy();

console.log("================function with ARGUMENT and NO RETURN VALUE===============================");
function personalDetails(firstName, lastName, collegeName){
    console.log("My first name is:",firstName);
    console.log("My last name is:",lastName);
    console.log("My College name is:",collegeName);
}
personalDetails("Laxmi"," Shinde"," NGSPM College of Pharmacy Nashik");

console.log("======================ADD THREE VALUES==============================");
function addThreeValues(n1,n2,n3){
    console.log("Given numbers are:",n1,n2,n3);
    var result = n1 + n2 + n3;
    console.log("Addition is:",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello", " Good", " Morning");

