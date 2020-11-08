import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    CardComponent,
    ComponentsComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
