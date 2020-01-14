import { Component, OnInit } from '@angular/core';
import { AUTO_STYLE, trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('for', style({
        width: '{{ width }}',
      }), { params: { width: '0px' } }), // default parameters values required

      transition('* => for', [
        animate('1000ms ease-in-out', keyframes([
          style({ width: '0px' }),
          style({ width: '{{width}}%' }),
        ]))
      ]),
    ])
  ]
})
export class DashboardComponent implements OnInit {
  widthQ = 60;
  currentWidthQ = 42;
  currentWidthQp = this.currentWidthQ / this.widthQ * 100;
  targetWidthQ = 48;
  targetWidthQp = this.targetWidthQ / this.widthQ * 100;

  widthV = 60;
  currentWidthV = 34;
  currentWidthVp = this.currentWidthV / this.widthV * 100;
  targetWidthV = 41;
  targetWidthVp = this.targetWidthV / this.widthV * 100;

  width = 200 + (this.widthQ + this.widthV) * 5;
  currentWidth = 200 + (this.currentWidthQ + this.currentWidthV) * 5;
  currentWidthp = this.currentWidth / this.width * 100;
  targetWidth = 200 + (this.targetWidthQ + this.targetWidthV) * 5;
  targetWidthp =  this.targetWidth / this.width * 100;

  constructor() { }

  ngOnInit() {
  }

}
