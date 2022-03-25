import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Office, UserRegistration } from '../model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit,OnChanges {
  
  userregistration:FormGroup;
  userData: UserRegistration[];
  searchText: string;
  sortclient:number;
  id: number;
  isAddMode?: boolean;
  showForm: boolean = false;
  // buttonDisabled: boolean = false;
  submitted: boolean = false;


  @Input() clientName:Client[];
  @Input() officeName:Office[];
  @Input() edit : UserRegistration;
  @Output() saveData:EventEmitter<UserRegistration>;
  @Output() updateUser:EventEmitter<UserRegistration>;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.saveData=new EventEmitter<UserRegistration>()
    this.updateUser=new EventEmitter<UserRegistration>();
  }

  ngOnInit(): void {
this.buildForm();

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  public buildForm(){
    this.userregistration = this.fb.group({
      id:[],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      client: ['',Validators.required],
      office: ['',Validators.required],
    });

    this.editUserForm();
  }

  get getvalue() {
    return this.userregistration['controls'];
  }

  public editUserForm(){
    if(this.edit?.id){
      this.toggleForm();
      this.userregistration.patchValue(this.edit);
    }
  }
  // getClientList() {
  //   this.service.getClient().subscribe(
  //     (result: Client[]) => {
  //       this.clientData = result;
  //     },
  //     (error) => {
  //       alert('Something went Wrong');
  //     }
  //   );
  // }

  // getOfficeList() {
  //   this.service.getOffice().subscribe(
  //     (result: Office[]) => {
  //       this.officeData = result;
  //     },
  //     (error) => {
  //       alert('Something went Wrong');
  //     }
  //   );
  // }

  // saveData() {
  //   console.log(this.userregistration);
  //   this.service.createUser(this.userregistration.value).subscribe(
  //     (result) => {
  //       alert('Data Saved Successfully');
  //     },
  //     (error) => {
  //       alert('Something Went Wrong');
  //     }
  //   );
  // }

  // getbyid() {
  //   if (!this.isAddMode) {
  //     this.service
  //       .getById(this.id)
  //       .subscribe((x) => this.userregistration.patchValue(x));
  //   }
  // }
  
  // updateUser() {
  //   console.log(this.userregistration);
  //   this.service.updateUser(this.id, this.userregistration.value).subscribe(
  //     (result) => {
  //       alert('Data Updated Successfully');
  //     },
  //     (error) => {
  //       alert('Something Went Wrong');
  //     }
  //   );
  // }

  toggleForm() {
    this.showForm = !this.showForm;
    // this.buttonDisabled = true;
  }

  onSubmit() {
    this.submitted = true;
      if(this.userregistration.valid){
       this.saveData.emit(this.userregistration.value);
      }
    this.userregistration.reset();
    this.toggleForm();
  }
}
  