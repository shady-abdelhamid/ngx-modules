import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DirectivesComponent],
  imports: [
    CommonModule,
    SharedModule,
    DirectivesRoutingModule,
  ]
})
export class DirectivesModule { }
