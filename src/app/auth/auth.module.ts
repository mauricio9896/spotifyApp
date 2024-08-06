import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { AuthRoutes } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
