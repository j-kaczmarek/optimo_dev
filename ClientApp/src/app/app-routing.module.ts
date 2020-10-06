import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationGuardService } from './shared/guard/location-guard.service';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './views/login-view/login-view/login-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardViewComponent,
    canActivate: [ LocationGuardService ]
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
