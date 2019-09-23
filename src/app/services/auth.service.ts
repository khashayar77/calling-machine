import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { throwError, Subject} from 'rxjs';
import { User } from '../models/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  username: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) { }
  signup(username: string , password: string){
    return this.http.post<AuthResponseData>('URL',
    {
        username:username,
        password:password
    }
    )
    .pipe(
      catchError(this.handleError),tap(resData => {
        this.handleAuthentication(
          resData.username,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  login({ username, password }: { username: string; password: string; }) {
    return this.http
    .post<AuthResponseData>('URL',
    {
      username: username,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.username,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }
  private handleAuthentication(
    username: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(username, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'USERNAME_EXISTS':
        errorMessage = 'This Username exists already';
        break;
      case 'USERNAME_NOT_FOUND':
        errorMessage = 'This username does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}