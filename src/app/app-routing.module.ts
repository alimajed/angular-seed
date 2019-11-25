import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
  },
  {
    path: 'app',
    canLoad: [AuthGuard],
    loadChildren: () => import('./private/private.module').then(mod => mod.PrivateModule)
  },
  {path: '', redirectTo: '/public/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
