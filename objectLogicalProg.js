console.log(`=============== List the properties of javascript object ================`);
   var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12
   }
   var properties = Object.keys(student);
   console.log(properties);

console.log(`================ Print the object before and after the property ====================`);

   var student = {
    name : "Ravi Sharma",
    class : "VI",
    rollno : 101
   }
   console.log(`Before deleting the roll No:-`,student);
   delete student.rollno;
   console.log(`After deleting the roll no:-`,student);
  
console.log(`==================== Length of javascript object ========================`);

   var car = {
    make : "Toyota",
    model : "camry",
    year : 2020,
    color : "blue"
   }
   function getObjectLength(obj){
    return Object.keys(obj).length;
   }
   console.log("Length of the car object : " + getObjectLength(car));
   console.table(car);
   
   
console.log(`===================== Get dynamic access to an object property ==================`);

   var person = {
    name : "John Doe",
    age : 30,
    profession : "Developer"
   }
   var propertyName = "age";
   console.log(`The age of person is : ${person[propertyName]}`);
   var personName = "name";
   console.log(`The name of person is : ${person[personName]}`);
   var personProfession = "profession";
   console.log(`The profession of person is : ${person[personProfession]}`);

console.log(`==================== Modify an objects property in an array of objects ===================`);

   var employees = {
    id : 1,
    name : "John Doe",
    position: "Developer",
    salary : 50000
   }
   function updateEmployeeSalary(id,newSalary){
    for (let index = 0; index < employees.length; index++) {
        if (employees[index].id === id) {
            employees[index].salary = newSalary;
            return;
        } 
    }
   }
   updateEmployeeSalary(1,60000);
   console.log(employees);
   console.log(`========Table ==========`);
   console.table(employees);
   
console.log(`============= Get the last item of an object =============================`);

    var car = {
        make : "Toyota",
        model : "camry",
        year : 2020,
        color : "Blue"
    }
    var keys = Object.keys(car);
    var lastKey = keys[keys.length-1];
    console.log(`The last key present in an given object is : ${lastKey}`);
    
console.log(`=================== Find the last item by using Object.entries Method ==========`);

var car = {
    make : "Toyota",
    model : "camry",
    year : 2020,
    color : "Blue"
}
var entries = Object.entries(car);
var lastEntries = entries[entries.length-1];
console.log(`The last item of an given object is : ${lastEntries}`);

console.log(`================== Add an object to an array ==================`);

  var fruits = ['Apple' , 'Banana' , 'Orange'];
  console.log(`The Given fruits are : ${fruits}`);
  
 fruits.push("Grape");
  console.log(fruits);

console.log(`========================= Remove duplicates from an object ===================`);

  var students = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'John Smith'},
    {id: 1, name: 'John Doe'},
    {id: 3, name: 'John Green'},
    {id: 2, name: 'Jane Smith'}
  ]
  const uniqueStudents = students.reduce((acc, student) => {
    if (!acc.find(s => s.id === student.id)) {
      acc.push(student);
    }
    return acc;
  }, []);
  console.table(uniqueStudents);

console.log(`=================== Get the subset of an objects properties =================`);

  var person ={
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    city : 'New York',
    country : 'USA'
  }
  var { firstName , lastName } = person;
  console.log(`Firstname is : ${firstName}  Lastname : ${lastName}`);

  var { age , city } = person;
  console.log(`person age is : ${age} And city is : ${city}`);

  var { country } = person;
  console.log(`Country is : ${country}`);
  
console.log(`========== Convert an object {} to an array[] of key value pairs ================`);

  const obj = {
    key1 : 'Value1',
    key2 : 'Value2',
    key3 : 'Value3'
  }
  const entries1 = Object.entries(obj);
  console.table(entries1);

console.log(`=====================  Check value is object like ===================`);

  function isObjectLike(value) {
    return typeof value === 'object' && value != null;
  }
  console.log( isObjectLike({}));
  console.log( isObjectLike([]));
  console.log( isObjectLike(null));
  console.log( isObjectLike(42));
  console.log( isObjectLike('string'));
  
  
   
   