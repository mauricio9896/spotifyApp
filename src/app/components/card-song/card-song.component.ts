import { Component, Input } from '@angular/core';
import { TracksItem } from '../../models/resultSearch.model';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrl: './card-song.component.css'
})
export class CardSongComponent {

  @Input() song !: TracksItem;

  constructor(private spotifyService: SpotifyService) { }

  saveSong(song: TracksItem){
    console.log('song :>> ', song);
  }

  playSong(track: TracksItem) {
    // this.spotifyService.getActivePlayer().subscribe(
    //   response => {
    //     console.log('response :>> ', response);
    //     const deviceId = response.device.id;

    //     this.spotifyService.playTrack(this.accessToken, trackUri, deviceId).subscribe(
    //       response => {
    //         console.log('Playback started', response);
    //       },
    //       error => {
    //         console.error('Error starting playback', error);
    //       }
    //     );
    //   },
    //   error => {
    //     console.error('Error getting active player', error);
    //   }
    // );
  }
}
