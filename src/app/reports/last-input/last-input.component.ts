import { Component, OnInit } from '@angular/core';
import { CollectService } from '../../services/collect.service';

@Component({
  selector: 'app-last-input',
  templateUrl: './last-input.component.html',
  styleUrls: ['./last-input.component.scss']
})

export class LastInputComponent implements OnInit {

  constructor(public collectService: CollectService) {}

  ngOnInit() {
  }

  public get lastCollect() {
    return this.collectService.lastSavedCollect;
  }

}
