let arrayList = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayList);

console.log(`=================Total number of elements in given array list===============`);

     let arrayListLength = arrayList.length;
     console.log(`The total number of elements present in string is: ${arrayListLength} `);
     

console.log(`===============First and last element in array list=========================`);

     console.log(`The First element of Array list is :- ${arrayList[0]}`);

     console.log(`The last element of array list is :- ${arrayList[arrayList.length-1]}`);
     

console.log(`===============Third last element using length property==================`);

     let thirdLastElement = arrayList[arrayList.length-3];
     console.log(`Third last element : ${thirdLastElement}`);


console.log(`===============Find all even numbers using for loop=====================`);
     
      for (const element of arrayList) {
          if (element%2 == 0) {
            console.log(element);
          }
      }

console.log(`================Find the odd numbers in list==================`);
 
      for (const element of arrayList) {
          if (element%2 == 1) {
            console.log(element);
          }
      }

console.log(`===============Find the numbers which are multiple of 5`);

        for (const element of arrayList) {
            if (element%5 == 0) {
                console.log(element);
            }
        }

console.log(`===========Condition: 115 and 23 available in array list============`);

          let arrayListIncludes = arrayList.includes(115)
         console.log(`115 is available in array List :- ${arrayListIncludes}`);

         let arrayList23 = arrayList.includes(23);
         console.log(`23 is available in array List :- ${arrayList23}`);


console.log(`===============Insert Numbers at index 3==========================`);

         console.log(arrayList);

         let arrayListSplice = arrayList.splice(3,0,55,66)
         console.log(arrayList);
         
console.log(`===========delete 3 elements starting from index 4==================`);

        console.log(arrayList);

        let arrayList4 = arrayList.splice(4,3);
        console.log(arrayList);
        
        
        
    
