import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { SharedModule } from '../shared/shared.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    RibbonComponent,
    SimpleTableComponent,
    PagingComponent,
    LinkedinPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
