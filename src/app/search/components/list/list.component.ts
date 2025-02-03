import { SharedDataService } from './../../../shared/shared-data.service';
import { ResultSearch } from '../../models/resultSearch.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  public resultSearch!: ResultSearch | null;

  constructor(private sharedDataService  : SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.listResults$.subscribe((res: ResultSearch | null) => {
      if(!res) return;
      this.resultSearch = res;
    });
  }
}
