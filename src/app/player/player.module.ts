import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // SearchModule
  ],
  exports:[
    PlayerComponent,
  ]
})
export class PlayerModule { }
