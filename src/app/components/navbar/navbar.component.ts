import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {

  constructor(private spotifyService: SpotifyService, private playerService : PlayerService ) {}


  ngOnInit(): void {
    this.verifyToken();
  }

  verifyToken(){
    if(this.spotifyService.token !== '') return
    const token = this.getTokenUrl();
    this.spotifyService.token = token;
    this.playerService.getDataUser();
  }

  getTokenUrl() {
    if (!window.location.hash) return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

}
