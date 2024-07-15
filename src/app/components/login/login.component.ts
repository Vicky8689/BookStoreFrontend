import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage='';
  loginform = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')

  })
  constructor(private userservice:UserService,private route:Router){

  }

  loginuser(){
    console.log('i am in login component');
    if(this.loginform.valid){
      const {email,password} = this.loginform.value
      let data = {email:email,password:password }
    this.userservice.login(data).subscribe(
      (response)=>{
        console.log('Login successful',response);
        if(response.success){
          localStorage.setItem('token','Bearer '+response.message); 
          
          this.route.navigateByUrl('/dashboard');
        }
        else{
          this.errorMessage ='Invalid email or password. Please try Again ..'
        }


      }
    )
    }
  }

}
