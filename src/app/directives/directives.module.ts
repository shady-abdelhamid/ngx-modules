import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from '../shared/shared.module';
import { DebounceClickDirective } from './debounce-click.directive';
import { CopyDirective } from './copy.directive';


@NgModule({
  declarations: [DirectivesComponent, DebounceClickDirective, CopyDirective],
  imports: [
    CommonModule,
    SharedModule,
    DirectivesRoutingModule,
  ],
  providers: [
    {provide: 'Navigator', useValue: navigator },
    {provide: 'Document', useValue: document },
  ]
})
export class DirectivesModule { }
