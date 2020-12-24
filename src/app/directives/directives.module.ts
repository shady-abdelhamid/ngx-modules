import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from '../shared/shared.module';
import { DebounceClickDirective } from './debounce-click.directive';


@NgModule({
  declarations: [DirectivesComponent, DebounceClickDirective],
  imports: [
    CommonModule,
    SharedModule,
    DirectivesRoutingModule,
  ]
})
export class DirectivesModule { }
