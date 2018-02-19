import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AlertService {

  constructor(public snackbar: MatSnackBar) { }

  isAlert = false;
  alertMessage = '';

  alert () {
    this.snackbar.open(this.alertMessage, 'X', {
      duration: 10000,
    });
  }

  set (message) {
    this.alertMessage = message;
    this.isAlert = true;
  }

  check () {
    if (this.isAlert) {
      this.alert();
      this.isAlert = false;
      this.alertMessage = '';
    }
  }

}
