import { Injectable, signal } from '@angular/core';
import { AuthRequest } from '../models/dto/auth-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(true);

  constructor() {}

  loginUser(credentials: AuthRequest): void {}
  getAuthUserId(): string {
    return this.isLoggedIn() ? '1234' : '';
  }

  // varify whether the user id is my user id or not
  isMyProfile(id?: string): boolean {
    return true;
  }
}
