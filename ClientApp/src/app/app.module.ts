//#region Material imports

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTooltipModule } from '@angular/material/tooltip'
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog'

//#endregion

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { OptimoFooterComponent } from './shared/components/layout/optimo-footer/optimo-footer.component'
import { OptimoNavComponent } from './shared/components/layout/optimo-nav/optimo-nav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view/dashboard-view.component'
import { LoginViewComponent } from './views/login-view/login-view/login-view.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { OptimoConfirmationDialogComponent } from './shared/components/dialogs/optimo-confirmation.dialog/optimo-confirmation.dialog.component'
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    OptimoFooterComponent,
    OptimoNavComponent,
    DashboardViewComponent,
    LoginViewComponent,
    OptimoConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  entryComponents: [
    OptimoConfirmationDialogComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
