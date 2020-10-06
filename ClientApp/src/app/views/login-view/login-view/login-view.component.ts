import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptimoConfirmationDialogComponent } from 'src/app/shared/components/dialogs/optimo-confirmation.dialog/optimo-confirmation.dialog.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.sass']
})
export class LoginViewComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService) {

    if (this.authService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

  openConfirmDialog() : MatDialogRef<OptimoConfirmationDialogComponent, any> {
    return this.dialog.open(OptimoConfirmationDialogComponent, {
      data: {
        title: "Confirmation",
        message: "Are you sure you want to log in?"
      }
    })
  }

  login() {
    const dialogRef = this.openConfirmDialog()

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.authService.login(this.loginForm.value.userName, this.loginForm.value.password)
      }
    })
  }
}
