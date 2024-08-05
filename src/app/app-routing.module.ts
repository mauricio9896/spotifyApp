import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './search/components/home/home.component';
import { ListComponent } from './search/components/list-search/list.component';
import { DetailSongComponent } from './search/components/detail-song/detail-song.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: ListComponent },
      { path: 'search/:type/:id', component: DetailSongComponent },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((x) => x.LoginModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
