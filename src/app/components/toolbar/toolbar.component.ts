import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() public title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
