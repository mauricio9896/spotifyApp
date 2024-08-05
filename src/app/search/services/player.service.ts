import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyService } from './spotify.service';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/devices.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private spotifyApi: SpotifyWebApi.SpotifyWebApiJs;
  public idTrack$ = new BehaviorSubject<string>('');

  constructor(private spotifyService: SpotifyService) {
    this.spotifyApi = new SpotifyWebApi();
  }

  async getDataUser() {
    this.spotifyApi.setAccessToken(this.spotifyService.token);
    const user = await this.spotifyApi.getMe();
    console.log('user :>> ', user);
  }

  async playSong(uri: string){
    const position_ms = await this.getStateSong(uri);
    const device_id = await this.getDevies();
    this.spotifyApi.play({
      device_id,
      uris: [uri],
      position_ms
    });
  }


  pauseSong() {
    this.spotifyApi.pause();
  }

  private async getDevies(): Promise<string>{
    const { devices } = await this.spotifyApi.getMyDevices();
    const device = devices.find((device: any) => device.name === 'Web_SDK_App');
    return device?.id || ''
  }

  private async getStateSong(uri : string): Promise<number> {
    const { progress_ms , item } = await this.spotifyApi.getMyCurrentPlaybackState();
    if(progress_ms && uri ===  item?.uri){
      return progress_ms;
    }
    return 0;
  }

  setVolumen(volumen: number = 100) {
    this.spotifyApi.setVolume(volumen).then(
      function (data) {
        console.log('Volumen actualizado...');
      },
      function (err) {
        console.error(err);
      }
    );
  }
}
