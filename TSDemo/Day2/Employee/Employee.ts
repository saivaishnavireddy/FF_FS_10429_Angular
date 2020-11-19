import {​​ Address }​​ from "./Address";
import {​​ Department }​​ from "./Department";
export interface IEmployee{
    empNumber: number;
    empName: string;
 }

class Employee implements IEmployee {
    empNumber:number;
    empName:string;
    constructor(empNumber: number, empName :string){
        this.empNumber = empNumber;
        this.empName = empName;    
    }

  
   printEmployeeDetails():void{
    console.log(`Dear, ${this.empName},`);
    console.log(`Your Employee Number is ${this.empNumber}.`);
    console.log(`Your are living in ${add.city} city, Country ${add.country}.`);
    console.log(`You belong to ${depart.department}.`);
   }
}
   let emp = new Employee(442, "vaishu");
   let add = new Address('Bangalore', 'India');
   let depart = new Department('Java');
   emp.printEmployeeDetails();

 
