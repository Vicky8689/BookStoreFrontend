import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';
import { OrderSuccesComponent } from '../order-succes/order-succes.component';
import { OrderserviceService } from 'src/app/services/orderservice/orderservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
  constructor(private bookservice: BookService, private router: Router,private orderservices:OrderserviceService) { }
  allCart: any = {};
  cartCount: any;
  quantity: any;
  customerDetail: boolean = false;
  orderSummery: boolean = false;
  myCustomerData: any;
  ngOnInit() {
    this.getAllCart()
  }

  getAllCart() {
    this.bookservice.getAllCart().subscribe(
      response => {
        console.log(response.data)
        this.allCart = response.data;
        this.cartCount = this.allCart.length

      }
    );
  }

  //updatae customer details
  updateCustomreDetail(customerData: any) {
    console.warn('customer data in parent ', customerData);
    this.myCustomerData = customerData;
    this.orderSummery = true;
  }

  //place order
  onClickPlaceOrder() {
    if(this.allCart.length>0){

      this.customerDetail = !this.customerDetail;
    }

  }
  //order succes
  OrderSucces() {

    const {fullName,mobile,address,city,state}=this.myCustomerData;
for(var cart of this.allCart){

let data = {cAdd:address,cCity:city,cName:fullName,cState:state,cartId:cart.cartId,BookId:cart.bookId}
  this.orderservices.AddOrder(data).subscribe(
   response=>{
     console.log('response of add order:'+cart.cartId,response)
   } );
}

    this.router.navigate(['dashboard/orderSucces'])
  }


  decreaseQuantity(item: any) {

    if (item.quantity > 0) {

      console.log('removing cart :', item.bookId)

      this.bookservice.deleteCart(item.bookId).subscribe(
        response => {
          console.log('response:', response)
          this.ngOnInit()
        }
      );

    }

  }
  increaseQuantity(bookid: any) {
    console.log('addinto cary :', bookid)
    this.bookservice.addCart(bookid).subscribe(
      response => {
        console.log('response:', response)
        this.ngOnInit()

      }
    );




  }

}
