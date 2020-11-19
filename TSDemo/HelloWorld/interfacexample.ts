 export interface IEmployee {​​
    empCode: number;
    name: string;
    display() : void;
    }​​
    
    
    
    class Employee implements IEmployee {​​
    empCode: number = 1234; //not as per Java, we need to declare here...
    name: string = 'Jason Daniel'; //not as per Java, we need to declare here...
    
    
    
    display():void
    {​​
    console.log("Employee code : " + this.empCode);
    console.log("Employee name : " + this.name);
    }​​
    }​​
    
    
    
    let emp = new Employee();
    emp.empCode = 1234;
    emp.name ="vaishu";
    emp.display();
