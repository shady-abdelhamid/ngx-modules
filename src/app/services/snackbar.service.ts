import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public snackbar$ = new Subject<String>();

  public callSnackbar(message: string): void {
    this.snackbar$.next(message);
  }
  constructor() { }
}
