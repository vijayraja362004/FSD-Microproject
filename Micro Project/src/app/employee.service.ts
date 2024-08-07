import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url :string;
  employeeArr : Employee[];
  employee : Employee;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3006/employees";
    this.employee = new Employee();
    this.employeeArr = [];
  }

  insertEmployee(employee : Employee){
    alert(employee.id);
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added"
  }
  deleteEmployee(empId:number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return "Employee Details Deleted"
  }
  updateEmployee(employee:Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
  }
  findEmployee(empId:number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data=> this.employee=data); 
    return this.employee;
  }

  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data=> this.employeeArr=data); 
    return this.employeeArr;
  }

}
