import { Component, OnInit } from '@angular/core';
import { CollectService } from '../../services/collect.service';

@Component({
  selector: 'app-collected',
  templateUrl: './collected.component.html',
  styleUrls: ['./collected.component.scss']
})

export class CollectedComponent implements OnInit {

  constructor(public collectService: CollectService) {}

  ngOnInit() {
  }

  public get lastCollect() {
    return this.collectService.lastSavedCollect;
  }

}
