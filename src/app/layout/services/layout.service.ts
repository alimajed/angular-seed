import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponsiveLayoutModel } from '../models/responsive-layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  responsiveLayoutObj: ResponsiveLayoutModel = {
    showText: false,
    showIcon: false,
    showToggleBtn: false,
    sideNavMode: '',
    sideNavHasBackdrop:  false,
    sideNavOpened: false,
    screenSize: ''
  };
  sideNavToggled: boolean;
  sideNavToggleSubject: Subject<ResponsiveLayoutModel> = new Subject<ResponsiveLayoutModel>();
  responsiveLayoutSubject: Subject<ResponsiveLayoutModel> = new Subject<ResponsiveLayoutModel>();

  constructor() { }

  refresh() {
    this.responsiveLayoutSubject.next(this.responsiveLayoutObj);
  }

  toggleSideNav(): void {
    this.sideNavToggled = !this.sideNavToggled;
    this.sideNavToggleSubject.next(this.responsiveLayoutObj);
  }

  screenSizeChanged(width: number): void {
    switch (true) {
      case (width <= 320): // mobile
        this.responsiveLayoutObj.showText = false;
        this.responsiveLayoutObj.showIcon = true;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'over';
        this.responsiveLayoutObj.sideNavHasBackdrop = true;
        this.responsiveLayoutObj.sideNavOpened = false;
        this.responsiveLayoutObj.screenSize = 'x-small';
        break;
      case (width <= 480): // tablet
        this.responsiveLayoutObj.showText = false;
        this.responsiveLayoutObj.showIcon = true;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'over';
        this.responsiveLayoutObj.sideNavHasBackdrop = true;
        this.responsiveLayoutObj.sideNavOpened = false;
        this.responsiveLayoutObj.screenSize = 'x-small';
        break;
      case (width <= 600):
        this.responsiveLayoutObj.showText = true;
        this.responsiveLayoutObj.showIcon = false;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'over';
        this.responsiveLayoutObj.sideNavHasBackdrop = true;
        this.responsiveLayoutObj.sideNavOpened = false;
        this.responsiveLayoutObj.screenSize = 'small';
        break;
      case (width <= 768):
        this.responsiveLayoutObj.showText = true;
        this.responsiveLayoutObj.showIcon = true;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'side';
        this.responsiveLayoutObj.sideNavHasBackdrop = false;
        // this.responsiveLayoutObj.sideNavOpened = true;
        this.responsiveLayoutObj.screenSize = 'small';
        break;
      case (width <= 992):
        this.responsiveLayoutObj.showText = true;
        this.responsiveLayoutObj.showIcon = true;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'side';
        this.responsiveLayoutObj.sideNavHasBackdrop = false;
        // this.responsiveLayoutObj.sideNavOpened = true;
        this.responsiveLayoutObj.screenSize = 'medium';
        break;
      case (width > 992):
        this.responsiveLayoutObj.showText = true;
        this.responsiveLayoutObj.showIcon = true;
        this.responsiveLayoutObj.showToggleBtn = true;
        this.responsiveLayoutObj.sideNavMode = 'side';
        this.responsiveLayoutObj.sideNavHasBackdrop = false;
        // this.responsiveLayoutObj.sideNavOpened = true;
        this.responsiveLayoutObj.screenSize = 'large';
        break;
      default:
          break;
    }
    this.responsiveLayoutSubject.next(this.responsiveLayoutObj);
  }
}
