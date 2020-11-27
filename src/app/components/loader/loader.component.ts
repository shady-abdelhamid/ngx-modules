import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() loaderType: LoaderType = LoaderType.Spinner;

  public LoaderType = LoaderType;

  private text = 'Loading';
  private periods = '.\0\0';
  public get loadingText(): string {
    return `${this.text}${this.periods}`;
  }

  constructor() { }

  ngOnInit(): void {
    if (this.loaderType === LoaderType.Text) {
      this.updatePeriods();
    }
  }

  private updatePeriods(): void {
    let currentStep = 0;
    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.periods = '..\0';
          currentStep++;
          break;
        case 1:
          this.periods = '...';
          currentStep++;
          break;
        case 2:
          this.periods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }

}
