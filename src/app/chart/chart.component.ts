import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { HeroService } from '../hero.service';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(public hs: HeroService) {}
  data: any = {};
  pending: any;
  accept: any;
  reject: any;

  ngOnInit(): void {
    this.acount();
    this.pcount();
    this.rcount();
    setTimeout(() => {
      this.graph2();
    }, 1000);
  }

  acount() {
    const that = this;
    this.hs
      .ajax(
        'buyertable_anannya_acceptancecount',
        'http://schemas.cordys.com/buyertable_anannya',
        {}
      )

      .then((resp) => {
        this.accept = that.hs.xmltojson(resp, 'buyertable_anannya');
        console.log(this.accept[0].count);
      });
  }

  pcount() {
    const that = this;
    this.hs
      .ajax(
        'buyertable_anannya_countforpending',
        'http://schemas.cordys.com/buyertable_anannya',
        {}
      )

      .then((resp) => {
        this.pending = that.hs.xmltojson(resp, 'buyertable_anannya');
        console.log(this.pending[0].count);
      });
  }

  rcount() {
    const that = this;
    this.hs
      .ajax(
        'buyertable_anannya',
        'http://schemas.cordys.com/buyertable_anannya',
        {}
      )

      .then((resp) => {
        this.reject = that.hs.xmltojson(resp, 'buyertable_anannya');
        // console.log(that.data);
        console.log(this.reject[0].count);
      });
  }

  graph2() {
    // console.log(this.chartdata.sumarray);
    var c = new Chart('myChart1', {
      type: 'pie',
      data: {
        labels: ['Pending', 'Approved', 'Rejected'],
        datasets: [
          {
            label: 'Actions Performed',
            // data: [this.pending.sumarray,this.accept.sumarray,this.reject.sumarray],
            data: [
              this.pending[0].count,
              this.accept[0].count,
              this.reject[0].count,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 99, 111, 0.7)',
              'rgba(54, 162, 134, 0.7)',
              'rgba(255, 206, 85, 0.7)',
              'rgba(75, 192, 112, 0.7)',
              'rgba(153, 102, 155, 0.7)',
              'rgba(255, 159, 32, 0.7)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 99, 111, 0.7)',
              'rgba(54, 162, 134, 0.7)',
              'rgba(255, 206, 85, 0.7)',
              'rgba(75, 192, 112, 0.7)',
              'rgba(153, 102, 155, 0.7)',
              'rgba(255, 159, 32, 0.7)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          // y: {
          //   beginAtZero: true,
          // },
          yAxis: {
            grid:{
              display:false
            },
            display: false //this will remove all the x-axis grid lines
        }
        },
      },
    });
  }
}
