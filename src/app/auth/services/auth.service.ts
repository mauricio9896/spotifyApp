import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private client_id: string = 'a3c73b55adf645729eec598cf3bdff9a';

  constructor() { }

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
      'user-library-modify',
      'playlist-read-private',
      'playlist-read-collaborative',
      'streaming'
    ].join('%20');
    const responseType = `response_type=token&show_dialog=true`;

    return `${authEndpoint}?${responseType}&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${redirectUrl}`;
  }

  verifyToken(): string | null {
    return localStorage.getItem('token');
  }
}
