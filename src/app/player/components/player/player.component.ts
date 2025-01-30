import { AuthService } from './../../../auth/services/auth.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { PlayerService } from '../../services/player.service';
import { SpotifyService } from '../../../search/services/spotify.service';
declare var Spotify: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  public track!: any; // definir el tipo
  public volumen: FormControl = new FormControl(100);
  public playingSong : boolean = false;

  constructor(
    private playerService: PlayerService,
    private authService : AuthService,
    private spotifyService: SpotifyService,
  ) {}

  ngOnInit(): void {
    // this.createWebPlayerSDK();

    // this.volumen.valueChanges
    //   .pipe(debounceTime(30))
    //   .subscribe((value) => this.playerService.setVolumen(value));

    // this.playerService.idTrack$.subscribe((id) => {
    //   id && this.detailById('track', id);
    // });
  }

  playSong(track: any) {
    this.playingSong = true;
    this.playerService.playSong(track.uri);
  }

  pauseSong(track : any) {
    this.playingSong = false;
    this.playerService.pauseSong();
  }

  nextTrack(track : any){
    console.log('track :>> ', track);
    this.playerService.nextTrack(track.album.id);
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
    const token = this.authService.verifyToken();
    const player = new Spotify.Player({
      name: 'Web_SDK_App',
      getOAuthToken: (cb: any) => {
        cb(token);
      },
      volume: 1,
    });

    player.addListener('ready', ({ device_id }: any) => {
      console.log('Ready with Device ID', device_id);
    });

    player.connect();
  }
}
