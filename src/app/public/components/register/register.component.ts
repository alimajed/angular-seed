import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRole } from 'src/app/core/constants/user-roles.enum';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  screenSize: string;
  @ViewChild('registerForm', {static: false}) registerForm: FormGroup;
  user: UserModel = {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    gender: '',
    username: '',
    password: '',
    role: UserRole.USER,
  };
  registering = false;

  constructor(private layoutService: LayoutService, private registerService: RegisterService,
              private authenticationService: AuthenticationService, private router: Router) {
    this.layoutService.responsiveLayoutSubject.subscribe((responsiveLayoutObj) => {
      this.screenSize = responsiveLayoutObj.screenSize;
    });
  }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      this.registering = true;
      this.registerService.register(this.registerForm.value).subscribe(newUser => {
        this.registering = false;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        this.authenticationService.currentUserValue = newUser;
        this.router.navigate(['app/dashboard']);
      }, error => {
        console.error(error);
        this.registering = false;
      });
    }
  }

}
