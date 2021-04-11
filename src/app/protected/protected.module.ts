import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, FooterComponent, ProfileComponent, HomeComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ProtectedModule { }
