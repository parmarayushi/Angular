import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-subject-service/form-service.service';
import { Form } from '../form-subject.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  public data:Form[];
  constructor(private service:FormServiceService) {
    this.data=[];
   }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.service.form$.subscribe((result)=>{
      this.data=result;
    })
  }

  public editData(form:Form){
    this.service.saveDatatoEdit(form);
  }

  public deleteData(id:number){
    this.service.delete(id);
  } 
}
