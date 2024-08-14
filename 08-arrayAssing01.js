let fruits = ["Banana","Orange","Apple","Mango","Water melon"];
console.log(fruits);
console.log(`The given list of fruits: ${fruits}`);

console.log(`===========Total number of elements in string is=============`);
    let fruitsLength = fruits.length;
    console.log(`The total number of elements in the list is :${fruitsLength}`);

console.log(`==========The first name and last name of fruits in list==========`);

     console.log(`The First name of fruit : ${fruits[1]}`);

     console.log(`The last name of fruit : ${fruits[fruits.length-1]}`);


console.log(`============Add element papaya before banana===================`);

      fruits.unshift("Papaya");
      console.log(fruits);

console.log(`===========Remove Mango from array==============================`);
       console.log(fruits);
       
       let splice41 = fruits.splice(4,1);
       console.log(fruits);
       console.log(splice41);
       

console.log(`============Add element Pineapple at the last position============`);

      fruits.push("Pineapple");
      console.log(fruits);

console.log(`===========Insert an element "Dragon Fruit" before "Water melon"`);
      
      console.log(fruits);
       let fruitsSplice = fruits.splice(5,0 ,"DragonFruit");
       console.log(fruits);
       console.log(fruitsSplice);
       

 console.log(`=============Replace an element "orange" with "Kiwi" `);
      
      console.log(fruits);
       fruits[2] = "Kiwi";
       console.log(fruits);

console.log(`==============log elements starting from index 1 to 4==========`);
      
      console.log(fruits);
      let fruitsSlice14 = fruits.slice(1,4);
      console.log(fruitsSlice14);

console.log(`=============Select last 3 elements and log on console=============`);
       
       let fruitList = fruits[fruits.length-3];
       console.log(fruitList);
       let fruitList2 = fruits[fruits.length-2];
       console.log(fruitList2);
       let fruitList3 = fruits[fruits.length-1];
       console.log(fruitList3);
       
       
       
       
       
      
      

       
      
       

      
     


