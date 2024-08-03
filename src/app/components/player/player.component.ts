import { SpotifyService } from './../../services/spotify.service';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  public track!: any; // definir el tipo
  public volumen: FormControl = new FormControl(100);

  constructor(
    private playerService: PlayerService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.volumen.valueChanges
      .pipe(debounceTime(20))
      .subscribe((value) => this.playerService.setVolumen(value));

    this.playerService.idTrack$.subscribe((id) => {
      id && this.detailById('track', id);
    });
  }

  playSong(track: any) {
    this.playerService.playSong(track.uri);
  }

  detailById(type: string, id: string) {
    this.spotifyService.detailById(type, id).subscribe((res) => {
      if(res){
        this.track = res;
        this.playSong(res);
      }
    });
  }
}
