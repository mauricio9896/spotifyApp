import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { PlayerRoutes } from './player-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
