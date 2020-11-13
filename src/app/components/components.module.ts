import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';


@NgModule({
  declarations: [
    CardComponent,
    ComponentsComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
