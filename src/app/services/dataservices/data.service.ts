import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private dataSubject = new BehaviorSubject<string>("");
  currentsearchTerm=this.dataSubject.asObservable();
  setdata(data:any){
this.dataSubject.next(data);
  }

  
}
