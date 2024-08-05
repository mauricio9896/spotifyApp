import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
