import { PlayerService } from '../../../player/services/player.service';
import { FormControl } from '@angular/forms';
import { ResultSearch } from '../../models/resultSearch.model';
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnDestroy {
  public resultSearch!: ResultSearch;
  public paramSearch = new FormControl('');

  constructor(private spotifyService: SpotifyService) {}

  ngOnDestroy(): void {
    const value = this.paramSearch.value;
    if (value) {
      localStorage.setItem('paramSearch', value);
    }else{
      localStorage.setItem('paramSearch', '');
    }
  }

  ngOnInit(): void {
    const param = this.getParamSearched();
    this.search(param);

    this.paramSearch.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      if (value) {
        this.search(value);
      }else{
        this.search(this.paramRandom());
      }
    });
  }

  search(param: string): void {
    this.spotifyService.search(param, 'track,artist,album').subscribe(
      (response: ResultSearch) => {
        this.resultSearch = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  paramRandom(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const index = Math.floor(Math.random() * letters.length);
    return letters[index];
  }

  getParamSearched(): string {
    const value = localStorage.getItem('paramSearch');
    if (value && value.length > 0) {
      this.paramSearch.setValue(value);
      return value;
    }
    return this.paramRandom();
  }
}
