import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filter } from '../../customer.model';
import { FilterFormPresentationComponent } from '../filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class CustomerListPresenterService {

  private delete:Subject<number>;
  public delete$:Observable<number>;

  public filter:Subject<Filter>;
  public filter$:Observable<Filter>;
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

   openFilterModel() {
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

    componentRef.instance.filterData.subscribe((data)=>{
      this.filter.next(data);
      overlayRef.detach();
    })
  }
}
