import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScoresComponent } from './input-scores.component';

describe('InputScoresComponent', () => {
  let component: InputScoresComponent;
  let fixture: ComponentFixture<InputScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
