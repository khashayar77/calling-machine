import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap, delay, map } from "rxjs/operators";
import { throwError, Subject, Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { AuthResponseData } from '../interface/test';
import { MOCK_AuthResponseData } from '../data/list-mock';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  signup(username: string, password: string) {
    return this.http.post<AuthResponseData>("URL", { username, password }).pipe(
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

  login({
    username,
    password
  }: {
    username: string;
    password: string;
  }): Observable<User> {
    // return this.http
    //   .post<AuthResponseData>("URL", { username,password,returnSecureToken: true})
    return of( MOCK_AuthResponseData as AuthResponseData)
      .pipe(delay(333))
      .pipe(
        catchError(this.handleError),
        map(resData => {
          return this.handleAuthentication(
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
    return user;
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "USERNAME_EXISTS":
        errorMessage = "This Username exists already";
        break;
      case "USERNAME_NOT_FOUND":
        errorMessage = "This username does not exist.";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "This password is not correct.";
        break;
    }
    return throwError(errorMessage);
  }
}
