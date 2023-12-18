import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collect, CollectInput } from '../models/collects.model';
import { ApiService } from './api.service';
import { NetworkService } from './network.service';

type QueueType = Record<string, CollectInput>;

@Injectable({
  providedIn: 'root'
})
export class CollectService {
  private readonly QUEUE_CACHE_KEY = "collection_queue";

  public isOnline: boolean = true;
  private isOnlineSubscription: Subscription = null;

  constructor(private api: ApiService, private networkService: NetworkService) {
    this.isOnlineSubscription = this.networkService.isOnline$.subscribe((isOnline) => {
      this.isOnline = isOnline;
      if (isOnline) {
        this.retryQueue();
      }
    });

    // Initialize the queue if necessary
    if (!localStorage.getItem(this.QUEUE_CACHE_KEY)) {
      localStorage.setItem(this.QUEUE_CACHE_KEY, "{}");
    }
  }

  ngOnDestroy() {
    this.isOnlineSubscription?.unsubscribe();
  }

  public lastSavedCollect: Collect | null = null;

  public submitCollect(collect: CollectInput) {
    const queueKey = this.addToQueue(collect);

    return this.api.recordCollect(collect).pipe(
      map((collect) => {
        this.lastSavedCollect = collect;
        this.removeFromQueue(queueKey);
        return collect;
      })
    );
  }

  private retryQueue() {
    const q = this.getQueue();
    Object.keys(q).forEach(key => {
      const collect = q[key];
      if (this.collectIsValid(collect)) {
        this.api.recordCollect(collect).subscribe((_result) => {
          this.removeFromQueue(key);
        });
      }
      else {
        console.error("Tried to record an invalid queued collect. Not sending to the server.", collect);
        this.removeFromQueue(key);
      }
    });
  }

  public addToQueue(collect: CollectInput) {
    const q = this.getQueue();
    const key = this.generateId();
    q[key] = collect;
    this.setQueue(q);
    return key;
  }

  private removeFromQueue(key: string) {
    const q = this.getQueue();
    if (!q[key]) {
      console.error(`Tried to delete an entry from collect queue that doesn't exist (${key})`);
      return;
    }
    delete q[key];
    this.setQueue(q);
  }

  private getQueue() {
    const queueSrc = localStorage.getItem(this.QUEUE_CACHE_KEY);
    return JSON.parse(queueSrc) as QueueType;
  }

  private setQueue(queue: QueueType) {
    const strigifiedQueue = JSON.stringify(queue);
    localStorage.setItem(this.QUEUE_CACHE_KEY, strigifiedQueue);
  }

  // Generates a random string of 8 hexadecimal characters
  private generateId() {
    var arr = new Uint8Array((8) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, (dec) => dec.toString(16).padStart(2, "0")).join("");
  }

  public collectIsValid(c: CollectInput) {
    if (
      c.container_id &&
      c.location_id &&
      c.waste_type &&
      c.collector_id &&
      c.weighed_at &&
      c.net_weight !== undefined &&
      c.net_weight !== null &&
      c.scale_weight !== undefined &&
      c.scale_weight !== null &&
      c.tare_weight !== undefined &&
      c.tare_weight !== null
    ) {
      return true;
    }
    return false;
  }
}
