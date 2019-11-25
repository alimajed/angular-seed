import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogsComponent } from './components/logs/logs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'logs', component: LogsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'users-list', component: UsersListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
