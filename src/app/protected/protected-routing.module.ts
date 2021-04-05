import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
