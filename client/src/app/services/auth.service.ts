import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

export interface AuthResponseData {
  id: string;
  username: string;
  email: string;
  roles: Array<string>;
  accessToken: string;
  refreshToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(username: string, emailAddress: string, password: string) {
    const url = environment.baseUrl + '/auth/signup';
    return this.http
      .post<AuthResponseData>(url, {
        username: username,
        user_email: emailAddress,
        user_password: password,
        user_telephone: 1234567890,
        user_address: '',
      })
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          return throwError('Error occurred while signing up!');
        }),
        tap((responseData) => {
          this.handleResponse(
            responseData.username,
            responseData.email,
            responseData.roles,
            responseData.accessToken,
            responseData.refreshToken,
            responseData.id
          );
        })
      );
  }

  login(emailAddress: string, password: string) {
    const url = environment.baseUrl + '/auth/signin';
    return this.http
      .post<AuthResponseData>(url, {
        user_email: emailAddress,
        user_password: password,
      })
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          return throwError('Error occurred while logging in!');
        }),
        tap((responseData) => {
          this.handleResponse(
            responseData.username,
            responseData.email,
            responseData.roles,
            responseData.accessToken,
            responseData.refreshToken,
            responseData.id
          );
        })
      );
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    }
    const loadedUser: User = JSON.parse(userData);
    const user = new User(
      loadedUser.username,
      loadedUser.email,
      loadedUser.roles,
      loadedUser.accessToken,
      loadedUser.refreshToken,
      loadedUser.id
    );

    this.user.next(user);
  }

  logout() {
    const url = environment.baseUrl + '/auth/signout';
    this.http.post(url, {}).subscribe((data) => {
      this.user.next(null);
      localStorage.removeItem('userData');
      localStorage.removeItem('cart_detail');
      this.router.navigate(['/']);
    });
  }

  handleResponse(
    username: string,
    email: string,
    roles: Array<string>,
    accessToken: string,
    refreshToken: string,
    id: string
  ) {
    const user = new User(
      username,
      email,
      roles,
      accessToken,
      refreshToken,
      id
    );
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.user.next(user);
  }
}
