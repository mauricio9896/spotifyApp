import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private spotifyApi: SpotifyWebApi.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new SpotifyWebApi();
  }

  playSong(uri: string){
    this.spotifyApi.play({
      uris: [uri],
      position_ms: 1722577678415,
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
