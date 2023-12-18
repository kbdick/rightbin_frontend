import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { CollectLocation } from '../models/location.model';
import { Container } from '../models/container.model';
import { WasteType } from '../models/waste_type.model';
import { Collector } from '../models/collector.model';
import { Collect, CollectInput } from '../models/collects.model';
import { map } from 'rxjs/operators';
import { NetworkService } from './network.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DefaultReport } from '../models/reports.model';

export const LOCAL_STORAGE_JWT_KEY = 'recycle_tracker_jwt'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private isOnline: boolean = true;
  private isOnlineSubscription: Subscription = null;

  constructor(private http: HttpClient, private networkService: NetworkService) {
    this.isOnlineSubscription = this.networkService.isOnline$.subscribe((isOnline) => this.isOnline = isOnline);
  }

  ngOnDestroy() {
    this.isOnlineSubscription?.unsubscribe();
    this.isOnlineSubscription = null;
  }

  public login(body: { email: string, password: string}) {
    return this.http.post<User>('/auth/login', body, {
      ...this.httpOptions,
      observe: 'response',
    }).pipe(map(response => {
      const jwt = response.headers.get("X-RTRACKER-JWT");
      if (jwt) {
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwt);
      }
      return response.body
    }));
  }

  public logout() {
    const post = this.http.post('/auth/logout', {}, this.httpOptions);
    post.subscribe(() => localStorage.removeItem(LOCAL_STORAGE_JWT_KEY));
    return post;
  }

  public currentUser() {
    const uri = '/auth/current_user'
    return this.http.get<User>(uri, this.httpOptions);
  }

  public getLocations() {
    const uri = '/locations';

    if (this.isOnline) {
      return this.http.get<CollectLocation[]>(uri, this.httpOptions).pipe(
        map(this.cacheGetRequest(uri)),
      );
    } else {
      const result = this.getCachedRequest<CollectLocation[]>(uri);
      console.log("Within getLocations", result);
      return new BehaviorSubject(result).asObservable();
    }
  }

  public getWasteTypes() {
    const uri = '/waste_types';

    if (this.isOnline) {
        return this.http.get<WasteType[]>(uri, this.httpOptions).pipe(
        map(this.cacheGetRequest(uri)),
      );
    } else {
      const result = this.getCachedRequest<WasteType[]>(uri);
      return new BehaviorSubject(result).asObservable();
    }
  }

  public getCollectors() {
    const uri = '/collectors';

    if (this.isOnline) {
      return this.http.get<Collector[]>(uri, this.httpOptions).pipe(
        map(this.cacheGetRequest(uri)),
      );
    } else {
      const result = this.getCachedRequest<Collector[]>(uri);
      console.log("Within getCollectors", result);
      return new BehaviorSubject(result).asObservable();
    }
  }


  public getContainers() {
    const uri = '/containers';

    if (this.isOnline) {
      return this.http.get<Container[]>(uri, this.httpOptions).pipe(
        map(this.cacheGetRequest(uri)),
      );
    } else {
      const result = this.getCachedRequest<Container[]>(uri);
      console.log("Within getContainers", result);
      return new BehaviorSubject(result).asObservable();
    }
  }

  public recordCollect(collect: CollectInput) {
    const data = {
      collect: collect,
    }
    return this.http.post<Collect>('/collects', data, this.httpOptions);
  }

  // dates should be formatted "YYYY-MM-DD"
  public getDefaultReport(startDate: string, endDate: string) {
    const queryString = `start_date=${startDate}&end_date=${endDate}`
    return this.http.get<DefaultReport>(`/reports/default?${queryString}`, this.httpOptions);
  }

  private get headers() {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const jwt = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);

    if (jwt) {
      headers = headers.append('X-RTRACKER-JWT', jwt);
    }

    return headers;
  }

  private get httpOptions() {
    return {
      headers: this.headers
    }
  };

  private cacheGetRequest<T>(uri: string) {
    return (apiResponse: T) => {
      const cacheValue = JSON.stringify(apiResponse);
      const cacheKey = this.getCacheKey(uri);
      localStorage.setItem(cacheKey, cacheValue);
      console.log("Logged API Response", apiResponse);
      return apiResponse;
    }
  }

  private getCachedRequest<T>(uri: string) {
    const cacheKey = this.getCacheKey(uri);
    const cachedValue = localStorage.getItem(cacheKey);
    console.log("getCachedRequest", uri);
    return JSON.parse(cachedValue) as T;
  }

  private getCacheKey(uri: string) {
    console.log("getCacheKey", uri);
    return `api:${uri}`;
  }

}
