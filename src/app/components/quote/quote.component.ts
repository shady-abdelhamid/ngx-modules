import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shx-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';

  constructor() { }

  ngOnInit(): void {
  }

}
