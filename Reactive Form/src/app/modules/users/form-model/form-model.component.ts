import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department, User } from '../model/form.model';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css'],
})
export class FormModelComponent implements OnInit {
  public modalTitle: string;
  private isAddMode: boolean;

  @Input() public id: number = 0;
  @Input() public editData: User;
  @Input() public department: Department[];

  @Output() public userData;
  @Output() public cancel;

  constructor(private fb: FormBuilder, private service: FormService) {
    this.modalTitle = 'Add User';
    this.editData = {} as User;
    this.department = [];
    this.isAddMode = true;

    this.userData = new EventEmitter<User>();
    this.cancel = new EventEmitter<String>();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.isAddMode = !this.id;
    // console.log(this.registrationform);

    // this.getDepartmentList();
    // this.getbyid();

    if (this.id != 0) {
      this.isAddMode = false;
    }
    if (!this.isAddMode) {
      this.modalTitle = 'Edit User';
      this.registrationform.patchValue(this.editData);
    }
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

  // getDepartmentList() {
  //   this.service.getDepartment().subscribe(
  //     (result: Department[]) => {
  //       this.departmentData = result;
  //     },
  //     (error) => {
  //       alert('Something went Wrong');
  //     }
  //   );
  // }

  // onSubmit() {
  //   if (this.isAddMode) {
  //     this.saveData();
  //     // } else {
  //     //   this.updateUser();
  //   }
  // }

  // saveData() {
  //   console.log(this.registrationform);
  //   this.service.createUser(this.registrationform.value).subscribe(
  //     (result) => {
  //       alert('Data Saved Successfully');
  //     },
  //     (error) => {
  //       alert('Something Went Wrong');
  //     }
  //   );
  //   // this.router.navigate(['reactive']);
  // }

  // // getbyid() {
  // //   if (!this.isAddMode) {
  // //     this.service
  // //       .getById(this.id)
  // //       .subscribe((x) => this.registrationform.patchValue(x));
  // //   }
  // // }
  // // updateUser() {
  // //   console.log(this.registrationform);
  // //   this.service.updateUser(this.id, this.registrationform.value).subscribe(
  // //     (result) => {
  // //       alert('Data Updated Successfully');
  // //     },
  // //     (error) => {
  // //       alert('Something Went Wrong');
  // //     }
  // //   );
  // //   // this.router.navigate(['reactive']);
  // // }

  onSubmit() {
    this.userData.emit(this.registrationform.value);
  }

  resetForm() {
    this.registrationform.reset();
  }

  onCancel() {
    this.cancel.emit();
  }
}
