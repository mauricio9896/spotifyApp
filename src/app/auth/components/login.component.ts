import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route : Router) {}

  ngOnInit(): void {
    this.verifyToken();
  }

  openLogin() {
    window.location.href = this.authService.getAuthorizationSpotify();
  }

  verifyToken() {
    const token = this.getTokenUrl();
    if (token){
      localStorage.setItem('token', token);
      this.route.navigate(['/home/search']);
    }
  }

  getTokenUrl() {
    if (!window.location.hash) return '';
    const params = window.location.hash.substring(1).split('&');
    const token = params[0].split('=')[1];
    return token;
  }
}
