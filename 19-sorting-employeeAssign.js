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

console.log(`=============== Employee id ,name and department in descending order ==============`);
  
     const arrayEmployee1 = employeeName.sort((e1 , e2) =>{
        return e1.emp_id > e2.emp_id ? -1 : 1;
     })
     for (const element of arrayEmployee1) {
        console.log(`Employee ID: ${element.emp_id} , Emp Name: ${element.emp_name} , Department: ${element.emp_dept}`);
     }

console.log(`============== Employee Department in Ascending order ====================`);
 
     const employeeDept = employeeName.sort((d1 ,d2) =>{
        return d1.emp_dept > d2.emp_dept ? 1 : -1;
     })
     for (const element of employeeDept) {
        console.log(`Emp ID: ${element.emp_id}, Department: ${element.emp_dept}, Company: ${element.emp_company}`);   
     }

console.log(`============== Employee Salary in descending order =======================`);
     
     const employeeSalary = employeeName.sort((s1 , s2) =>{
        return s1.emp_salary > s2.emp_salary ? -1 : 1
     })
     for (const element of employeeSalary) {
        console.log(`Emp Name: ${element.emp_name}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
        
     }