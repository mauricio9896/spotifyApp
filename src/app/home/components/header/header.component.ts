import { PlayerService } from './../../../player/services/player.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  public  user: any;

  constructor( private playerService : PlayerService ) { }

  ngOnInit(): void {
    this.playerService.getDataUser().then( (data) => {
      if (data){
        this.user = data;
      }
    });
  }

  navigationBack(){
    window.history.back();
  }
}
