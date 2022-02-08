import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department, User } from '../model/form.model';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  userData: User[];
  searchText: string = '';
  department: Department[];
  constructor(private service: FormService, private router: Router) {}

  ngOnInit(): void {
    this.getUserData();
    this.getdept();
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

  getdept() {
    this.service.getDepartment().subscribe((data) => (this.department = data));
  }
}
