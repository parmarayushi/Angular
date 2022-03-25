import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Filter } from '../../customer.model';
import { FilterFormPresenterService } from '../filter-form-presenter/filter-form-presenter.service';

@Component({
  selector: 'app-filter-form-presentation',
  templateUrl: './filter-form-presentation.component.html',
  styleUrls: ['./filter-form-presentation.component.css'],
  viewProviders: [FilterFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilterFormPresentationComponent implements OnInit {

@Output() public filterData:EventEmitter<Filter>
@Output() public cancel :EventEmitter<Filter>

  public filterForm:FormGroup;
  constructor(private filterFormpresenter:FilterFormPresenterService,private location:Location) {
    this.filterForm=this.filterFormpresenter.buildForm();

    this.filterData=new EventEmitter();
    this.cancel=new EventEmitter<Filter>();
   }

  ngOnInit(): void {
  }

  onFilter(){
    this.filterData.emit(this.filterForm.value)
  }

  onCancel(){
    this.cancel.emit();
  }
}
