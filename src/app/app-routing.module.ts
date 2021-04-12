import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then(mod => mod.ProtectedModule)
    
  }
  ,
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)

  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then(mod => mod.AppointmentModule)
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
