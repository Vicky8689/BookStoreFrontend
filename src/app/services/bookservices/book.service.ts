import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private httpService: HttpService) {

  }
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('token') || '',
  });

  getBook() {

    return this.httpService.getServicebook('book/GetAllBook', false);

  }
  getBookById(data: any) {

    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: localStorage.getItem('token') || '',
    });
    return this.http.get<any>('https://localhost:7053/' + 'book/GetBookbyId?bookId=' + data);

  }
  getAllCart() {
    return this.httpService.getServicebook('book/getAllCart', true, { headers: this.headers })
  }

  addCart(data: any) {

    // console.log(this.httpService.postService('/book/Addcart',data,true))
    // return this.http.post<any>('https://localhost:7053/'+'book/Addcart?bookId='+data, {headers:this.headers});
    return this.httpService.postService('book/Addcart?bookId=' + data, {}, true, { headers: this.headers });

  }

  deleteCart(data: any) {

    return this.httpService.deleteService('book/deleteCart?cartId=' + data, true, { headers: this.headers });
  }

  addwhishlist(bookid: any) {

    return this.httpService.postService('book/addwishlist?bookid=' + bookid, {}, true, { headers: this.headers });

  }
  getWhishlist() {

    return this.httpService.getServicebook('book/GetAllWishlist', true, { headers: this.headers })

  }
  deletewhishlist(data:any){
    
    return this.httpService.deleteService('book/deleteWishlist?bookid='+data,true,{headers:this.headers});
  }

}
