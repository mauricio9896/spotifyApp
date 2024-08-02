import { SpotifyService } from '../../services/spotify.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  @Input() track !: any;

  constructor( private spotifyService : SpotifyService ){}

  playSong( track : any ){
    console.log('Play:', track);
    this.spotifyService.playSong( track.uri ).subscribe( res => console.log('res :>> ', res));
  }
}
