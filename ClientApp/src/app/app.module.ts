import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptimoFooterComponent } from './shared/components/layout/optimo-footer/optimo-footer.component';
import { OptimoNavComponent } from './shared/components/layout/optimo-nav/optimo-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './views/login-view/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    OptimoFooterComponent,
    OptimoNavComponent,
    DashboardViewComponent,
    LoginViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
