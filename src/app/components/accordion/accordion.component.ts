import { isNgTemplate } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }

}
