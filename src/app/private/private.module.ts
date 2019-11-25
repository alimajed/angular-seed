import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, UsersListComponent, ReportsComponent, LogsComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
