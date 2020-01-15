import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class UpdateService {
  scores: any;
  eventChanged = new Subject<object>();

  constructor() { }

  refreshScores(scores) {
    this.scores = scores;
    this.eventChanged.next(this.scores);
  }

  getRefreshState(): Observable<any> {
    return this.eventChanged.asObservable();
  }
  
}
