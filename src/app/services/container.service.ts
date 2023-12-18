import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Container } from '../models/container.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  public cachedContainers: Container[] = [];

  constructor(private api: ApiService) { }

  public get containers() {
    return this.api.getContainers().pipe(
      map((containers) => {
        this.cachedContainers = containers;
        console.log(containers);
        return containers;
      })
    );
  }

  public idFromContainerName(name: string): number | undefined {
    return this.getContainerByName(name)?.id;
  }

  public getContainerByName(name: string) {
    return this.cachedContainers.find((container) => {
      console.log("getContainerByName", container.name);
      return container.name === name;
    });
  }
}
