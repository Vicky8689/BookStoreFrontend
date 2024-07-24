import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/httpservices/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  addbookFrom= new FormGroup(
    {
      name:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required),
      desc :new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      discountPrice:new FormControl('',Validators.required),
    }
  )

  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('token') || '',
  });

  constructor(private httpservice:HttpService ,private roeter:Router){}
  gotologin(){
    this.roeter.navigate([''])
  }

  tokenstatus=false;
  ngOnInit(){
    if(localStorage.getItem('token')!=""){
      this.tokenstatus=true;
    }
  }
addBook(){
  if(this.addbookFrom.valid){
    const {name ,author,desc,quantity,price,discountPrice} = this.addbookFrom.value
    let data = {bookName:name,author:author,description:desc,quantity:quantity,price:price,discountPrice:discountPrice}
    this.httpservice.postService('book/Addbook',data,true, {headers:this.headers}).subscribe(
      response=>{
        console.log('book : ',response)
      }
    )
  }


}



                                                                                                      

}
