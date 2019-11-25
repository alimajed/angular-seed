import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { takeUntil } from 'rxjs/operators';
import { UserRole } from 'src/app/core/constants/user-roles.enum';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective implements OnInit, OnDestroy {

  destroy$ = new Subject();

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.checkIfIsAdmin();
  }

  checkIfIsAdmin() {
    console.log('checking if admin...');
    this.authService.currentUser.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (user && user.role === UserRole.ADMIN) {
        console.log('is admin!');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('not admin!!');
        this.viewContainerRef.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
