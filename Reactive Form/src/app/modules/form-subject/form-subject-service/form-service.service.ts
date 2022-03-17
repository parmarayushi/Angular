import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Form } from '../form-subject.model';

@Injectable()
export class FormServiceService {

  public formData:Form[]=[
    {
      id:1,
      firstName:"aayushi",
      lastName:"parmar",
      email:"aayushiparmae812@gmail.com",
      contact:8421503215
    },
    {
      id:2,
      firstName:"aayushi",
      lastName:"parmar",
      email:"aayushiparmae812@gmail.com",
      contact:8421503215
    },
    {
      id:3,
      firstName:"aayushi",
      lastName:"parmar",
      email:"aayushiparmae812@gmail.com",
      contact:8421503215
    },
    {
      id:4,
      firstName:"aayushi",
      lastName:"parmar",
      email:"aayushiparmae812@gmail.com",
      contact:8421503215
    }
  ]

  public form:BehaviorSubject<Form[]>;
  public form$: Observable<Form[]>

  public editData:Subject<Form>;
  public editData$: Observable<Form>

  public nextId:5;
  constructor(){
    this.form=new BehaviorSubject<Form[]>(this.formData);
    this.form$=new Observable();
    this.form$=this.form.asObservable();

    this.editData=new Subject<Form>();
    this.editData$=new Observable();
    this.editData$=this.editData.asObservable();
   }

   //add Data
   add(form:Form){
    //form.id=++this.nextId;
    this.formData.push(form);
    this.form.next(this.formData);
   }

   saveDatatoEdit(form:Form){
     this.editData.next(form)
   }

   //edit Data
   edit(id:number,form:Form){
     let formindex=this.formData.findIndex((data=>data.id==id));
     this.formData[formindex]=form;
     this.formData[formindex].id=id;
   }

   delete(id:number){
    let index= this.formData.findIndex((data=>data.id==id))
    this.formData.splice(index,1);
   }  
}