import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category/category.page').then( m => m.CategoryPage)
      },
      {
        path: 'main',
        loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage)
      },
      {
        path: 'more',
        loadComponent: () => import('./pages/more/more.page').then( m => m.MorePage)
      },
      {
        path: 'stats',
        loadComponent: () => import('./pages/stats/stats.page').then( m => m.StatsPage)
      }
    ]
  }
];
