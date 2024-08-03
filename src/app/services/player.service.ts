import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyService } from './spotify.service';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/devices.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private spotifyApi : SpotifyWebApi.SpotifyWebApiJs;
  public idTrack$ = new BehaviorSubject<string>('');

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
    this.getDevies().then(({ devices })=>{
      const { id } = devices.find((device: Device) => device.name === 'Web_SDK_App');
      this.spotifyApi.play({
        device_id: id,
        uris: [uri],
      });
    });
  }

  pauseSong(){
    this.spotifyApi.pause();
  }

  getDevies(): Promise<any> {
    return this.spotifyApi.getMyDevices();
  }

  setVolumen(volumen : number = 100 ){
    this.spotifyApi.setVolume(volumen).then(function(data) {
      console.log('Volumen actualizado...');
    }, function(err) {
      console.error(err);
    });
  }
}
