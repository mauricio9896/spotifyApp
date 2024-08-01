import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailSongComponent } from './components/detail-song/detail-song.component';
import { ListComponent } from './components/list-results/list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'search', component: ListComponent },
      { path: 'song/:id', component: DetailSongComponent },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((x) => x.LoginModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
