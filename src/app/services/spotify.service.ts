import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private url = 'https://api.spotify.com/v1';
  private client_id: string = 'a3c73b55adf645729eec598cf3bdff9a';
  // private client_secret: string = '7ac4bb51761a4fd6a674f7be448d8c1f';
  private _token: string = '';
  private spotifyApi: SpotifyWebApi.SpotifyWebApiJs;

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  constructor(private http: HttpClient) {
    this.spotifyApi = new SpotifyWebApi();
  }

  getAuthorizationSpotify(): string {
    const authEndpoint: string = 'https://accounts.spotify.com/authorize';
    const redirectUrl: string = 'http://localhost:4200/home';
    const scopes = [
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-state',
      'user-top-read',
      'user-modify-playback-state',
      'user-library-read',
      'playlist-read-private',
      'playlist-read-collaborative',
    ].join('%20');
    const responseType = `response_type=token&show_dialog=true`;

    return `${authEndpoint}?${responseType}&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${redirectUrl}`;
  }

  // getToken(): Observable<any> {
  //   const authUrl = 'https://accounts.spotify.com/api/token';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     Authorization: 'Basic ' + btoa(this.client_id + ':' + this.client_secret),
  //   });
  //   const body = new URLSearchParams();
  //   body.set('grant_type', 'client_credentials');
  //   return this.http.post(authUrl, body.toString(), { headers }).pipe(
  //     map((res: any) => {
  //       if (res) {
  //         return res.access_token;
  //       }
  //     })
  //   );
  // }

  search(query: string, type: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    const url = `${this.url}/search?q=${query}&type=${type}&limit=5`;
    return this.http.get(url, { headers });
  }

  detailById(type: string, id: string): Observable<any> {
    const url = `${this.url}/${type}s/${id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get(url, { headers });
  }

  // getActivePlayer(): Observable<any> {
  //   return this.getToken().pipe(
  //     switchMap((token) => {
  //       const headers = new HttpHeaders({
  //         Authorization: `Bearer ${token}`,
  //       });
  //       return this.http.get(`${this.url}/me/player`, { headers });
  //     })
  //   );
  // }

  getDataUser() {
    this.spotifyApi.setAccessToken(this.token);
    this.spotifyApi.getMe().then(
      function (data) {
        console.log('Información del usuario', data);
      },
      function (err) {
        console.error(err);
      }
    );
  }
}
