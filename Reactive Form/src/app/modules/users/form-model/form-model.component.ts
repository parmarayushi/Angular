import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from '../model/form.model';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css'],
})
export class FormModelComponent implements OnInit {
  submitted!: boolean;
  departmentData: Department[];
  // id: number;
  isAddMode?: boolean;

  @Output() cancel;

  constructor(private fb: FormBuilder, private service: FormService) {
    this.cancel = new EventEmitter<String>();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.isAddMode = !this.id;
    console.log(this.registrationform);

    this.getDepartmentList();
    // this.getbyid();
  }

  registrationform = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.required],
    gender: [''],
    date: [''],
    department: ['', Validators.required],
  });

  get getvalue() {
    return this.registrationform.controls;
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

  onSubmit() {
    if (this.isAddMode) {
      this.saveData();
      // } else {
      //   this.updateUser();
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
    // this.router.navigate(['reactive']);
  }

  // getbyid() {
  //   if (!this.isAddMode) {
  //     this.service
  //       .getById(this.id)
  //       .subscribe((x) => this.registrationform.patchValue(x));
  //   }
  // }
  // updateUser() {
  //   console.log(this.registrationform);
  //   this.service.updateUser(this.id, this.registrationform.value).subscribe(
  //     (result) => {
  //       alert('Data Updated Successfully');
  //     },
  //     (error) => {
  //       alert('Something Went Wrong');
  //     }
  //   );
  //   // this.router.navigate(['reactive']);
  // }

  resetForm() {
    this.registrationform.reset();
  }

  onCancel(){
    this.cancel.emit();
  }
}
