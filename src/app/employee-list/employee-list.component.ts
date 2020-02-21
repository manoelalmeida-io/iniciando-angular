import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeesService: EmployeeService) { }

  ngOnInit(): void {
  }

  getSalaryColor(employee) {
    return {
      'salary-expensive': employee.salary > 20000,
      'salary-cheap': employee.salary <= 20000
    };
  }
}
