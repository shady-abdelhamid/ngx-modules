import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {
  public isShown: boolean;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    const [, y] = this.viewportScroller.getScrollPosition();
    console.log(y);
    this.isShown = y > 400;
  }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
