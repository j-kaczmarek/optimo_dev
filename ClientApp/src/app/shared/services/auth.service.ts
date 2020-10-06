import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AuthStorageHelperService } from '../helpers/auth-storage-helper.service';
import { UserInfo } from '../models/userInfo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<UserInfo>(null)
  public currentUser: Observable<UserInfo>;

  constructor(
    private router: Router,
    private authStorageHelper: AuthStorageHelperService) {
      this.currentUserSubject = new BehaviorSubject<UserInfo>(this.authStorageHelper.getUserInfo());
      this.currentUser = this.currentUserSubject.asObservable();
    }

  currentUserValue() : UserInfo {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) : Observable<UserInfo> {
    const fakeUser = {
      id: '1',
      userName: username,
      firstName: 'Fake first name',
      lastName: 'Fake last name',
      token: 'fake-token'
    }

    const fakeLoginReqSimulation: Observable<UserInfo> = of(fakeUser).pipe(delay(1000))

    return fakeLoginReqSimulation
      .pipe(map((user: UserInfo) => {
        this.authStorageHelper.setUserInfo(user)
        this.currentUserSubject.next(user)
        this.router.navigate(['/'])
        return user;
    }))
  }

  logout() {
    this.authStorageHelper.removeUserInfo()
    this.currentUserSubject.next(null)
    this.router.navigate(['login'])
  }
}
