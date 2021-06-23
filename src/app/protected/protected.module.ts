import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { OpenDoorComponent } from './open-door/open-door.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaultComponent } from './vault/vault.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, FooterComponent, ProfileComponent, HomeComponent, OpenDoorComponent, VaultComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ProtectedModule { }
