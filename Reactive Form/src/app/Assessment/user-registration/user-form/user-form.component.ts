import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Office, UserRegistration } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userData: UserRegistration[];
  clientData: Client[];
  officeData: Office[];
  searchText: 'string';
  id: number;
  isAddMode?: boolean;
  showForm: boolean = false;
  buttonDisabled: boolean = false;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.getClientList();
    this.getOfficeList();
    this.getbyid();
  }

  userregistration = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.maxLength(10)]],
    client: [''],
    office: [''],
  });

  get getvalue() {
    return this.userregistration.controls;
  }

  getClientList() {
    this.service.getClient().subscribe(
      (result: Client[]) => {
        this.clientData = result;
      },
      (error) => {
        alert('Something went Wrong');
      }
    );
  }

  getOfficeList() {
    this.service.getOffice().subscribe(
      (result: Office[]) => {
        this.officeData = result;
      },
      (error) => {
        alert('Something went Wrong');
      }
    );
  }

  saveData() {
    console.log(this.userregistration);
    this.service.createUser(this.userregistration.value).subscribe(
      (result) => {
        alert('Data Saved Successfully');
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  getbyid() {
    if (!this.isAddMode) {
      this.service
        .getById(this.id)
        .subscribe((x) => this.userregistration.patchValue(x));
    }
  }
  updateUser() {
    console.log(this.userregistration);
    this.service.updateUser(this.id, this.userregistration.value).subscribe(
      (result) => {
        alert('Data Updated Successfully');
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.buttonDisabled = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.isAddMode) {
      this.saveData();
    } else {
      this.updateUser();
    }
    this.router.navigate(['user']);
  }
}
