function validateEmployee(id:number, name:string, sal:number) {
 
    if(id<=0)
        return "Id is non zero, please provide valid value";
    
    let var_name = new String(name);
    if (var_name.length==0)
        return "Name is mandatory field, please provide valid value";
 
    if(sal<=0)
        return "Salary is non zero, please provide valid value";
    return 'valid';
}
let message1: string = validateEmployee(2,"vaishu", 1000);
console.log(message1);

function validateUser1(firstName : string, lastName: string, age: number, gender:string,city:string, contactNumber:number, userId:number, password: string) {
 
    if(userId <= 0)
        return "Id is non zero, please provide valid value";
    
    let first_name = new String(firstName);
    if (first_name.length==0)
        return "First Name is mandatory field, please provide valid value";
    let last_name = new String(lastName);
    if (last_name.length==0)
        return "Last Name is mandatory field, please provide valid value";  
    if(age <= 0)
        return "age is non zero, please provide valid value";
    let var_gender = new String(gender);
    if (var_gender.length==0)
        return "gender is mandatory field, please provide valid value";
    let var_city = new String(city);
    if (var_city.length==0)
        return "gender is mandatory field, please provide valid value";
    if(contactNumber <= 0)
        return "contactNumber is non zero, please provide valid value";
    let var_password = new String(password);
    if (var_password.length==0)
        return "gender is mandatory field, please provide valid value";
    
    return `Dear ${firstName} !!! You have successfully registered`;
}
 let message2: string = validateUser1('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,51887851, 'vaishu@12');

console.log(message2);

function validateUser(firstName : string, lastName: string, age: number, gender:string,city:string, contactNumber:number, userId:number, password: string) {
    

    if(userId <= 0){
        if(contactNumber <= 0) {
            if(age<=0){
                if(firstName.length == 0){
               return "First Name,id,contactNumber,age are mandatory field, please provide valid value"; 
        }
                return "Id,contactNumber, age are non zero, please provide valid value"
            }
            return "Id,contactNumber are non zero, please provide valid value"
        }
          return "Id is non zero, please provide valid value";
    }
       
    
    let first_name = new String(firstName);
    if (first_name.length==0)
        return "First Name is mandatory field, please provide valid value";
    let last_name = new String(lastName);
    if (last_name.length==0){
        
        return "Last Name is mandatory field, please provide valid value";  
    }
    if(age <= 0)
        return "age is non zero, please provide valid value";
    let var_gender = new String(gender);
    if (var_gender.length==0)
        return "gender is mandatory field, please provide valid value";
    let var_city = new String(city);
    if (var_city.length==0){
         return "city is mandatory field, please provide valid value";
    }
       
    if(contactNumber <= 0)
        return "contactNumber is non zero, please provide valid value";
    let var_password = new String(password);
    if (var_password.length==0)
        return "password is mandatory field, please provide valid value";
    
    
    return `Dear ${firstName} !!! You have successfully registered`;
}
// let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
 //let message: string = validateUser('','vugumudi',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
// let message: string = validateUser('sai vaishnavi','',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',0,'female','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',0,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,0, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,51887851, '');
//let message: string = validateUser('sai vaishnavi','vugumudi',0,'female','bangalore',0,0, 'vaishu@12');
//let message: string = validateUser('','vugumudi',0,'female','bangalore',0,0, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',0,0, 'vaishu@12');


console.log(message);



//Day 2:
//filename : interfaceDemo.ts
/*
This is ddemo interface with one property and one method
*/
interface MyInterface {​​​​
    someProp: string;
    someFunction(): void;
    }​​​​
    let myInt : MyInterface = {​​​​someProp: "Hcl",someFunction() {​​​​
    console.log("inside function")}​​​​
    }​​​​;
    console.log(myInt.someProp);
    console.log(myInt.someFunction());


    //Day 2:
//filename : interfaceDemo1.ts
/*
This is interface has a number property and string property
*/
interface MyInterfaceType
{​​
(propertyOne: number, propertyTwo: string): void; //like Tuple
}​​;



/*
This function takes a number property and string property and
print the incoming paramater values
*/
function addMyInterfaceType(argOne:number, argTwo:string):void
{​​
console.log('Add MyInterfaceType: argument one = '
+ argOne + ', argument two = ' + argTwo);
}​​
/*
This function takes a number property and string property and
print the incoming paramater values
*/
function updateMyInterfaceType( paramOne: number, ParamTwo:string ):void {​​
console.log('updateMyInterfaceType: param 1 = '+
paramOne + ', param 2 = ' + ParamTwo);
}​​

let mit: MyInterfaceType = addMyInterfaceType;
mit(1, 'Bill');



mit = updateMyInterfaceType;
mit(2, 'Steve');


//Day 2:
//filename : interfaceDemoexport.ts
/*
  Reusable interface with name and gender
*/
interface IPerson {​​​​​​

        name: string;
    
        gender: string;
    
    }
    /*
    Interface extends Reusable interface with additional property  empCode 
    */​​​​​​
     interface IEmployee extends IPerson {​​​​​​
    
        empCode: number;
    
    }​​​​​​ let empObj2:IEmployee = {​​​​​​
    
        empCode:1,
    
        name:"Bill",
    
        gender:"Male"
    
    }​​​​​​
    
    console.log(empObj2.empCode);
    
    console.log(empObj2.name);
    
    console.log(empObj2.gender);

    

      /*
Person class has name attribute only
*/
class Person {
  name: string;
  constructor(name: string) {
  this.name = name;
  }
  }
  /*
  Employee dervies from Person class with add. emp code propertt
  */
  class Employee extends Person {
  empCode: number;
  constructor(empcode: number, name:string) {
  super(name);
  this.empCode = empcode;
  }
  displayName():void {
  console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
  }
  }
  
  let emp = new Employee(100, "Bill");
  emp.displayName();