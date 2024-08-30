console.log(`==============square of word length ================`);

function squareOfWordLength(sentence){
    console.log(`The Given sentence is: ${sentence}`);
    var split = sentence.split(" ");
    var length = split.length;
    var lengthSquare = length * length;
    return lengthSquare
}
 var result = squareOfWordLength("Javascript");
 console.log(`Square of given word is : ${result}`);
 
var result = squareOfWordLength("Google chrome");
console.log(`square of given word is: ${result}`);

var result = squareOfWordLength("Web developer smart");
console.log(`square of given word is: ${result}`);

console.log(`================== I am angular developer ==================`);

function string(sentence){
   console.log(`The Given string is : ${sentence}`);
   var wordLength = sentence.split(" ");
   var wordNuLength = wordLength.length;
   console.log(`Total number of words in given sentence :${wordNuLength}`);
   
   var length = sentence.length;
   console.log(`The Length of given sentence is : ${length}`);
   var divide = length / wordNuLength;
   console.log(`Dividation is : ${divide}`);

   console.log(`============== multiplication of words ==================`)
   var multiply = length * wordNuLength;
   console.log(`Multiplication is : ${multiply}`);
}
string("I am angular developer");




 
 







