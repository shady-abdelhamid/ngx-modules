import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { TruncatePipe } from './truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';


@NgModule({
  declarations: [
    PipesComponent,
    TruncatePipe,
    CreditCardFormatterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
