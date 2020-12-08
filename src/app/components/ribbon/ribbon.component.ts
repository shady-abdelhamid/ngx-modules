import { Component, Input, OnInit } from '@angular/core';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon-type.enum';

@Component({
  selector: 'ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  @Input() public content;
  @Input() public location: RibbonLocation = RibbonLocation.BottomLeft;
  @Input() public type: RibbonType = RibbonType.Info;

  constructor() { }

  ngOnInit(): void {
  }

}
