import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router){ }

tokenStatus=false;
atDashboard=false;

ngOnInit(){
  if(localStorage.getItem('token')!=""){
    this.tokenStatus=true;
  }
  this.atDashboard=true;
}
moreVert:any;
morefun(){

}

  OnClickCart(){
    if(this.tokenStatus){
      this.atDashboard=false;
      this.router.navigate([`/dashboard/cart`])
    }
    else{
      this.router.navigate([''])
    }
  }
  onClickLogin(){
    this.router.navigate([''])
  }
  onClickLogOut(){
    localStorage.setItem('token',"");
    this.router.navigate([''])
  }
  OnClickGetWhishlist(){
    this.atDashboard=false;
    this.router.navigate(['/dashboard/mywhishlist'])
  }
}
