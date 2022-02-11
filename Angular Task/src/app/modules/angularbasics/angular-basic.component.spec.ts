import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasicComponent } from './angular-basic.component';

describe('AngularBasicComponent', () => {
  let component: AngularBasicComponent;
  let fixture: ComponentFixture<AngularBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
