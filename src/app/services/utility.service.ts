import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  platformId = inject(PLATFORM_ID);

  storageGet(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) return localStorage.getItem(key);
    return null;
  }

  storageSet(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) localStorage.setItem(key, value);
  }
}
