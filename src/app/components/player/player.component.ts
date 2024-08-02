import { FormControl } from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service';
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {

  @Input() track !: any;
  public volumen : FormControl = new FormControl(100);

  constructor( private playerService : PlayerService ){}

  ngOnInit(): void {
    this.volumen.valueChanges.pipe(debounceTime(20)).subscribe(value => this.playerService.setVolumen(value));
  }

  playSong( track : any ){
    this.playerService.playSong( track.uri );
  }
}
