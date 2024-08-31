console.log(`======================= Palindrome ===========================`);

    function isPalindrome(word){
       const stringPalindrome = word.split('').reverse().join('');              
       if (word == stringPalindrome) {
        console.log(`The word ${word} is : Palindrome`);
       } else {
        console.log(`The word ${word} is : Not palindrome`);
       }
    }
    isPalindrome("madam");
    isPalindrome("dad");
    isPalindrome("hello");

console.log(`======================== Anagram ==================================`);

   function isAnagram(str1,str2){
      const result1 = str1.toLowerCase().split('').sort().join('');
      const result2 = str2.toLowerCase().split('').sort().join('');
      if (result1 == result2) {
        console.log(`The words ${str1} and ${str2} is : Anagram`);
      } else {
        console.log(`The words ${str1} and ${str2} is :Not Anagram`);
      }
   }
   isAnagram("Silent","Listen");
   isAnagram("Hello","World");
   isAnagram("Such","Much")
