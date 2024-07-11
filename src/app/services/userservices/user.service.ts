import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('token') || '',
  });
  constructor(private httpService:HttpService,private http: HttpClient) { }
  registration(data:any){

    return this.httpService.postService('api/register/user',data,false,{headers:this.headers});
    
  }
  login(data:any): Observable<any>
  {
    // const headers = new HttpHeaders({
    //   Accept: 'application/json',
    //   Authorization: localStorage.getItem('token') || '',
    // });

    // return this.http.post<any>('https://localhost:7053/api/login',data,{headers})

 return this.httpService.postService('api/login',data,false,{headers:this.headers})
  }
  

}
