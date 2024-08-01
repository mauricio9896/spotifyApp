import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private authUrl = 'https://accounts.spotify.com/api/token';
  private client_id: string = 'bb77bbd55cba47518bfccfe9e5f41e31';
  private client_secret: string = '406c9dfd68b84d3594044bce50a969cb';

  private baseUrl = 'https://api.spotify.com/v1';

  private redirectUri = 'http://localhost:4200/';

  constructor(private http: HttpClient) {}

  private getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.client_id + ':' + this.client_secret),
    });
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    return this.http.post(this.authUrl, body.toString(), { headers }).pipe(map( (res : any ) => {
      if (res) {
        return res.access_token
      }
    } ));
  }

  getAuthorizationUrl(): string {
    const scopes = [
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing'
    ].join('%20');

    return `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${this.redirectUri}`;
  }

  search(query: string, type: string): Observable<any> {
    return this.getToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token,
        });
        const url = `${this.baseUrl}/search?q=${query}&type=${type}&limit=5`;
        return this.http.get(url, { headers });
      })
    );
  }

  getTrack(id: string): Observable<any> {
    const url = `${this.baseUrl}/tracks/${id}`;
    return this.getToken().pipe(
      switchMap((token) => {
        console.log('token :>> ', token);
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        return this.http.get(url, { headers });

      }));
  }

  playTrack(trackUri: string): Observable<any> {
    return this.getToken().pipe(
      switchMap((token) => {

        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });

        return this.http.put(
          `${this.baseUrl}/me/player/play`,
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

        return this.http.get(`${this.baseUrl}/me/player`, { headers });
      })
    );
  }
}
