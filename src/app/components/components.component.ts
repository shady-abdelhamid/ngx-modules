import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './accordion/accordion-item.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  public accordionItems: AccordionItem[] = [
    { title: 'first accordion item', content: '[content]', isExpanded: true},
    { title: 'second accordion item', content: '[content]', isExpanded: false}
  ];

  public progressbarValue = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
