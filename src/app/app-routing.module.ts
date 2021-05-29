import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then(mod => mod.ProtectedModule),
    canActivate: [ ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]

  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    canActivate: [ ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then(mod => mod.AppointmentModule),
    canActivate: [ ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
