import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../my-auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  userData: any;
  UserRole: any;

  constructor(public auth: MyAuthService, private cookieservice: CookieService) {}

  ngOnInit(): void {
    this.userData = localStorage.getItem('token');
    if (this.userData == 'anannya') {
      this.UserRole = 'Buyer';
    } else {
      this.UserRole = 'Manager';
    }
    debugger;
    alert(this.UserRole);
    // this.clearAppData();
  }
  onLogout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.cookieservice.deleteAll();
}


}
