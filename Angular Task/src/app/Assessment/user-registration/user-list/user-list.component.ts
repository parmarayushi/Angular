import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client, Office, UserRegistration } from '../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  
  @Input() userList: UserRegistration[];
  @Input() client: Client[];
  @Input() office: Office[];

  @Output() editId:EventEmitter<number>;
  @Output() deleteId:EventEmitter<number>;
  searchText: string = '';
  showForm: boolean = false;
  buttonDisabled: boolean = false;

  constructor() {
    this.editId=new EventEmitter<number>();
    this.deleteId=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  // getUserData() {
  //   this.service.getUserList().subscribe(
  //     (result) => {
  //       this.userData = result;
  //     },
  //     (error) => {
  //       console.log('Something Went Wrong');
  //     }
  //   );
  // }

  // deleteUser(id: number) {
  //   this.service.deleteUser(id).subscribe(
  //     (result) => {
  //       alert(id + ' is Deleted');
  //       this.getUserData();
  //     },
  //     (error) => {
  //       alert('Something Went Wrong');
  //     }
  //   );
  // }
  
  public editForm(id:number){
this.editId.emit(id);
  }

  public deleteUser(id:number){
    this.deleteId.emit(id);
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.buttonDisabled = false;
  }

  // getclient() {
  //   this.service.getClient().subscribe((data) => (this.client = data));
  // }

  // getoffice() {
  //   this.service.getOffice().subscribe((data) => (this.office = data));
  // }
}
