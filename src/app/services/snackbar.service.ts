import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start'; //= 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'; //= 'top' | 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message:string, action:string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      duration: 3000,
    });
  }



}
