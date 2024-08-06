import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { SharedModule } from '../shared/shared.module';
import { CardPlayerComponent } from './components/card-player/card-player.component';

@NgModule({
  declarations: [
    PlayerComponent,
    CardPlayerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    PlayerComponent,
  ]
})
export class PlayerModule { }
