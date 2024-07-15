import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/httpservices/http.service';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
constructor(private httpservices:HttpService){
}

private headers = new HttpHeaders({
  Accept: 'application/json',
  Authorization: localStorage.getItem('token') || '',
});

userData:any={};
ngOnInit(){
  console.log('i am in profile',this.userData)

    this.httpservices.getServicebook('api/allprofile/',true,{ headers: this.headers }).subscribe(

      response=>{
      this.userData=response.data;
      console.log(this.userData)
      }
    )
    

}


}
