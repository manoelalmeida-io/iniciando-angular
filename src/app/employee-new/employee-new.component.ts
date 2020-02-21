import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Manoel';
  salary = 0;
  employees = employees;

  constructor() {
    setTimeout(() => {
      this.name = 'outro nome';
    }, 3000);
  }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employees.push({ name: this.name, salary: this.salary });
    console.log(this.employees);
  }
}
