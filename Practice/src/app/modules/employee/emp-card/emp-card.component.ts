import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/emp.model';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {

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
