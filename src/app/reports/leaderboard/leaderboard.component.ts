import { Component, OnInit } from '@angular/core';

export interface Tenants {
  name: string;
  position?: number;
  percent?: number;
  suite: string;
  logo: string;
}

const LOCATION_DATA: Tenants[] = [
      {
        name: 'The Mart/Vornado',
        position: 1,
        percent: 0.45,
        suite: '470',
        logo: './assets/img/theMART_logo.png'
      },
      {
        name: 'Yelp',
        position: 2,
        percent: 0.43,
        suite: '26',
        logo: './assets/img/yelp_logo.png'
      },
      {
        name: 'Braintree',
        position: 3,
        percent: 0.423,
        suite: '20.27M',
        logo: './assets/img/braintree_logo.png'
      },
      {
        name: 'VelocityEHS',
        position: 4,
        percent: 0.41,
        suite: '40',
        logo: './assets/img/velocity-ehs_logo.png'
      },
      {
        name: 'Motorola',
        position: 5,
        percent: 0.40,
        suite: '40',
        logo: './assets/img/motorola_logo.png'
      },
      {
        name: 'Beam Suntory',
        position: 6,
        percent: 0.36,
        suite: '40',
        logo: './assets/img/beam-suntory_logo.png'
      },
      {
        name: 'Allstate/Arity',
        position: 7,
        percent: 0.34,
        suite: '40',
        logo: './assets/img/allstate_logo.png'
      },
      {
        name: '1871',
        position: 8,
        percent: 0.33,
        suite: '40',
        logo: './assets/img/1871_logo.png'
      },
      {
        name: 'CCC on 4',
        position: 9,
        percent: 0.31,
        suite: '40',
        logo: './assets/img/ccc_logo.png'
      },
      {
        name: 'CCC on 9',
        position: 10,
        percent: 0.23,
        suite: '9th Floor',
        logo: './assets/img/ccc_logo.png'
      },
      {
        name: 'Wunderman Thompson',
        position: 11,
        percent: 0.18,
        suite: '40',
        logo: './assets/img/wunderman-thompson_logo.png'
      }
    ];

const LEADERBOARD_DATA: Tenants[] = [
  {position: 1, name: LOCATION_DATA[0].name, suite: LOCATION_DATA[0].suite, percent: LOCATION_DATA[0].percent, logo: LOCATION_DATA[0].logo},
  {position: 2, name: LOCATION_DATA[1].name, suite: LOCATION_DATA[1].suite, percent: LOCATION_DATA[1].percent, logo: LOCATION_DATA[1].logo},
  {position: 3, name: LOCATION_DATA[2].name, suite: LOCATION_DATA[2].suite, percent: LOCATION_DATA[2].percent, logo: LOCATION_DATA[2].logo},
  {position: 4, name: LOCATION_DATA[3].name, suite: LOCATION_DATA[3].suite, percent: LOCATION_DATA[3].percent, logo: LOCATION_DATA[3].logo},
  {position: 5, name: LOCATION_DATA[4].name, suite: LOCATION_DATA[4].suite, percent: LOCATION_DATA[4].percent, logo: LOCATION_DATA[4].logo},
  {position: 6, name: LOCATION_DATA[5].name, suite: LOCATION_DATA[5].suite, percent: LOCATION_DATA[5].percent, logo: LOCATION_DATA[5].logo},
  {position: 7, name: LOCATION_DATA[6].name, suite: LOCATION_DATA[6].suite, percent: LOCATION_DATA[6].percent, logo: LOCATION_DATA[6].logo},
  {position: 8, name: LOCATION_DATA[7].name, suite: LOCATION_DATA[7].suite, percent: LOCATION_DATA[7].percent, logo: LOCATION_DATA[7].logo},
  {position: 9, name: LOCATION_DATA[8].name, suite: LOCATION_DATA[8].suite, percent: LOCATION_DATA[8].percent, logo: LOCATION_DATA[8].logo},
  {position: 10, name: LOCATION_DATA[9].name, suite: LOCATION_DATA[9].suite, percent: LOCATION_DATA[9].percent, logo: LOCATION_DATA[9].logo},
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'logo', 'percent'];
  dataSource = LEADERBOARD_DATA;

  constructor() { }

  ngOnInit() {
  }

}
