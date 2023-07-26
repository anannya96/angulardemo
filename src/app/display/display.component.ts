import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private hs:HeroService) { }
  pagedata:any={

    drop:'',
  };
  table:any=[];

  data:any={
    drop:[],
  };


  ngOnInit(): void {
    this.test_ws();
  }
nextAjaxCall(data:any){

console.log("data=>",data);
const that=this;
this.hs
.ajax(
  'GetPartLibDatabyProjCode',
  'http://schemas.cordys.com/Mahindra_eRFQ_WSAppPackage',
  {project_Code:data.drop}
  )
  .then((resp)=>{
  that.table=that.hs.xmltojson(resp, "ERFQ_PART_LIBRARY");
    console.log("ajax 2 data=>",that.table);
    
  });


}

  test_ws(){
const that=this;
    this.hs
    .ajax
    ('GetLibraryProjCode',
    'http://schemas.cordys.com/Mahindra_eRFQ_WSAppPackage', 
    {})
    
    .then((resp)=>{
      console.log('ajax=>',resp);
      that.data.drop=that.hs.xmltojson(resp,'ERFQ_PART_LIBRARY');
      console.log("that.data.drop =>",that.data.drop)
       

     
    });
  }

}
