import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(private _router:Router, private CookieService: CookieService) { }

onLogout(){
  debugger    
  localStorage.removeItem('token');
  this.CookieService.deleteAll();
  this._router.navigateByUrl('/login')
}}