import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './accordion/accordion-item.interface';
import { LoaderType } from './loader/loader-type.enum';
import { RibbonLocation } from './ribbon/ribbon-location.enum';
import { RibbonType } from './ribbon/ribbon-type.enum';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  public accordionItems: AccordionItem[] = [
    { title: 'first accordion item', content: '[content]', isExpanded: true },
    { title: 'second accordion item', content: '[content]', isExpanded: false }
  ];

  public progressbarValue = 25;
  public loaderType = LoaderType.Text;

  public RibbonLocation = RibbonLocation;
  public RibbonType = RibbonType;
  public ribbonStyle = {
    location: RibbonLocation.BottomRight,
    type: RibbonType.Info,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
