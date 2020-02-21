import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = employees;

  constructor() { }

  ngOnInit(): void {
  }

  getSalaryColor(employee) {
    return {
      'salary-expensive': employee.salary > 20000,
      'salary-cheap': employee.salary <= 20000
    };
  }
}
