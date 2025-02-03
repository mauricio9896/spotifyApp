import { PlayerService } from './../../../player/services/player.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../search/services/spotify.service';
import { debounceTime } from 'rxjs';
import { ResultSearch } from '../../../search/models/resultSearch.model';
import { SharedDataService } from '../../../shared/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public paramSearch = new FormControl('');
  public user: any;

  constructor(
    private playerService: PlayerService,
    private route: Router,
    private spotifyService: SpotifyService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.playerService
      .getDataUser()
      .then((data) => {
        if (!data) return;
        this.user = data;
      })
      .catch((error) => console.error(error));
    this.startSearch();
  }

  ngOnDestroy(): void {
    const value = this.paramSearch.value;
    value
      ? localStorage.setItem('paramSearch', value)
      : localStorage.setItem('paramSearch', '');
  }

  startSearch(): void {
    const param = this.getParamSearched();
    this.search(param);
    this.paramSearch.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      value ? this.search(value) : this.search(this.paramRandom());
    });
  }

  search(param: string): void {
    this.spotifyService.search(param, 'track,artist,album').subscribe(
      (response: ResultSearch) => {
        if (!response) return;
        this.sharedDataService.updateListResults(response);
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

  navigationBack() {
    window.history.back();
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
