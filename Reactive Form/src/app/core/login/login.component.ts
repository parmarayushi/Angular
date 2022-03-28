import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm:FormGroup;
public submitted:boolean;

  constructor(private fb:FormBuilder,private authService:AuthService) {
    this.submitted=false;
   }

  ngOnInit(): void {    
    this.loginForm=this.buildForm();
  }

  buildForm(){
    return this.fb.group({
      email:[''],
      password:['']
    })
  }

  get getvalue() {
    return this.loginForm.controls;
  }

  public onSubmit(){
    this.submitted=true;

    if(this.loginForm.valid){
      console.log(this.loginForm.value);

      this.authService.loginToken(this.loginForm.value).subscribe((res)=>{
        console.log(res.token);
        this.authService.setToken(res.token);
      })
    }
    this.loginForm.reset();
  }
}
