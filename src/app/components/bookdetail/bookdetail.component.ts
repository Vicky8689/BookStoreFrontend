import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';
import { DataService } from 'src/app/services/dataservices/data.service';




@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent {
  cartbtnshow = true;
  quantity = 0;
  mydata: any={} ;
  bookIdparms:any;
  feed='';
  myFeedData:any;
  constructor(private router: Router, private dataservice: DataService, private bookservice: BookService,private activerout:ActivatedRoute) {  }

  ngOnInit() {
this.activerout.paramMap.subscribe(params => {
  this.bookIdparms=params.get('id'); 
});
 this.getBookDetails(this.bookIdparms)

  }

  
  bookCount:any;


  onClickshowcart() {
    this.cartbtnshow = !this.cartbtnshow;
  }
  decreaseQuantity() {
    if(this.quantity>0){
      console.log('removing cart :',this.mydata.bookId)
      this.bookservice.deleteCart(this.mydata.bookId).subscribe(
        response=>{
          console.log('response:',response  )
        }
      );
      this.quantity--;
    }
    
    
  }
  increaseQuantity() {
    console.log('addinto cary :',this.mydata.bookId)
    this.bookservice.addCart(this.mydata.bookId).subscribe(
      response=>{
        console.log('response:',response  )
      }
    );
    this.quantity++;
   

  }
  AddwhishList(bookId:any){
    this.bookservice.addwhishlist(bookId).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
  RemovewhishList(){
console.log('hello vicky')
  }
  getBookDetails(data:any){  
    this.bookservice.getBookById(data).subscribe(
      (response)=>{
        this.mydata=response.data;
        console.log(this.mydata);
      }
    );
    this.bookservice.getFeedBack(data).subscribe(
      res=>{
        console.log('res',res.data);
        this.myFeedData=res.data;
      }
    )
  }


  addFeedBack(){
let data ={bookId:this.bookIdparms,feedback:this.feed}
this.bookservice.addFeedBack(data).subscribe(
  feedback=>{
console.log('feedres',feedback)
this.router.navigate([this.router.url])
  }
)

  }
}







 






