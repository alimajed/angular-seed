import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserRole } from '../constants/user-roles.enum';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log('logging in...');
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        console.log('logging in successfully');
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  logout() {
    console.log('logging out...');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    console.log('logged out successfully');
    this.router.navigate(['public/login']);
  }

  isAdmin() {
      return this.currentUser && this.currentUserSubject.value.role === UserRole.ADMIN;
  }
}
