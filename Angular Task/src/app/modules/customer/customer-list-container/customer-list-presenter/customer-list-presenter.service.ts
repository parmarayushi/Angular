import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer, Filter } from '../../customer.model';
import { FilterFormPresentationComponent } from '../filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class CustomerListPresenterService {

  private delete:Subject<number>;
  public delete$:Observable<number>;

  public filter:Subject<Customer[]>;
  public filter$:Observable<Customer[]>;
  constructor(private overlay:Overlay) {
    this.delete=new Subject();
    this.delete$=new Observable();

    this.delete$=this.delete.asObservable();

    this.filter=new Subject();
    this.filter$=new Observable();

    this.filter$=this.filter.asObservable();
   }

   public onDelete(id:number){
     console.log(id);
     this.delete.next(id);
   }

   openFilterModel(currentList:Customer[]) {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop=true;
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(FilterFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    // componentRef.instance.filterData.subscribe((data)=>{
    //   this.filter.next(data);
    //   overlayRef.detach();
    // })

    componentRef.instance.filterData.subscribe((res : any) =>{
      //get keys of array
      let dataKey = Object.keys(currentList[0]);
      let newData = [...currentList];
      
      dataKey.forEach((item : any) => {
        if (res[item]) {
          console.log(res[item])
          newData = newData.filter((data : any) => {
            return data[item] == res[item]
          });
        }
      });
      this.filter.next(newData);
      overlayRef.detach();      
    });

    componentRef.instance.cancel.subscribe(() => {
      overlayRef.detach()
    });
  }

  sortBy(sortBy: string, customerData: Customer[], isDesc: boolean) {
    customerData.sort(Customer.comparator(sortBy as keyof Customer, isDesc ? 1 : -1));
  }
}
