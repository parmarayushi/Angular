import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public personaldetails: FormGroup;
  public contactdetails: FormGroup;

  public ispersonaldetails: boolean = false;
  public iscontactdetails: boolean = false;
  public ispersonaldetailsform: boolean = false;
  public iscontactdetailsform: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personaldetails = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.contactdetails = this.fb.group({
      contactno: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  get getvalue() {
    return this.personaldetails.controls;
  }

  public next() {
    if (this.personaldetails.valid) {
      this.iscontactdetails = true;
    }
    if (this.iscontactdetails && this.contactdetails.valid) {
      this.ispersonaldetailsform = true;
    }
  }
  public previous() {
    this.iscontactdetails = false;
    this.ispersonaldetailsform = false;
    this.contactdetails.reset();
  }

}
