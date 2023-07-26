import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss'],
})
export class AdminpageComponent implements OnInit {
  data: any;
  constructor(private hs: HeroService) {}

  ngOnInit(): void {
    this.approvalmatrix_anannya_getAllData();
  }

  approvalmatrix_anannya_getAllData() {
    const that = this;
    this.hs
      .ajax(
        'approvalmatrix_anannya_getAllData',
        'http://schemas.cordys.com/approvalmatrix',
        {}
      )
      .then((resp) => {
        that.data = that.hs.xmltojson(resp, 'approvalmatrix');// approvalmatrix is the value present inside old tuple
        console.log(that.data);
      });
  }
}
