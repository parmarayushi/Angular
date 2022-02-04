import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../model/form.model';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  submitted!: boolean;
  departmentData: Department[];
  id: number;
  isAddMode?: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: FormService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.registrationform);

    this.getDepartmentList();

    if (!this.isAddMode) {
      this.service
        .getById(this.id)
        .subscribe((x) => this.registrationform.patchValue(x));
    }
  }

  registrationform = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.required],
    gender: [''],
    date: [''],
    department: [''],
  });

  get getvalue() {
    return this.registrationform['controls'];
  }

  getDepartmentList() {
    this.service.getDepartment().subscribe(
      (result: Department[]) => {
        this.departmentData = result;
      },
      (error) => {
        alert('Something went Wrong');
      }
    );
  }

  onSubmit(){
    if(this.isAddMode){
      this.saveData()
    }else{
      this.updateUser()
    }
  }


  saveData() {
    console.log(this.registrationform);
    this.service.createUser(this.registrationform.value).subscribe(
      (result) => {
        alert('Data Saved Successfully');
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
    this.router.navigate(['submit']);
  }

  updateUser() {
    console.log(this.registrationform);
    this.service.updateUser(this.id,this.registrationform.value).subscribe(
      (result) => {
        alert('Data Updated Successfully');
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
    this.router.navigate(['submit']);
  }

  resetForm() {
    this.registrationform.reset();
  }
}
