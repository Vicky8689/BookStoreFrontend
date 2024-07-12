import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-succes',
  templateUrl: './order-succes.component.html',
  styleUrls: ['./order-succes.component.css']
})
export class OrderSuccesComponent {

  constructor(private route:Router){

  }
  ContinueToshoping(){
    this.route.navigate(['/dashboard/books'])
  }

}

