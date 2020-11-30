import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() public baseHref = 'https://shady-abdelhamid.github.io';
  @Input() public hashTags: string[] = ['Shady_Abdelhamid', 'Angular', 'Frontend_developer'];

  constructor(public titleService: Title) { }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out website`);

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTages = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTages)}&url=${route}&text=`;
  }

  ngOnInit(): void {
  }

}
