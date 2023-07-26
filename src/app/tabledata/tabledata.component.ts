import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {

  constructor(private hs:HeroService) { }
  data:any;
  abc:any=[];
  showPopup=false;
  copydata:any={};

  acc:any;
  ngOnInit(): void {
    this.buyertable_anannya_getalldata(); //this is called here when we want the data to be loaded when the page loads
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
actionperformed(d:any,abc:any,i:any){

  this.hs
  .ajax(
    'Updatebuyertable_anannya',
    'http://schemas.cordys.com/buyertable_anannya',
    {
      tuple: {
        old: {
          buyertable_anannya: {
            
           // status:null
             reqid: d[i].reqid,
          },
        },
        new: {
          buyertable_anannya: {
            reqid: d[i].reqid,
            status: abc,
          },
        },
      },
    }
  )
  .then((resp) => {
    console.log('Updated', resp);
  });

}

rowclick(item:any){
  console.log(item);
  this.showPopup=true;
  this.copydata={...item};
  console.log(this.copydata);
  

}

close(){
  this.showPopup=false
}


submission(){

  if(this.acc=='null'){
    console.log("No action performed!!")
  }
  else if(this.acc=='Accpet'){
    this.hs.ajax('Updatebuyertable_anannya','http://schemas.cordys.com/buyertable_anannya',{
      tuple:{
        old: {
          buyertable_anannya: {
            
           // status:null
             reqid: this.copydata.reqid,
          },
        },
        new:{
          buyertable_anannya:{
          reqid: this.copydata.reqid,
          status:"Accepted"
        }}

      }

    })
    console.log("Approved")
    
  }
  else{
    this.hs.ajax('Updatebuyertable_anannya','http://schemas.cordys.com/buyertable_anannya',{
      tuple:{
        old: {
          buyertable_anannya: {
            
           // status:null
             reqid: this.copydata.reqid,
          },
        },
        new:{
          buyertable_anannya:{
          reqid: this.copydata.reqid,
          status:"Rejected"
        }}

      }

    })
    
    console.log("Rejected")
  }
  // this.vvv();
}
// vvv(){

// }
}
