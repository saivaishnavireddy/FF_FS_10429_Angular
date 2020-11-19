/*
 * Day : 2
 * filename: Employee.ts
 */ 
/*
This interface has two properties.
*/
interface IEmployee{
    empNumber:number;
    empName:string;
    }
/*
Department class has Department attribute only   
*/
    class Department{
    department:string;
    constructor(department:string){
    this.department=department;
    }
    }
/*
Address class has city, country two attributes.   
*/
    class Address{
        city:string;
        country:string;
        constructor(city:string, country:string){
        this.city=city;
        this.country=country;
        }
     }
/*
Employee class implements an interface IEmployee with one method.   
*/
    class Employee implements IEmployee{
    empNumber:number;
    empName:string;
    address:Address;
    dept:Department;
    constructor( empNumber:number, empName:string, city:string, country:string, dept:string){
    this.empNumber=empNumber;
    this.empName=empName;
    this.address=new Address(city,country);
    this.dept=new Department(dept);
    }
    printEmployeeDetails():void {
    console.log(`Dear ${this.empName},\n Your emp number is ${this.empNumber}.\nYour are living in ${this.address.city}, Country ${this.address.country}.\nYou belongs to ${this.dept.department} department.`);
    }
   }
    let employee= new Employee(442,"Vaishu","Nellore","India","Java");
    employee.printEmployeeDetails();