import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(){

  }
  login=true;
  signup=false;
  onLogin(){
    this.login=true;
    this.signup=false

  }
  onSignup(){
    this.signup=true
    console.log(this.signup)
    this.login=false;
  }

}
