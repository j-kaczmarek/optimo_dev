import { Injectable } from '@angular/core';
import { UserInfo } from '../models/userInfo.model';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageHelperService {
  private readonly USER_INFO_KEY = 'user-info'

  constructor(private localStorage: LocalStorageService) {
   }

  getUserInfo(): UserInfo {
    return this.localStorage.get(this.USER_INFO_KEY)
  }

  setUserInfo(value: any): boolean {
    return this.localStorage.set(this.USER_INFO_KEY, value)
  }

  removeUserInfo(): boolean {
    return this.localStorage.remove(this.USER_INFO_KEY)
  }
}
