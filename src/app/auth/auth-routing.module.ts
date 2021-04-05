import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistreComponent } from './pages/registre/registre.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registre', component: RegistreComponent},
      {path: '**', redirectTo: 'login'},
      
    ]
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
