import { Component, OnInit } from '@angular/core';
import { MyAuthService } from './my-auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demoProject';
  constructor(private _authService:MyAuthService,private CookieService:CookieService,private router:Router){}

  ngOnInit(): void {
    if(this.CookieService.get('defaultinst_SAMLart')!=""){
      console.log("wefr",this.CookieService.get('defaultinst_SAMLart'));
      
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}
