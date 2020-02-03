import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  register(user: UserModel) {
    console.log('resgistering ...');
    return this.http.post<any>(`${environment.apiUrl}/users/register`, user)
      .pipe(map(newUser => {
        console.log('registered successfully');
        console.log(newUser);
        return newUser;
    }));
  }

}
