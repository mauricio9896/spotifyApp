import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerModule } from '../player/player.module';
import { SavedUserComponent } from './components/saved-user/saved-user.component';
import { SearchModule } from "../search/search.module";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    SavedUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    PlayerModule,
    SearchModule
],
})
export class HomeModule { }
