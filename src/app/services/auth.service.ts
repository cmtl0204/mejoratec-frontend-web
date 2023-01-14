import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggIn: boolean = false;

  constructor() {
  }

  get isLoggIn(): boolean {
    return this.loggIn;
  }

  set isLoggIn(value: boolean) {
    this.loggIn = value;
  }
}
