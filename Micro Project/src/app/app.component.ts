import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html',
  styleUrl: './app.component.css'
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
  this.employee.id = data.employeeId;
  this.employee.employeeName = data.employeeName;
  this.employee.employeeSalary = data.employeeSalary;
  this.employee.employeelogin=data.employeelogin;
  this.employee.employeelogout=data.employeelogout;

  this.result=this.service.insertEmployee(this.employee);
 }
 updateEmployee(data:any){
  this.employee.id = data.employeeId;
  this.employee.employeeName = data.employeeName;
  this.employee.employeeSalary = data.employeeSalary;
  this.employee.employeelogin=data.employeelogin;
  this.employee.employeelogout=data.employeelogout;

  this.result=this.service.updateEmployee(this.employee);
 }
 deleteEmployee(data:any){
  this.result=this.service.deleteEmployee(data.employeeId);
 }
 findEmployee(data:any){
  this.employee=this.service.findEmployee(data.employeeId);
  this.result=this.employee.id+" "+this.employee.employeeName+" "+this.employee.employeeSalary+" "+this.employee.employeelogin+" "+this.employee.employeelogout;
 }
 findAllEmployee() {
  this.employeeArr=this.service.findAllEmployee();
  this.flag=true;
 }
 
}
