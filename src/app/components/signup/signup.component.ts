import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submitted=false;
  constructor( private _formBuilder: FormBuilder,private userService:UserService,private router:Router ,private snakebar:MatSnackBar){

  }
 signupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    pass: new FormControl(''),
    mobile: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    
  });

  get emailm(){
    return this.signupForm.get('email')
  }
  get mobilem(){
    return this.signupForm.get('mobile')
  }


  ngOninit(){
  }

  signupuser(){
   
    console.log(this.signupForm);
    const {name,email,pass,mobile} = this.signupForm.value
    if(this.signupForm.valid ){
      let data = {name:name,email:email,password:pass,mobile:mobile}
      this.userService.registration(data).subscribe(
        (response:any) => {
         
          console.log(response);
          if(response.success){

            this.router.navigate([this.router.url])
          }else{
            this.snakebar.open('User Already Exist' , 'Close',{
              duration:3000
            })
            this.router.navigate([this.router.url])
          }
          
 
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
