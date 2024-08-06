import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private url = 'https://api.spotify.com/v1';
  private token: string | null;
  public refresh$ = new Subject<boolean>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.verifyToken();
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

  getTopTracksArtist(id: string): Observable<any> {
    const url = `${this.url}/artists/${id}/top-tracks`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<any>(url, { headers });
  }

  getUserSavedTracks(): Observable<any> {
    const url = `${this.url}/me/tracks?limit=10&offset=0`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<any>(url, { headers });
  }

  savedTrackUser(id: string ): Observable<any> {
    const url = `${this.url}/me/tracks?ids=${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
    const body = { ids: [id]};
    return this.http.put<any>(`${url}`, body, { headers });
  }
}
