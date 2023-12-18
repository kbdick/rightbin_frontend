import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Collector } from '../models/collector.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  public cachedCollectors: Collector[] = [];

  constructor(private api: ApiService) { }

  public get collectors() {
    return this.api.getCollectors().pipe(
      map((collectors) => {
        this.cachedCollectors = collectors;
        console.log(collectors);
        return collectors;
      })
    );
  }

  public idFromCollectorName(name: string): number | undefined {
    return this.getCollectorByName(name)?.id;
  }

  public getCollectorByName(name: string) {
    return this.cachedCollectors.find((collector) => {
      return collector.name === name;
    });
  }

}
