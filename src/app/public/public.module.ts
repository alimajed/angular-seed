import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MatchValueDirective } from './directives/match-value.directive';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    MatchValueDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: []
})
export class PublicModule { }
