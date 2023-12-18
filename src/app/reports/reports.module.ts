import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LastInputComponent } from './last-input/last-input.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ReportsComponent } from './reports.component';
import { TipsComponent } from './tips/tips.component';
import { TrendComponent } from './trend/trend.component';

// UI
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';

@NgModule({
  declarations: [
    DashboardComponent,
    LastInputComponent,
    LeaderboardComponent,
    ReportsComponent,
    TipsComponent,
    TrendComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
})
export class ReportsModule { }
