import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  showText: boolean;
  showIcon: boolean;
  showToggleBtn: boolean;
  destroy$ = new Subject();

  constructor(private layoutService: LayoutService,
              private authService: AuthenticationService) {
    this.layoutService.responsiveLayoutSubject.pipe(
      takeUntil(this.destroy$)
    ).subscribe((responsiveLayoutObj) => {
      this.showText = responsiveLayoutObj.showText;
      this.showIcon = responsiveLayoutObj.showIcon;
      this.showToggleBtn = responsiveLayoutObj.showToggleBtn;
    });
  }

  ngOnInit() {
    this.layoutService.refresh();
  }

  toggleSideNav(): void {
    this.layoutService.toggleSideNav();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
