import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Manoel';
  employees = [];

  constructor() {
    setTimeout(() => {
      this.name = 'outro nome';
    }, 3000);
  }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employees.push(this.name);
    console.log(this.employees);
  }
}
