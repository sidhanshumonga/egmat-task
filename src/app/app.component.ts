import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egmat-task';
  showDashboard = false;
  clicked = false;
  scores = {
    currentQ: 0,
    currentV: 0,
    targetQ: 0,
    targetV: 0,
  };


  updateDashboard(values) {
    this.clicked = true;
    this.scores.currentQ = values.currentQ;
    this.scores.currentV = values.currentV;
    this.scores.targetQ = values.targetQ;
    this.scores.targetV = values.targetV;
    this.showDashboard = true;
  }
}
