import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
constructor(private bookservice:BookService,private router:Router){}
allCart:any={};
cartCount:any;
ngOnInit(){
  this.getAllCart()
}

getAllCart(){
  this.bookservice.getAllCart().subscribe(
    response=>{
      console.log(response.data)
      this.allCart=response.data;
      this.cartCount=this.allCart.length
      
    }
  );
}

quantity:any;



decreaseQuantity(item:any) {

  if(item.quantity>0){
    
    console.log('removing cart :',item.bookId)

    this.bookservice.deleteCart(item.bookId).subscribe(
      response=>{
        console.log('response:',response  )
        this.ngOnInit()
      }
    );
    
  }

  
  
}
increaseQuantity(bookid:any) {
  console.log('addinto cary :',bookid)
  this.bookservice.addCart(bookid).subscribe(
    response=>{
      console.log('response:',response  )
      this.ngOnInit()
      
    }
  );
 
 
 

}

}
