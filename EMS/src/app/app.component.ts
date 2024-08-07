import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  employee : Employee ;
  result : string
  employeeArr : Employee[];
  flag:boolean=false;
   constructor(private service : EmployeeService){
    this.employee = new Employee();
    this.result = "";
    this.employeeArr =[];
   }

 insertEmployee(data : any) {
  this.employee.id = data.empId;
  this.employee.empName = data.empName;
  this.employee.empSalary = data.empSalary;
  this.employee.emplogin = data.emplogin;
  this.employee.emplogout = data.emplogout;

  this.result=this.service.insertEmployee(this.employee);
 }
 updateEmployee(data:any){
  this.employee.id = data.empId;
  this.employee.empName = data.empName;
  this.employee.empSalary = data.empSalary;
  this.employee.emplogin = data.emplogin;
  this.employee.emplogout = data.emplogout;

  this.result=this.service.updateEmployee(this.employee);
 }
 deleteEmployee(data:any){
  this.result=this.service.deleteEmployee(data.empId);
 }
 findEmployee(data:any){
  this.employee=this.service.findEmployee(data.empId);
  this.result=this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
 }
 findAllEmployee(data:any){
  this.employeeArr = this.service.findAllEmployee();
  this.flag=true;
 }
 
}