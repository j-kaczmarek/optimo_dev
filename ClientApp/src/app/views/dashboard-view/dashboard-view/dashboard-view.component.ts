import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/models/userInfo.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.sass']
})
export class DashboardViewComponent implements OnInit {
  currentUser: UserInfo

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe((user: UserInfo) => this.currentUser = user)
  }

  ngOnInit(): void {
  }

}
