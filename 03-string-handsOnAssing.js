console.log(`============ 1st condition==============`);
 
    var sentence = "        Hey you are doing Good ,Keep it up      ";
    console.log(`The Given String is : ${sentence}`);

console.log(`=========== 2nd condition===============`);

    var sentenceLength = sentence.length;
    console.log(`The length of the given sentence is : ${sentenceLength}`);

console.log(`=========== 3rd condition===============`);

    var sentenceTrim = sentence.trim();
    console.log(`The Given string is :${sentenceTrim} And the length of sentence after trim is : ${sentenceTrim.length}`);   
    
    console.log("Total removed characters -Leading and Trailing :",sentenceLength -sentenceTrim.length);
    
console.log(`=========== 4th condition===============`);
  
     console.log("Total removed extra spaces in sentence",sentenceLength - sentenceTrim.length);

console.log(`============ 5th Condition ==============`);

     var sentenceTrimCharAt0 = sentenceTrim.charAt(0);
     console.log(`The First character of sentence is : ${sentenceTrimCharAt0}`);

     var sentenceTrimCharAt = sentenceTrim.charAt(sentenceTrim.length-1)
     console.log(`The last character of sentence is : ${sentenceTrimCharAt}`);

console.log(`=================== 6th condition ==============`);

     var sentenceWords = sentenceTrim.split(" ");
     console.log(`words present is given sentence is : ${sentenceWords}`);

     console.log(`Total number of words present in given sentence is: ${sentenceWords.length}`);
     
console.log(`==================7th Condition =================`);

     var sentenceIndex = sentenceTrim.indexOf("Good");
     console.log(`Index of Good is : ${sentenceIndex}`);

console.log(`================= 8th condition =================`);

     var sentenceSlice = sentenceTrim.substring(22);
     console.log(`The sentence from index 22 is : ${sentenceSlice}`);

console.log(`================= 9th condition ================`);

      var sentenceEnd = sentenceTrim.endsWith("up");
      console.log(`Result is : ${sentenceEnd}`);

      var sentenceStart = sentenceTrim.startsWith("Hey");
      console.log(`result is : ${sentenceStart}`);
      
      
     
     

     
    