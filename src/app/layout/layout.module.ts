import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { IsLoggedInDirective } from './directives/is-logged-in.directive';
import { IsAdminDirective } from './directives/is-admin.directive';
import { IsLoggedOutDirective } from './directives/is-logged-out.directive';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    IsLoggedInDirective,
    IsAdminDirective,
    IsLoggedOutDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [ToolbarComponent, SidenavComponent]
})
export class LayoutModule { }
