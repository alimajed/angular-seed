import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  screenSize: string;
  @ViewChild('loginForm', {static: false}) loginForm: FormGroup;
  user: any = {
    username: null,
    password: null
  };
  loggingIn = false;

  constructor(private layoutService: LayoutService, private authService: AuthenticationService, private router: Router) {
    this.layoutService.responsiveLayoutSubject.subscribe((responsiveLayoutObj) => {
        this.screenSize = responsiveLayoutObj.screenSize;
    });
  }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.loggingIn = true;
      this.authService.login(this.user.username, this.user.password).subscribe(data => {
        this.router.navigate(['app/dashboard']);
        this.loggingIn = false;
      }, error => {
        this.loggingIn = false;
      });
    }
  }

}
