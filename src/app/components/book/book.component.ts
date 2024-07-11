import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {


  allBookData:any[]=[];
  allbookCount:any;
  constructor(private bookservice:BookService,private router:Router,private dataservice:DataService){

  }
  ngOnInit(){
    this.getBookBC()
  }
  openBookDetail(item:any){
    console.log(item.bookId)
    
    this.router.navigate([`/dashboard/booksdetail/${item.bookId}`])

  }



  getBookBC(){
    this.bookservice.getBook().subscribe(
      (response:any) => {
        console.log('data get ', response.data);
        this.allBookData=response.data;
        this.allbookCount=this.allBookData.length;
       },
       (error:any)=>{
        console.error('Error',error);
       }
      
    );

  }

}
