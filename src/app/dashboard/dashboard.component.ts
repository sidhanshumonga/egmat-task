import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AUTO_STYLE, trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input()
  scores: any;

  currentWidthQ = 0;
  targetWidthQ = 0;
  currentWidthV = 0;
  targetWidthV = 0;

  currentWidthQp = 0;
  targetWidthQp = 0;
  targetWidthVp = 0;
  currentWidthVp = 0;


  widthQ = 60;
  widthV = 60;
  width = 200 + (this.widthQ + this.widthV) * 5;

  currentWidth = 0;
  currentWidthp = 0;
  targetWidth = 0;
  targetWidthp = 0;

  constructor(private service: UpdateService) {
    // tslint:disable-next-line: no-shadowed-variable
    this.service.getRefreshState().subscribe(state => {
      if (state.currentQ) {
        this.updateScores(state);
        this.updateBars();
      }
    });
  }

  ngOnInit() {
    this.updateScores(this.scores);
    this.updateBars();
  }

  resetScores() {
    this.currentWidthQ = 0;
    this.currentWidthV = 0;
    this.targetWidthQ = 0;
    this.targetWidthV = 0;

    this.currentWidthQp = 0;
    this.targetWidthQp = 0;
    this.targetWidthVp = 0;
    this.currentWidthVp = 0;

    this.widthQ = 60;
    this.widthV = 60;
    this.width = 200 + (this.widthQ + this.widthV) * 5;

    this.currentWidth = 0;
    this.currentWidthp = 0;
    this.targetWidth = 0;
    this.targetWidthp = 0;
  }


  updateScores(scores) {
    this.resetScores();
    this.currentWidthQ = scores.currentQ;
    this.currentWidthV = scores.currentV;
    this.targetWidthQ = scores.targetQ;
    this.targetWidthV = scores.targetV;
  }

  updateBars() {
    this.currentWidthQp = this.currentWidthQ / this.widthQ * 100;
    this.targetWidthQp = this.targetWidthQ / this.widthQ * 100;
    this.currentWidthVp = this.currentWidthV / this.widthV * 100;
    this.targetWidthVp = this.targetWidthV / this.widthV * 100;

    this.currentWidth = 200 + (this.currentWidthQ + this.currentWidthV) * 5;
    this.currentWidthp = this.currentWidth / this.width * 100;
    this.targetWidth = 200 + (this.targetWidthQ + this.targetWidthV) * 5;
    this.targetWidthp = this.targetWidth / this.width * 100;
  }



}
