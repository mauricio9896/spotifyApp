import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private url = 'https://api.spotify.com/v1';
  private token : string | null;

  constructor(private http: HttpClient, private authService : AuthService) {
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
}
