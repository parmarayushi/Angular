import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-subject-service/form-service.service';
import { Form } from '../form-subject.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userform:FormGroup;
  public submitted: boolean = false;

  private _editData:Form;
  private _isEdit:boolean;
  private _id:number;

  constructor(private fb:FormBuilder,private service:FormServiceService) { 
    this.userform=this.buildForm();
  }

  ngOnInit(): void {
    this.service.editData$.subscribe((result)=>{
      this._id=result.id
      this._editData=result;
      this._isEdit=true;
      console.log(result)
      this.userform.patchValue(this._editData)
    })
  }
  
  buildForm(){
  return this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.maxLength(10)]],
  })
}

  get getvalue() {
    return this.userform.controls;
  }

  onSubmit(){
    if(!this._isEdit){
      this.service.add(this.userform.value);
    }
    else{
      this.service.update(this._id,this.userform.value);
      this._isEdit=false;
    }
    this.userform.reset();
  }
}
