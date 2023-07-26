import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-buyer-data',
  templateUrl: './buyer-data.component.html',
  styleUrls: ['./buyer-data.component.scss']
})
export class BuyerDataComponent implements OnInit {

  constructor(private hs:HeroService) { 
    
  }
  data:any;

  ngOnInit(): void {
    this.buyertable_anannya_getalldata();
  }

  buyertable_anannya_getalldata(){
    const that=this;
    this.hs.ajax('buyertable_anannya_getalldata','http://schemas.cordys.com/buyertable_anannya',{


    })
    .then((resp)=>{
      that.data = that.hs.xmltojson(resp, 'buyertable_anannya');
      console.log(that.data);
    })
  }

}
