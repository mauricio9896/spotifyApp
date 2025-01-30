import { Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { DetailSongComponent } from "./components/detail-song/detail-song.component";

export const SearchRoutes: Routes = [
  {
    path: '',
    children:[
      { path: '', component: ListComponent },
      { path: ':type/:id', component: DetailSongComponent },
    ]
  }
]
