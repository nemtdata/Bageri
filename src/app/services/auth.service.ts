import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(this.cookieService.get('isLoggeIn') === 'true');

get isLoggeIn(){
  return this.loggedIn.asObservable();
}

  constructor(
    private router: Router,
     private http: HttpClient,
     private cookieService: CookieService ) { }

}
