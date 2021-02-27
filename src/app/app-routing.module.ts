import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'amazon',
    loadChildren: () => import('./pages/amazon/amazon.module').then( m => m.AmazonPageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./pages/google/google.module').then( m => m.GooglePageModule)
  },
  {
    path: 'apple',
    loadChildren: () => import('./pages/apple/apple.module').then( m => m.ApplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
