import { FormControl } from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service';
import { Component, Input } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  @Input() track !: any;
  public volumen : FormControl = new FormControl(100);

  constructor( private spotifyService : SpotifyService ){
    // this.volumen.valueChanges.pipe(debounceTime(50)).subscribe(value => this.spotifyService.setVolumen(value));
  }

  playSong( track : any ){
    // this.spotifyService.playSong( track.uri );
  }
}
