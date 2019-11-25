import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from './layout/services/layout.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-seed';
  constructor(translate: TranslateService, private layoutService: LayoutService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.onResize();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.layoutService.screenSizeChanged(window.innerWidth);
  }

  ngOnInit() {
    setTimeout(() => {
      this.onResize();
    });
  }

}
