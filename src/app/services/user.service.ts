import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ApiService, LOCAL_STORAGE_JWT_KEY } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService implements CanActivate {
  private _currentUser = new BehaviorSubject<User | null>(null);

  constructor(private router: Router, private api: ApiService) {
    if (localStorage.getItem(LOCAL_STORAGE_JWT_KEY)) {
      this.api.currentUser()
      .pipe(
        catchError((error, _caught) => {
          if (error?.error?.reason === "expired_signature") {
            console.log("Expired signature");
            localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
          }
          return throwError(error);
        })
      )
      // No need to unsubscribe because currentUser calls `http`
      .subscribe(user => {
        this._currentUser.next(user);
      });
    }
  }

  get currentUser(): Observable<User | null> {
    return this._currentUser.asObservable();
  }

  public signIn(email: string, password: string) {
    const body = { email, password }
    // No need to unsubscribe because login calls `http`
    return this.api.login(body).subscribe(user => this._currentUser.next(user));
  }

  public signOut() {
    const observable = this.api.logout()
    // No need to unsubscribe
    observable.subscribe(() => {
      this._currentUser.next(null);
      this.router.navigate(['/']);
    });
    return observable;
  }

  canActivate(_route, _state)
  {
    return this._currentUser.pipe(map(user => {
      if (user) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
