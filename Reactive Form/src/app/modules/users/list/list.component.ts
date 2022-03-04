import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FormModelComponent } from '../form-model/form-model.component';
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
  constructor(private service: FormService, private overlay:Overlay) {}

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

  openFormModel(){
    // const target = document.querySelector("#btn") as HTMLElement;
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position().global().centerHorizontally().right()
    });
    const component = new ComponentPortal(FormModelComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.cancel.subscribe(()=> overlayRef.detach());
  }
}
