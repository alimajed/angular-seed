import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
