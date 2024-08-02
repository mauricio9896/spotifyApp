import { FormControl } from '@angular/forms';
import { ResultSearch } from './../../models/resultSearch.model';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  public paramSearch = new FormControl('');
  public resultSearch!: ResultSearch;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.search('s');
    this.verifyToken();

    this.paramSearch.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      if (value) {
        this.search(value);
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

  verifyToken(){
    if(this.spotifyService.token !== '') return
    const token = this.obterTokenUrlCallback();
    this.spotifyService.token = token;
  }

  obterTokenUrlCallback() {
    if (!window.location.hash) return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }
}
