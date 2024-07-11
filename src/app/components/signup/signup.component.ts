import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submitted=false;
  constructor( private _formBuilder: FormBuilder,private userService:UserService,private router:Router ){

  }
 signupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
    mobile: new FormControl(''),
    
  });
  ngOninit(){
    this.signupForm=this._formBuilder.group(
      {
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        pass: ['',[Validators.required]],
        mobile: ['',[Validators.required]],         
      },    
     
    );
  }

  signupuser(){
   
    console.log(this.signupForm);
    const {name,email,pass,mobile} = this.signupForm.value
    if(this.signupForm.valid ){
      let data = {name:name,email:email,password:pass,mobile:mobile}
      this.userService.registration(data).subscribe(
        (response:any) => {
         
          console.log(response);
          this.router.navigate([''])
          
 
        },
        (error) => {
          
          console.error('Registration failed:', error);
        
        }
      );

    }
    else{

      console.log('Form Not Valid');
    }
  }



}
