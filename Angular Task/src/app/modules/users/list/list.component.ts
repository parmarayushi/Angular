import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { DeletePopupComponent } from 'src/app/shared/delete-popup/delete-popup.component';
import { FormModelComponent } from '../form-model/form-model.component';
import { Department, User } from '../model/form.model';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  userData: User[];
  searchText: string = '';
  departmentData: Department[];

  editData: User;

  constructor(private service: FormService, private overlay: Overlay) {
    this.userData = [];
    this.departmentData = [];
    this.searchText = '';
    this.editData = {} as User;
  }

  ngOnInit(): void {
    this.getUserData();
    this.getDepartmentList();
    this.getdept();
  }

  getDepartmentList(): void {
    this.service.getDepartment().subscribe(
      (result: Department[]) => {
        this.departmentData = result;
      },
      (error) => {
        alert('Something went Wrong');
      }
    );
  }

  getUserData(): void {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData = result;
      },
      (error) => {
        console.log('Something Went Wrong');
      }
    );
  }

  saveData(data: User): void {
    this.service.createUser(data).subscribe(
      (result) => {
        alert('Data Saved Successfully');
        this.getUserData();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  updateUser(id: number, data: User): void {
    this.service.updateUser(id, data).subscribe(
      (result) => {
        alert('Data Updated Successfully');
        this.getUserData();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  deleteUser(id: number): void {
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

  editUser(id: number): void {
    this.service.getById(id).subscribe(
      (result) => {
        this.editData = result;
        this.openFormModel(id);
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  getdept() {
    this.service
      .getDepartment()
      .subscribe((data) => (this.departmentData = data));
  }

  openFormModel(id?: number) {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop=true;
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(FormModelComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.department = this.departmentData;

    if (id) {
      componentRef.instance.id = id;
      componentRef.instance.editData=this.editData;
      componentRef.instance.userData.subscribe((result) => {
        overlayRef.detach();
        this.updateUser(id, result);
      });
    } else {
      componentRef.instance.userData.subscribe((result) => {
        overlayRef.detach();
        this.saveData(result);
      });
    }
    componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  }

  deletePopUp(id: number) {
    let config = new OverlayConfig();

    config.hasBackdrop = true;
    config.maxWidth = '400px';
    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.value.subscribe((result) => {
      if (result) {
        this.deleteUser(id);
        overlayRef.detach();
      } else {
        overlayRef.detach();
      }
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }
}
