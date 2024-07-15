import { Component } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderservice/orderservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private OrderserviceService:OrderserviceService){}
myorders:any;
  ngOnInit(){
    this.getAllOrders();
  }
  getAllOrders(){
    this.OrderserviceService.GetAllOrder().subscribe(
      response=>{
        console.log('response',response);
        this.myorders=response.data;
      }
    )
  }

}
