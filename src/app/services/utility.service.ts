import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  storageGet(key: string): string | null {
    return localStorage.getItem(key);
  }

  storageSet(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
