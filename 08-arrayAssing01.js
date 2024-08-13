let fruitList = ["Banana"," Orange", " Apple", " Mango", " Watermelon"]
   console.log(`Given Fruit list in Array is: ${fruitList}`);


console.log(`========Total Number of elements in fruit list=============`);
      let fruitListLength = fruitList.length;
      console.log(`The Total number of elements fruit list is: ${fruitListLength} `);


console.log(`===============First and last name of fruits===============`);
    
      console.log(`The First name of fruit is :${fruitList[1]}`);

      console.log(`The last name of fruit is : ${fruitList[fruitList.length-1]}`);


console.log(`=========Replace an element orange with kiwi============`);
       console.log(fruitList);
       fruitList[1] = " Kiwi"
       console.log(fruitList);



console.log(`===============Insert an element 'pineapple' at the last position=========`);
        fruitList.push("Pineapple");
        console.log(fruitList);


console.log(`============Add element papaya before Banana Element=================`);
         fruitList.unshift("Papaya");
         console.log(fruitList);


console.log(`=============Log the elements from 1 to 4==========================`);
        let fruitListSlice = fruitList.slice(1,4);
        console.log(fruitListSlice);



console.log(`=================Remove mango from array=============================`);
       console.log(fruitList);
       
       let fruitListSplice31 = fruitList.splice(4,1);
       console.log(fruitList);
       console.log(fruitListSplice31);


console.log(`=============Insert element DragonFruit before Water melon=================`);
      console.log(fruitList);

      let fruitListSplice = fruitList.splice(4,0,"DragonFruit");
      console.log(fruitList);
      
      

       


       
       
       

        

         

        

       

       
    
     

    
    
    
    
    
   

   
   
   