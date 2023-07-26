import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-formtobesent',
  templateUrl: './formtobesent.component.html',
  styleUrls: ['./formtobesent.component.scss'],
})
export class FormtobesentComponent implements OnInit {
  constructor(public hs: HeroService) {}

  data: any;
  buyertable_anannya_recentdata() {
    const that = this;
    this.hs
      .ajax(
        'buyertable_anannya_recentdata',
        'http://schemas.cordys.com/buyertable_anannya',
        {}
      )
      .then((resp) => {
        that.data = that.hs.xmltojson(resp, 'buyertable_anannya');
        console.log(that.data);
      });
  }

  ngOnInit(): void {
    this.buyertable_anannya_recentdata();
  }
  onClick(d: any) {
    // this.hs.ajax('RejectionMailToVendor_WebserviceOperation','http://schemas.cordys.com/', {

    // })}

    this.hs
      .ajax(
        'Updatebuyertable_anannya',
        'http://schemas.cordys.com/buyertable_anannya',
        {
          tuple: {
            old: {
              buyertable_anannya: {
                
               // status:null
                 reqid: d[0].reqid,
              },
            },
            new: {
              buyertable_anannya: {
                reqid: d[0].reqid,
                status: 'Rejected',
              },
            },
          },
        }
      )
      .then((resp) => {
        console.log('Updated', resp);
      });
      
  }
  onAccept(d:any){
    this.hs.ajax('Updatebuyertable_anannya','http://schemas.cordys.com/buyertable_anannya',{
      tuple:{
        old: {
          buyertable_anannya: {
            
           // status:null
             reqid: d[0].reqid,
          },
        },
        new:{
          buyertable_anannya:{
          reqid: d[0].reqid,
          status:"Accepted"
        }}

      }

    })
     .then((resp) => {
        console.log('Updated', resp);
      });
  }
}
