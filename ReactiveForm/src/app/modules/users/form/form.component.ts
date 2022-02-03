import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted!: boolean;
  
  

  constructor(private fb: FormBuilder,private router:Router){}
  
 
  ngOnInit(): void {
      console.log(this.registrationform)
  }

    registrationform=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    contact:['',Validators.required],
    gender:[''],
    date:[''],
    department:['html']
  });
  
  onSubmit(){
    console.log(this.registrationform);
    
      this.router.navigate(['submit'])
    
 
  }

  get getvalue(){
  return this.registrationform['controls'];
  }

  saveData(){
    if(this.registrationform.dirty){
      this.submitted=true;
      if(this.registrationform.invalid){
        return;
      } 
    }
  }

  resetForm(){
    this.registrationform.reset();
  }
}
