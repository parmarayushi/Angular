import { Component, OnInit } from '@angular/core';
import { Department } from './models/emp.model';
import { EmpService } from './services/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public dept:Department[];

  constructor(private service:EmpService) { }

  ngOnInit(): void {
    this.service.getDept().subscribe({next:(data)=>{
      this.dept=data
    }})
  }
}
