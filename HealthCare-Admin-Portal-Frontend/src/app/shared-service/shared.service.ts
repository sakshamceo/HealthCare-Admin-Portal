import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLoggedInSubject =  new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor() { }
  isLoggedIn(value:boolean)
  {
    this.isLoggedInSubject.next(value);
  }
}
