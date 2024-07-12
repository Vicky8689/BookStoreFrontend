import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addressdetail',
  templateUrl: './addressdetail.component.html',
  styleUrls: ['./addressdetail.component.css']
})
export class AddressdetailComponent {

  customerDetailsFrom = new FormGroup({
    fullName:new FormControl(''),
    mobile:new FormControl(''),
    address:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl('')

  })
  ContinueButtonstatus:boolean=true;
  constructor(){}

  @Output() updateCustomreDetailEvent = new EventEmitter<any>();

  onClickContinue(){
    
    this.updateCustomreDetailEvent.emit(this.customerDetailsFrom.value);
  this.ContinueButtonstatus=false;
  }




}
