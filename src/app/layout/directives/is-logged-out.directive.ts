import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appIsLoggedOut]'
})
export class IsLoggedOutDirective implements OnInit, OnDestroy {

  destroy$ = new Subject();

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.checkIfLoggedOut();
  }

  checkIfLoggedOut() {
    console.log('checking if logged out...');
    this.authService.currentUser.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (!user) {
        console.log('logged out!');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('not logged out!!');
        this.viewContainerRef.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
