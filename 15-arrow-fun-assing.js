console.log(`=========== Function with No argument and no return value ============`);

    const greet = ()=>{
     console.log(`Good Morning, Today is Monday`);
    }
    greet();

console.log(`========= Function with no argument and no return value ==========`);

    const greetA = (n1,n2,n3=1)=>{
     console.log(`multiplication is :${n1*n2*n3}`) 
    }
    greetA(5,5,2);
    greetA(10,4);

console.log(`============== Function with Argument and return value =============`);
     
    let addition = (n1,n2,n3,n4,n5)=>{
       let result = n1+n2+n3+n4+n5;
       return result;
    }
    let result = addition(100 , 100 , 200 , 349 , 756);
    console.log(`Addition is: ${result}`);
    let resultA = addition("I am"," learning"," ES6"," features"," in depth");
    console.log(`Addditon is :${resultA}`);
    
    
    