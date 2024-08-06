import { SpotifyService } from './../../services/spotify.service';
import { Component, Input } from '@angular/core';
import { TracksItem } from '../../models/resultSearch.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrl: './card-song.component.css',
})
export class CardSongComponent {
  @Input() song!: TracksItem;
  @Input() index!: number;
  @Input() savedTracks: boolean = false;
  public loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  savedTrackUser(track: TracksItem) {
    this.loading = true;
    this.spotifyService.savedTrackUser(track.id).subscribe(
      () => {
        this.spotifyService.refresh$.next(true);
        this.loading = false;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Canción guardada",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        this.loading = false;
        console.log('error :>> ', error);
      }
    );
  }
}
