import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';



@NgModule({
  declarations: [CardComponent, SnackbarComponent],
  exports: [CardComponent, SnackbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
