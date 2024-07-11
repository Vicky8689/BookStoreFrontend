import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    return true;
    // Implement your logic to check if the user is logged in
    // This can be a simple boolean or a check against a token in localStorage/sessionStorage
    // return !!localStorage.getItem('token'); // Example check
  }

  
}
