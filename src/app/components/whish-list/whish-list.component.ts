import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.css']
})
export class WhishListComponent {
constructor(private bookService:BookService ,private route:Router){

}


whishLst:any ={}
whishlistcount:any;
ngOnInit(){
this.getAllWishlist();
}

deletefromwhilist(bookid:any){
  this.bookService.deletewhishlist(bookid).subscribe(
    response=>{
      console.log(response)
      this.ngOnInit()
    
    }
  )
}


getAllWishlist(){
  this.bookService.getWhishlist().subscribe(
    response=>{
      this.whishLst=response.data;
      this.whishlistcount=this.whishLst.length
      console.log('whishlist count :',this.whishlistcount)
      console.log('whishlistData:',this.whishLst)
    }
  )

}

}
