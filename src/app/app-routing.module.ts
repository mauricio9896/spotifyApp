import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailSongComponent } from './components/detail-song/detail-song.component';
import { ListComponent } from './components/list-results/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'home', component: ListComponent },
  { path: 'song/:id', component: DetailSongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
