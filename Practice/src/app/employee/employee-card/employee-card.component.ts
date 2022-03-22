import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/emp.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() set emp(emp:Employee[]){
    this._emp=emp;
  }

  get emp():Employee[]{
    return this._emp;
  }

  private _emp:Employee[]
  constructor() { }

  ngOnInit(): void {
    if(this._emp){
      console.log(this._emp)
    }
  }

}
