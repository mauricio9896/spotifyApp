import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
  private token!: string | null;
  public idTrack$ = new BehaviorSubject<string>('');

  constructor(private authService: AuthService) {
    this.token = this.authService.verifyToken();
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken(this.token);
  }

  private async getDevies(): Promise<string> {
    const { devices } = await this.spotifyApi.getMyDevices();
    const device = devices.find((device: any) => device.name === 'Web_SDK_App');
    return device?.id || '';
  }

  private async getStateSong(uri: string): Promise<number> {
    const { progress_ms, item } =
      await this.spotifyApi.getMyCurrentPlaybackState();
    if (progress_ms && uri === item?.uri) {
      return progress_ms;
    }
    return 0;
  }

  getDataUser(): Promise<any> {
    return this.spotifyApi.getMe();
  }

  async playSong(uri: string) {
    const position_ms = await this.getStateSong(uri);
    const device_id = await this.getDevies();
    this.spotifyApi.play({
      device_id,
      uris: [uri],
      position_ms,
    });
  }

  pauseSong() {
    this.spotifyApi.pause();
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
