import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultSearch } from '../search/models/resultSearch.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private channelResults = new BehaviorSubject<ResultSearch | null>(null);
  listResults$ = this.channelResults.asObservable();

  constructor() {}

  updateListResults(list: ResultSearch) {
    this.channelResults.next(list);
  }
}
