import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.scss']
})
export class MasterpageComponent implements OnInit {

  constructor(public hs:HeroService,public router:Router) { }

  data:any={
    check:false
  };

  ngOnInit(): void {
  }
onClick(abc:any){
  this.hs.ajax('Datamanipulation','http://schemas.cordys.com/DBMetaData',{



      plantcode:this.data.pc,
      levels:this.data.level,
      approverid:this.data.ai,
      approvername:this.data.an,
      approveremail:this.data.ae,
      type:abc,
      
    })
  then:{
    alert("Data Inserted")
  }
  
  }

  
}

  
