import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../search/services/spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  openLogin() {
    window.location.href = this.spotifyService.getAuthorizationSpotify();
  }
}
