import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})

export class TrendComponent implements OnInit {

  constructor() {}

    setDiversionColor(percent) {
      switch (true) {
        case percent < .25:
          return 'red';
        case percent >= .25 && percent <= .50:
          return 'orange';
        case percent >= .50:
          return 'green';
        case percent != null:
          return 'gray';
      }
    }

  ngOnInit() {
  }

  public get users() {
    return [];
  }

}
