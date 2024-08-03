import { SpotifyService } from './../../services/spotify.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { PlayerService } from '../../services/player.service';
declare var Spotify: any;

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
    this.createWebPlayerSDK();
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
      if (res) {
        this.track = res;
        this.playSong(res);
      }
    });
  }

  createWebPlayerSDK() {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
    (<any>window).onSpotifyWebPlaybackSDKReady = this.connectPlayer.bind(this);
  }

  connectPlayer() {
    const token = this.spotifyService.token;
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: (cb: any) => {
        cb(token);
      },
      volume: 0.5,
    });

    player.connect();
    player.addListener('ready', ({ device_id }: any) => {
      console.log('Ready with Device ID', device_id);
    });

    player.addListener('not_ready', ({ device_id }: any) => {
      console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }: any) => {
      console.error(message);
    });

    player.addListener('authentication_error', ({ message }: any) => {
      console.error(message);
    });

    player.addListener('account_error', ({ message }: any) => {
      console.error(message);
    });
  }
}
