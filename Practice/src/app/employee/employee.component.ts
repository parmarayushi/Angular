import { Component, OnInit } from '@angular/core';
import { Department } from './model/emp.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public dept:Department[];

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.service.getDept().subscribe({next:(data)=>{
      this.dept=data
    }})
  }
}
