import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectorComponent } from "./collector/collector.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from './reports/dashboard/dashboard.component';
import { LeaderboardComponent } from "./reports/leaderboard/leaderboard.component";
import { LoginComponent } from "./user/login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ReportsComponent } from "./reports/reports.component";
import { UserService } from './services/user.service';

export const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [UserService] },
  { path: 'collect_form', component: CollectorComponent, canActivate: [UserService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [UserService] },
  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [UserService] },
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: ReportsComponent, canActivate: [UserService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
