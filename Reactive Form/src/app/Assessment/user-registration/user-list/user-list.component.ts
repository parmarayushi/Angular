import { Component, OnInit } from '@angular/core';
import { Client, Office, UserRegistration } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userData: UserRegistration[];
  client: Client[];
  office: Office[];
  searchText: string = '';
  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.getclient();
    this.getoffice();
    this.getUserData();
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

  getclient() {
    this.service.getClient().subscribe((data) => (this.client = data));
  }

  getoffice() {
    this.service.getOffice().subscribe((data) => (this.office = data));
  }
}
