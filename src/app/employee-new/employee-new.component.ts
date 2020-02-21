import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Manoel';

  constructor() {
    setTimeout(() => {
      this.name = 'outro nome';
    }, 3000);
  }

  ngOnInit(): void {
  }

}
