import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private _isOnline = new BehaviorSubject<boolean>(true);

  constructor() {
    const handleConnectionChange = (event) => {
      if (event.type == "offline") {
        this._isOnline.next(false);
      }
      else if (event.type == "online") {
        this._isOnline.next(true);
      }
    }

    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
  }

  public get isOnline$() {
    return this._isOnline.asObservable();
  }

  public get isOffline$() {
    return this.isOnline$.pipe(
      map((isOnline) => !isOnline)
    );
  }
}
