import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import {  AuthGuardService } from './services/auth.guard';

const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardService]},
  { path: 'userProfile', component: UserProfileComponent, canActivate : [AuthGuardService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
