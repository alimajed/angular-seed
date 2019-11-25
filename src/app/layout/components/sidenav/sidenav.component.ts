import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @ViewChild('sideNav', {static: true}) sideNav: MatSidenav;
  sideNavMode: string;
  sideNavHasBackdrop: boolean;
  sideNavOpened: boolean;
  showText: boolean;
  showIcon: boolean;
  destroy$ = new Subject();

  constructor(private layoutService: LayoutService) {
    this.layoutService.sideNavToggleSubject.pipe(
      takeUntil(this.destroy$)
    ).subscribe((responsiveLayoutObj) => {
      // this.sideNav.toggle();
      if (responsiveLayoutObj.sideNavMode === 'over') {
        this.sideNavOpened = !this.sideNavOpened;
        this.showText = true;
        this.showIcon = true;
      } else {
        if (this.sideNavOpened) {
          if (this.showText && this.showIcon) {
            this.showText = false;
          } else if (this.showIcon) {
            this.sideNavOpened = false;
            this.showIcon = false;
            this.showText = false;
          }
        } else {
          this.sideNavOpened = true;
          this.showIcon = true;
          this.showText = true;
        }
      }
    });

    this.layoutService.responsiveLayoutSubject.pipe(
      takeUntil(this.destroy$)
    ).subscribe((responsiveLayoutObj) => {
      this.sideNavMode = responsiveLayoutObj.sideNavMode;
      this.sideNavHasBackdrop = responsiveLayoutObj.sideNavHasBackdrop;
      this.sideNavOpened = responsiveLayoutObj.sideNavOpened;
      if (responsiveLayoutObj.sideNavMode === 'over') {
        this.showText = true;
        this.showIcon = true;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
