import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message = '';
  public isShown: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public show(): void {
    this.isShown = true;

    // hide after 3 sec
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
