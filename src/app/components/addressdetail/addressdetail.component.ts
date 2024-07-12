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
  constructor(){}

  @Output() updateAddressDetailEvent = new EventEmitter<any>();

  onClickContinue(){
    
       
  }




}
