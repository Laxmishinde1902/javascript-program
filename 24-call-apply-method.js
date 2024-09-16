console.log(`============================== Call method ==================================`);

const person = {
    fullName : "Bill Gates",
    company : "Microsoft"
}
function greetings(message){
    console.log(`Hi ${this.fullName}, ${message}`); 
}
greetings.call(person,"Good Morning");

// ========= Call method invokes a function with given this object value and an argument provided one by one=======

console.log(`============================== Apply Method ==========================================`);

const person1 = {
    fullName : "Bill Gates",
    company : "Microsoft"
}
function greetings1(message,role){
    console.log(`Hi..Mr.${this.fullName}, ${role} of ${this.company} Comapny.... ${message} `); 
}
greetings1.apply(person1, ["Good Morning","CEO"])

// ======== Apply method invokes the function with a given this value and allows us to pass an argument in an array

console.log(`=========================== Bind Method ===============================================`);
 
    const person3 = {
        fullName : "Bill Gates",
        company : "Microsoft"
    }
    function greetings2(message,role,word){
        console.log(`Hi...Mr.${this.fullName},${message}! ${role} from ${this.company}.....${word}!!`);
    }
    const newFun = greetings2.bind(person);
    newFun ("Good Morning","CEO","You are great")

// ======= Bind method creates a new function and allow us to pass any number of an argument ================

console.log(`=================== Immediately Invoked Function Expression =============================`);

console.log(`========= IIFE is defines as an expression and executed immediately after creation. The primary use of using this IIFE is obtain data privacy because any variable declared in this IIFE cannot be accessible to outside world...==== `);

