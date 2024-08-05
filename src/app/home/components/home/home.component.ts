import { AuthService } from './../../../auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.verifyToken();
  }

  verifyToken() {
    if (this.authService.verifyToken()) return;
    const token = this.getTokenUrl();
    localStorage.setItem('token', token);
  }

  getTokenUrl() {
    if (!window.location.hash) return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }
}
