import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  @Input() public rating = 0;
  @Input() public max = 5;

  get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    console.log(this.rating - Math.floor(this.rating));
    const hasHalfStar = (this.rating - Math.floor(this.rating) > 0) && this.rating !== this.max;

    return hasHalfStar;
  }

  get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.max - this.rating);

    return Array(totalEmptyStars).fill(0);
  }
}
