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
  public token: string = '';

  constructor(private http: HttpClient) {
  }

  getAuthorizationSpotify(): string {
    const authEndpoint: string = 'https://accounts.spotify.com/authorize';
    const redirectUrl: string = 'http://localhost:4200/home';
    const scopes = [
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-modify-playback-state',
      'user-read-recently-played',
      'user-top-read',
      'user-library-read',
      'playlist-read-private',
      'playlist-read-collaborative',
      'streaming'
    ].join('%20');
    const responseType = `response_type=token&show_dialog=true`;

    return `${authEndpoint}?${responseType}&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${redirectUrl}`;
  }

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
}
