import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Filter } from '../../customer.model';

@Injectable()
export class FilterFormPresenterService {

private filterData:Subject<Filter[]>
public filterData$:Observable<Filter[]>

  constructor(private fb:FormBuilder) {
    this.filterData=new Subject();
    this.filterData$=new Observable();

    this.filterData$=this.filterData.asObservable();
   }

  buildForm(){
    return this.fb.group({
      customerage: [''],
      city: [''],
      gender: ['']
    })
  }

 public onFilter(form:FormGroup){
    this.filterData.next(form.value)
  }
}
