import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private spotifyApi : SpotifyWebApi.SpotifyWebApiJs;

  constructor( private spotifyService : SpotifyService ) {
    this.spotifyApi = new SpotifyWebApi();
  }

  getDataUser() {
    this.spotifyApi.setAccessToken(this.spotifyService.token);
    this.spotifyApi.getMe().then(
      function (data) {
        console.log('Información del usuario', data);
      },
      function (err) {
        console.error(err);
      }
    );
  }

  playSong(uri: string){
    this.spotifyApi.play({
      uris: [uri],
      position_ms: 0,
    }).then(function(data) {
      console.log('Reproduciendo...');
    }, function(err) {
      console.error(err);
    });
  }

  setVolumen(volumen : number = 100 ){
    this.spotifyApi.setVolume(volumen).then(function(data) {
      console.log('Volumen actualizado...');
    }, function(err) {
      console.error(err);
    });
  }
}
