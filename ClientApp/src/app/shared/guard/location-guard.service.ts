import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStorageHelperService } from '../helpers/auth-storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LocationGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authStorageHelper: AuthStorageHelperService) { }

  canActivate() : boolean {
    console.log('[CanActivate] LocationGuard')
    const userInfo = this.authStorageHelper.getUserInfo()

    if (userInfo) return true

    this.router.navigate(["login"])
    return false
  }
}
