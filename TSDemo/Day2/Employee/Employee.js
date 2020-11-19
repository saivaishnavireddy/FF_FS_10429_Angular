"use strict";
exports.__esModule = true;
var Address_1 = require("./Address");
var Department_1 = require("./Department");
var Employee = /** @class */ (function () {
    function Employee(empNumber, empName) {
        this.empNumber = empNumber;
        this.empName = empName;
    }
    Employee.prototype.printEmployeeDetails = function () {
        console.log("Dear, " + this.empName + ",");
        console.log("Your Employee Number is " + this.empNumber + ".");
        console.log("Your are living in " + add.city + " city, Country " + add.country + ".");
        console.log("You belong to " + depart.department + ".");
    };
    return Employee;
}());
var emp = new Employee(442, "vaishu");
var add = new Address_1.Address('Bangalore', 'India');
var depart = new Department_1.Department('Java');
emp.printEmployeeDetails();
