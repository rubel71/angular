import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private snackBar: MatSnackBar) { }
  success(message: string, action: string): void {
    let config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: 'primary'
    }
    this.snackBar.open(message, action, config);
  }
  fail(message: string, action: string): void {
    let config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: 'warn'
    }
    this.snackBar.open(message, action, config);
  }
}
