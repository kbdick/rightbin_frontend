import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WasteType } from '../models/waste_type.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WasteTypeService {
  constructor(private api: ApiService) { }

  public cachedWaste_Types: WasteType[] = [];

  public get waste_types() {
    return this.api.getWasteTypes().pipe(
      map((waste_types) => {
        this.cachedWaste_Types = waste_types;
        console.log(waste_types);
        return waste_types;
      })
    );
  };

  public idFromWaste_TypeName(name: string) {
    return this.getWaste_TypeByName(name)?.id;
  }

  public getWaste_TypeByName(name: string) {
    return this.cachedWaste_Types.find((waste_type) => {
      return waste_type.waste_type_name === name;
    });
  }

}