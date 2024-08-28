class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(22,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"mahesh","HR",85000,"Infy");


const employeeName = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,emp_viny,emp_mahi];

   const tcsEmployee = employeeName.filter((employee)=>{
       return employee.emp_company == "TCS"
   });
   console.log(tcsEmployee[0]);
   console.log(tcsEmployee[1]);
   console.log(tcsEmployee[2]);
   console.log(`================== All the employee from TCS ================`);

   for (const element of tcsEmployee) {
     if (element.emp_company=="TCS") {
        console.log(`Employee Name: ${element.emp_name} & Company Name: ${element.emp_company}`);       
     }
   }

console.log(`============= Find the average salary of employee from wipro ==================`);

   const wiproEmp = employeeName.filter((employee)=>{
      return employee.emp_company == "Wipro";
   })
   console.log(wiproEmp[0]);
   console.log(wiproEmp[1]);

   const wiproEmpSalary = wiproEmp.map((employee)=>{
    return employee.emp_salary
   })
   console.log(`Employee salalry is :${wiproEmpSalary}`);
   
   let salarySum = 0 ;
   for (const element of wiproEmpSalary) {
    salarySum = salarySum + element
   }
   console.log(`Addition is: ${salarySum}`);
   
   let averageSalary = salarySum / wiproEmp.length;
   console.log(`Average is : ${averageSalary}`);

console.log(`=================== find the average salary of wipro or infy ==============`);

const wiproInfyEmp = employeeName.filter((employee)=>{
    return employee.emp_company == "Wipro" || employee.emp_company == "Infy";
 })
 console.log(wiproInfyEmp[0]);
 console.log(wiproInfyEmp[1]);
 console.log(wiproInfyEmp[2]);
 console.log(wiproInfyEmp[3]);

 console.log(`===== Average Salary =======`);
 
 const salaryWiproInfy = wiproInfyEmp.map((employee)=>{
    return employee.emp_salary
 })
 console.log(salaryWiproInfy);
 let salarySumA = 0 ;
 for (const element of salaryWiproInfy) {
   salarySumA = salarySumA + element;
 }
 console.log(`Addition is :${salarySumA}`);

 let averageSalaryA = salarySumA / wiproInfyEmp.length;
 console.log(`Average salary is : ${averageSalaryA}`);
 
 
 


 
   