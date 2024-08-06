import { SpotifyService } from './../../../search/services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-user',
  templateUrl: './saved-user.component.html',
  styleUrl: './saved-user.component.css',
})
export class SavedUserComponent implements OnInit {
  public savedTracks: any;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getTracks();
    this.spotifyService.refresh$.subscribe((refresh) => {
      refresh && this.getTracks();
    });
  }

  getTracks() {
    this.spotifyService.getUserSavedTracks().subscribe((tracks) => {
      this.savedTracks = tracks;
    });
  }
}
