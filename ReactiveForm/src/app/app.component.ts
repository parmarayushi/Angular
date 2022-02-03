import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private fb: FormBuilder){}
  
  registrationform=this.fb.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  address:['',Validators.required],
  contact:['',Validators.required],
  gender:[''],
  course:['html']
});

  ngOnInit(): void {
      console.log(this.registrationform)
  }

  onSubmit(){
    console.log(this.registrationform);
  }
}
