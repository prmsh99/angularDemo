import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token',token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  setUserType(type: string) {
    localStorage.setItem('userType',type); // user / admin
  }

  getUserType():any {
    localStorage.getItem('userType'); // user / admin
  }

  isLoggedIn() {
    if(!this.getToken()) {
      this.router.navigate(['login']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  login({email, password}: any): Observable<any> {
    if(email == "abc@gmail.com" && password == "12345") {
      this.setToken('asdasdad');
      this.setUserType('admin');
      return of({name: 'bahubali', email: "abc@gmail.com", admin:true});
    } else if(email == "xyz@gmail.com" && password == "12345") {
      this.setToken('asdasdad');
      this.setUserType('user');
      return of({name: 'kattappa', email: "xyz@gmail.com", admin: false});
    }
    return throwError(new Error('Failed to login'));
  }
}
