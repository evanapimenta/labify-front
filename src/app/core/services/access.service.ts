import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessService {
  constructor() {}

  private authSubject = new Subject<boolean>();
  authState$ = this.authSubject.asObservable();
  _authenticated = false;

  get access() {
    const access = localStorage.getItem('access');
    return access ? JSON.parse(access) : null;
  }

  set access(value: any) {
    localStorage.setItem('access', JSON.stringify(value));
  }
}
