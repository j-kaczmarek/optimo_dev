import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-optimo-confirmation.dialog',
  templateUrl: './optimo-confirmation.dialog.component.html',
  styleUrls: ['./optimo-confirmation.dialog.component.sass']
})
export class OptimoConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) { }

  ngOnInit(): void {
  }

}
