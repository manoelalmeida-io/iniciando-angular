import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  };

  constructor(private employeesService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeesService.addEmployee(this.employee);
  }
}
