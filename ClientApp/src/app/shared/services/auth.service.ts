import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthStorageHelperService } from '../helpers/auth-storage-helper.service';
import { UserInfo } from '../models/userInfo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = new BehaviorSubject<UserInfo>(null)

  constructor(
    private router: Router,
    private authStorageHelper: AuthStorageHelperService) { }

  currentUserValue() : UserInfo {
    const user = this.authStorageHelper.getUserInfo()

    if (user) {
      this.currentUser.next(user)
      return user
    }

    return null
  }

  async login(username: string, password: string) {
    const fakeUser = {
      id: '1',
      userName: username,
      firstName: 'Fake first name',
      lastName: 'Fake last name',
      token: 'fake-token'
    }

    const fakeLoginReqSimulation: Observable<UserInfo> = of(fakeUser).pipe(delay(1000))

    fakeLoginReqSimulation.subscribe((user: UserInfo) => {
      this.authStorageHelper.setUserInfo(user)
      this.currentUser.next(user)
    })
  }

  async logout() {
    this.authStorageHelper.removeUserInfo()
    this.currentUser.next(null)
    this.router.navigate(['login'])
  }
}
