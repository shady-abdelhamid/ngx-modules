import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input() public tableData: any[] = [
    { firstName: 'fname 1', lastName: 'lname 1', DOB: '02/02/2020' },
    { firstName: 'fname 2', lastName: 'lname 2', DOB: '02/02/2020' },
    { firstName: 'fname 3', lastName: 'lname 3', DOB: '02/02/2020' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
