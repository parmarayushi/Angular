import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Client, Office, UserRegistration } from './model/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public userregistration:FormGroup;
  public userData:UserRegistration[];
  public clientData:Client[];
  public officeData:Office[];
  public editUser: UserRegistration;

  constructor(private service:UsersService) {
   }

  ngOnInit(): void {
    this.getClientList();
    this.getOfficeList();
    this.getUserData();
  }

  getClientList() {
    this.service.getClient().subscribe(
      (result) => {
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

  saveData(userForm : UserRegistration) {
   if(userForm.id !== null)
   {
      this.service.updateUser(userForm.id , userForm).subscribe(
        (result) =>{
          alert('Data succesfuuly updated');
          this.getUserData()
        }
      )
   }
   else
   {
    this.service.createUser(userForm).subscribe(
      (result) => {
        alert('Data Saved Successfully');
        this.getUserData()
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
    }
  }

 updateUser(id:number) {
    this.service.getById(id).subscribe(
      (result) => {
        this.editUser = result;
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }


  getUserData() {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData = result;
      },
      (error) => {
        console.log('Something Went Wrong');
      }
    );
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      (result) => {
        alert(id + ' is Deleted');
        this.getUserData();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  // getbyid() {
  //   if (!this.isAddMode) {
  //     this.service
  //       .getById(this.id)
  //       .subscribe((x) => this.userregistration.patchValue(x));
  //   }
  // }
}
