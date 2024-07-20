import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router ,private dataServices:DataService) { }

  tokenStatus = false;
  atDashboard = false;

  ngOnInit() {
    if (localStorage.getItem('token') != "") {
      this.tokenStatus = true;
    }
    this.atDashboard = true;
  }
  moreVert: any;
  routToDhasBoard() {
    this.router.navigate(['/dashboard/books'])
  }
  showProfile() {
    this.router.navigate(['/dashboard/profile'])


  }
  persionope = false;
  showPersonOperation() {
    this.persionope = true;
    console.log(this.persionope)

  }

  searchTerm="";
  updateSerarchData(){
    this.dataServices.setdata(this.searchTerm)

  }


  OnClickCart() {
    if (this.tokenStatus) {
      this.atDashboard = false;
      this.router.navigate([`/dashboard/cart`])
    }
    else {
      this.router.navigate([''])
    }
  }
  onClickLogin() {
    this.router.navigate([''])
  }
  onClickLogOut() {
    localStorage.setItem('token', "");
    this.router.navigate([''])
  }
  OnClickGetWhishlist() {
    this.atDashboard = false;
    this.router.navigate(['/dashboard/mywhishlist'])
  }
  gotoMyOrders() {

    this.router.navigate(['/dashboard/allorder'])
  }
}
