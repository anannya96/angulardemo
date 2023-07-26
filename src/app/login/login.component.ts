import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private hs: HeroService, public router: Router,) {}
  data: any = {};
  spinner:any=false;
  usern:any=''

  ngOnInit(): void {}
  login(d: any) {
    this.spinner=true
    debugger
    //this.data.user = this.data.user.replaceAll('<',"&")
    // for (let i = 0; i < this.data.user.length; i++) {
    //   if(this.data.user.charAt(i)=='<'){
    //     this.usern=this.usern+"&lt;"
        
    //   }
    //   else{
    //     this.usern=this.usern+this.data.user.charAt(i)
    //   }
    //   //"&lt;""
    // }
    // this.data.user = this.usern;
    // console.log("LT TEST=>",this.usern);
    
    this.hs.xmlcheck(d.user)
    
  
  setTimeout(() => {
    
    const that = this;
    $.cordys.authentication.sso
      .authenticate(d.user, d.pass)
      .done((resp: any) => {
        //that.test_ws();
        // that.router.navigateByUrl('/homepage',{state
        // });
        this.router.navigateByUrl('/homepage', { state: d });
        localStorage.setItem('token',d.user)
        this.spinner=false

        // console.log('Logged in successfully');
      })
      .fail(function () {
        console.log('fail');
      })
      .always(function () {
        console.log('always');
      });
    
  }, 1000);


  }


//   name: String=""
//   file:any;
//   getName(name:String){
//     this.name=name;
//   }
//   getFile(event:any){
//     this.file=event.target.files[0];
//     console.log("file",this.file)
//   }

//   submitData(){

//   let formData=new FormData();
//  // formData.set("name",this.name)
//   formData.set("file",this.file)

//   this.http.post('http://localhost:4200/upload/uploadFiles',formData).subscribe(
//     (Response)=>{});
//   }




}

