import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-input-scores',
  templateUrl: './input-scores.component.html',
  styleUrls: ['./input-scores.component.scss']
})
export class InputScoresComponent implements OnInit {
  @Output()
  updateDashboard: EventEmitter<any> = new EventEmitter();
  public valueForm: FormGroup;
  error: boolean;
  constructor(private service: UpdateService) { }

  ngOnInit() {
    this.valueForm = new FormGroup({
      currentValueq: new FormControl('', [Validators.required, Validators.max(60)]),
      targetValueq: new FormControl('', [Validators.required, Validators.max(60)]),
      currentValuev: new FormControl('', [Validators.required, Validators.max(60)]),
      targetValuev: new FormControl('', [Validators.required, Validators.max(60)]),
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.valueForm.controls[controlName].hasError(errorName)) {
      this.error = true;
    } else {
      this.error = false;
    }
    return this.error;
  }


  updateValues() {
    const controls = this.valueForm.controls;
    const scores = {
        currentQ: controls.currentValueq.value,
        currentV: controls.currentValuev.value,
        targetQ: controls.targetValueq.value,
        targetV: controls.targetValuev.value,
    };
    this.updateDashboard.emit(scores);
    this.service.refreshScores(scores);
  }

}
