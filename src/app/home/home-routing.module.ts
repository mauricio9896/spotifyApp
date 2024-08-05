import { SearchModule } from './../search/search.module';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

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
    ],
  },
];
