import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private httpservice:HttpService) { }

  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('token') || '',
  });

  AddOrder(data:any){
 return this.httpservice.postService('order/addorder',data,true,{headers:this.headers})
  }
  GetAllOrder(){
    return this.httpservice.getServicebook('order/GetallOrder',true,{headers:this.headers});
  }
}
