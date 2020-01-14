import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit {
  public valueForm: FormGroup;
  error: boolean;
  constructor() { }

  @Input()
  type: string;

  ngOnInit() {
    this.valueForm = new FormGroup({
      currentValue: new FormControl('', [Validators.required, Validators.max(60)]),
      targetValue: new FormControl('', [Validators.required, Validators.max(60)]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.valueForm.controls[controlName].hasError(errorName)) {
      this.error = true;
    }
    else {
      this.error = false;
    }
    return this.error;
  }


}
