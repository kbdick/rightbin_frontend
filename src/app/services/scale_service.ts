import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScaleWeight } from '../models/scale.model';
import { BrowserSerial } from 'browser-serial';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class ScaleService {
  constructor(public http: HttpClient, private userService: UserService) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      if (user) {
        this.connectToScale(user);
      }
    });
  }

  private serial = new BrowserSerial();
  private scaleValue: BehaviorSubject<ScaleWeight> = new BehaviorSubject({ scale: 0 });
  private currentUserSubscription: Subscription = null;

  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe();
  }

  async connectToScale(user: User) {
    if (!user.scale) {
      return;
    }
    console.log("Connecting to scale: ", user.scale);

    this.serial.serialOptions = {
      baudRate: user.scale.baud_rate,
      dataBits: user.scale.data_bit,
      stopBits: user.scale.stop_bit,
      bufferSize: user.scale.buffer_size,
      flowControl: "none"
    };

    const regex = new RegExp(user.scale.regex);

    await this.serial.connect();

    this.serial.readLoop((output: string, _done: boolean) => {
      const result = regex.exec(output);
      if (!result) {
        console.warn("Could not parse the scale output - regex or scale read issue:\n", output);
        return true;
      }
      console.log("Result from parsing raw scale output:\n", result);
/*
      const signStr = result[1];
      const weightStr = result[2];
      if (!signStr || !weightStr) {
        console.warn("Could not parse a weight from the scale output - no signStr or weightStr:\n", output);
        return true;
      }

      let sign: number, weight: number;
      try {
        sign = signStr === "+" ? 1 : -1;
        weight = parseFloat(weightStr) * sign;
      }
      catch {
        console.warn("Could not parse float value from scale output - could not parseFloat:\n", [output, signStr, weightStr]);
        return true;
      }
*/
      let weight: number;
      weight = parseInt(result[0]);

      const scaleWeight: ScaleWeight = { scale: weight };
      console.log("Pushing to scaleValue:", scaleWeight);
      this.scaleValue.next(scaleWeight);
      return true;
    });
  }

  public getScaleWeight(): Observable<number>{
    return this.scaleValue.asObservable().pipe(map((scaleWeight) => scaleWeight.scale));
  }

}
