import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/models/userInfo.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'optimo-nav',
  templateUrl: './optimo-nav.component.html',
  styleUrls: ['./optimo-nav.component.sass']
})
export class OptimoNavComponent implements OnInit {
  currentUser: UserInfo

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe((user: UserInfo) => this.currentUser = user)
   }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }
}
