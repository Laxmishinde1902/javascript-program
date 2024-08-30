console.log(`================= Find the greater number ====================`);
 
    function number(n1 ,n2){
       const result = n1 >= n2 ? n1: n2 ;
       console.log(`Given numbers are ${n1},${n2} and Greater number is: ${result}`);
    }
    number(10,-10);
    number(800,899);

console.log(`================ Find even and odd numbers ====================`);
  
    function isEvenOddNum(num){
      const result2 = num % 2 == 0 ? "Even" : "Odd"
      return result2
    }
    var result2 = isEvenOddNum(29);
    console.log(`29 is :${result2} number`);
    
    var result2 = isEvenOddNum(44);
    console.log(`44 is :${result2} number`);

    var result2 = isEvenOddNum(0);
    console.log(`0 is :${result2} number`);

    var result2 = isEvenOddNum(101);
    console.log(`101 is :${result2} number`);

console.log(`============ Find even and odd length of string ===================`);

    function wordLength(word){
      const length1 = word.length;
      const result3 = length1 % 2 == 0 ? "Even":"Odd"
      return result3;
    }
    var lengthA = wordLength("Javascript");
    console.log(`Word length number is: ${lengthA}`);
    
    var lengthB = wordLength("developer");
    console.log(`Word length number is: ${lengthB}`);
    
    var lengthC = wordLength("Google");
    console.log(`Word length number is: ${lengthC}`);