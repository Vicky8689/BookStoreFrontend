import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressdetailComponent } from './addressdetail.component';

describe('AddressdetailComponent', () => {
  let component: AddressdetailComponent;
  let fixture: ComponentFixture<AddressdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressdetailComponent]
    });
    fixture = TestBed.createComponent(AddressdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
