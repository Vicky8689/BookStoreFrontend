import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addressdetail',
  templateUrl: './addressdetail.component.html',
  styleUrls: ['./addressdetail.component.css']
})
export class AddressdetailComponent {

  customerDetailsFrom = new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required])

  })

  
  ContinueButtonstatus:boolean=true;
  constructor(){}

  @Output() updateCustomreDetailEvent = new EventEmitter<any>();

  onClickContinue(){
    if(this.customerDetailsFrom.valid){

      this.updateCustomreDetailEvent.emit(this.customerDetailsFrom.value);
    this.ContinueButtonstatus=false;
    }
  



  }





}
