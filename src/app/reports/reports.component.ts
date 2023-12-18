import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

// UI
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(public api: ApiService) {}

  ngOnInit() {
    const startDate = "2021-07-01";
    const endDate = "2021-08-01";
    this.api.getDefaultReport(startDate, endDate).subscribe(console.log);
  }

  public get items() {
    return [];
  }
}
