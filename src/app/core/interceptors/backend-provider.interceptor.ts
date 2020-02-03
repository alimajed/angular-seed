import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRole } from 'src/app/core/constants/user-roles.enum';

const users: UserModel[] = [
    {
        id: 1,
        firstName: 'Admin',
        lastName: 'User',
        dateOfBirth: null,
        gender: 'male',
        username: 'admin',
        password: 'admin',
        role: UserRole.ADMIN
    }, {
        id: 2,
        firstName: 'Normal',
        lastName: 'User',
        dateOfBirth: null,
        gender: 'female',
        username: 'user',
        password: 'user',
        role: UserRole.USER
    }
];

@Injectable()
export class BackendProviderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // intercept request and put a delay to simulate to simulate server api call
        // you can check https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                default:
                    return next.handle(request);
            }

        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                dateOfBirth: user.dateOfBirth,
                gender: user.gender,
                role: user.role,
                token: `fake-jwt-token.${user.id}`
            });
        }

        function register() {
            const { username, password, firstName, lastName, dateOfBirth, gender, role } = body;
            const userId = users.length + 1;
            const newUser: UserModel = {
                id: userId,
                username,
                password,
                firstName,
                lastName,
                dateOfBirth,
                gender,
                role
            };
            users.push(newUser);
            console.log(users);
            newUser.token = `fake-jwt-token.${userId}`;
            return ok(newUser);
        }

        // helper functions
        // tslint:disable-next-line:no-shadowed-variable
        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'unauthorized' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1], 10);
        }
    }
}
