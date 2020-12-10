import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @Input() public totalItems = 1;
  @Input() public pageSize = 25;
  @Input() public currentPage = 1;
  @Input() public step = 1;

  @Output() public pageChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public get isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  public get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  public get pages(): number[] {
    const pages = [];
    // current -1
    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }
    // current
    pages.push(this.currentPage);
    // current +1
    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }
    // current + 2
    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }
    // current + 3
    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  public setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

}
