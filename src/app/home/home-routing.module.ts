import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SavedUserComponent } from './components/saved-user/saved-user.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((x) => x.SearchModule),
      },
      {
        path: 'library',
        component: SavedUserComponent
      },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ],
  },
];
