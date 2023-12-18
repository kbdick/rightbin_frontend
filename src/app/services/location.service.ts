import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CollectLocation } from '../models/location.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private api: ApiService) {}

  public cachedLocations: CollectLocation[] = [];

  public get collectLocations() {
    return this.api.getLocations().pipe(
      map((locations) => {
        this.cachedLocations = locations;
        console.log(locations);
        return locations;
      })
    );
  };

  public idFromLocationName(name: string): number | undefined {
    return this.cachedLocations.find((location) => {
      return location.name === name;
    })?.id;
  }
}