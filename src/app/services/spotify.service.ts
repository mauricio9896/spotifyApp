import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private url = 'https://api.spotify.com/v1';
  private client_id: string = 'a3c73b55adf645729eec598cf3bdff9a';
  private client_secret: string = '7ac4bb51761a4fd6a674f7be448d8c1f';

  constructor(private http: HttpClient) {}

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

    return `${authEndpoint}?response_type=code&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${redirectUrl}`;
  }

  getToken(): Observable<any> {
    const authUrl = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.client_id + ':' + this.client_secret),
    });
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    return this.http.post(authUrl, body.toString(), { headers }).pipe(
      map((res: any) => {
        if (res) {
          return res.access_token;
        }
      })
    );
  }

  search(query: string, type: string): Observable<any> {
    return this.getToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token,
        });
        const url = `${this.url}/search?q=${query}&type=${type}&limit=5`;
        return this.http.get(url, { headers });
      })
    );
  }

  getTrack(id: string): Observable<any> {
    const url = `${this.url}/tracks/${id}`;
    return this.getToken().pipe(
      switchMap((token) => {
        console.log('token :>> ', token);
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.http.get(url, { headers });
      })
    );
  }

  playTrack(trackUri: string): Observable<any> {
    return this.getToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });

        return this.http.put(
          `${this.url}/me/player/play`,
          { uris: [trackUri] },
          { headers }
        );
      })
    );
  }

  getActivePlayer(): Observable<any> {
    return this.getToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });

        return this.http.get(`${this.url}/me/player`, { headers });
      })
    );
  }
}
