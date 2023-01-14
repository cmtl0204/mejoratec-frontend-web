import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MejoratecService {
  private area: string = '';
  private indicator: string = '';

  constructor() {
  }

  get getArea(): string {
    return this.area;
  }

  set setArea(value: string) {
    this.area = value;
  }

  get getIndicator(): string {
    return this.indicator;
  }

  set setIndicator(value: string) {
    this.indicator = value;
  }
}
