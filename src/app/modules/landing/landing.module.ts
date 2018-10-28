import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LandingRoutingModule
  ],
  declarations: [LayoutComponent, LoginComponent, RegisterComponent]
})
export class LandingModule { }
