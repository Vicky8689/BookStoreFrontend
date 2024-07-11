import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrlNote ='https://localhost:7053/';

  constructor(private http:HttpClient) { 
    
  }
  getServicebook(url:string,token:boolean=false,httpOtions:any={}):Observable<any>{

    return this.http.get<any>(this.baseUrlNote+url,token && httpOtions);
  }
 
   // create function
   postService(url:string,data:any,token:boolean=false,httpOtions:any={}){
    console.log('i am in :',token)
    return this.http.post(this.baseUrlNote+url,data,token && httpOtions);
  }
 
  deleteService(url:string,token:boolean=false,httpOtions:any={}){

    return this.http.delete(this.baseUrlNote+url,token && httpOtions);
  }


}
