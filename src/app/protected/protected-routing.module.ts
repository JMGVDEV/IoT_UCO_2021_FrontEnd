import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { OpenDoorComponent } from './open-door/open-door.component';
import { VaultComponent } from './vault/vault.component';
import { OpenDoorUserComponent } from './open-door-user/open-door-user.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'open-door', component: OpenDoorComponent},
      {path: 'myvault', component: VaultComponent},
      {path: 'open-box', component: OpenDoorUserComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
