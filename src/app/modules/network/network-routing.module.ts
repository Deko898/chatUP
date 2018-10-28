import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from '../landing/components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: "home", component: HomeComponent },
        { path: "profile", component: ProfileComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
