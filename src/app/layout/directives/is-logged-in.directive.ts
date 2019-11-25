import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appIsLoggedIn]'
})
export class IsLoggedInDirective implements OnInit, OnDestroy {

  destroy$ = new Subject();

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    console.log('checking if logged in...');
    this.authService.currentUser.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (user) {
        console.log('logged in!');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('not logged in!!');
        this.viewContainerRef.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
