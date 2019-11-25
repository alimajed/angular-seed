import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRole } from 'src/app/core/constants/user-roles.enum';

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

  constructor(private layoutService: LayoutService) {
    this.layoutService.responsiveLayoutSubject.subscribe((responsiveLayoutObj) => {
      this.screenSize = responsiveLayoutObj.screenSize;
    });
  }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      // register
    }
  }

}
