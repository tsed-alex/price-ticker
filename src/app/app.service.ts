import { Injectable } from '@angular/core';
import {FxPrice} from "./types";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public getAllPrices(): Observable<FxPrice[]> {
    const result = [];

    result.push(this.generateFakeDataRow(1, 'EUR/USD'));
    result.push(this.generateFakeDataRow(2, 'EUR/JPY'));
    result.push(this.generateFakeDataRow(3, 'GBP/USD'));
    result.push(this.generateFakeDataRow(4, 'GBP/EUR'));

    return of(result)
  }

  public generateFakeDataRow(id: number, name: string): FxPrice {
    const bidMock = randomInteger(0, 10);
    const now = Date.now();

    return {
      id: id,
      name: name,
      bid: bidMock,
      ask: bidMock + 1,
      timestamp: new Date(now + randomInteger(10000, 20000))
    }
  }
}

export const randomInteger = (min: number, max: number): number => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};
