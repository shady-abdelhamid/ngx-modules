import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message = '';
  public isShown: boolean;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.snackbarService.snackbar$.subscribe((value: string) => {
      this.showMessage(value);
    })
  }

  public showMessage(message?: string): void {
    this.isShown = true;

    if (message) {
      this.message = message;
    }

    // hide after 3 sec
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
