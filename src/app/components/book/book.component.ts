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
  allBookDataforsearch=this.allBookData;
  allbookCount:any;
  searchterm:string="";
  constructor(private bookservice:BookService,private router:Router,private dataservice:DataService){ }
  ngOnInit(){
    this.getBookBC()
    this.dataservice.currentsearchTerm.subscribe(
      value=>{
        this.searchterm=value;
        if(this.searchterm.length>0){

          this.allBookDataforsearch=this.allBookData.filter(book=>book.bookName.toLowerCase().includes(this.searchterm.toLowerCase())
        );
        }else{
          
          this.getBookBC();
         }
      }
    )
  }
  openBookDetail(item:any){
    console.log(item.bookId)
    
    this.router.navigate([`/dashboard/booksdetail/${item.bookId}`])

  }
  onclickSortByPrice(){
    this.allBookData.sort((a, b) => a.price - b.price);
  }

  getBookBC(){
    
    this.bookservice.getBook().subscribe(
      (response:any) => {
        console.log('data get ', response.data);
        this.allBookData=response.data;
        this.allbookCount=this.allBookData.length;
        this.allBookDataforsearch = this.allBookData
       },
       (error:any)=>{
        console.error('Error',error);
       }
      
    );

    

  }

}
