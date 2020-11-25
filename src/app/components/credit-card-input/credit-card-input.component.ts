import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber: string;

  private readOnly = false;
  public get isReadOnly(): boolean {
    return this.readOnly;
  }
  @Input() public set isReadOnly(value: boolean) {
    this.creditCardNumber = value ?
      this.formatReadOnlyCCNumber(this.creditCardNumber) : this.creditCardNumber;
    this.readOnly = value;
  }

  private formatReadOnlyCCNumber(ccNum: string): string {
    const parts = ccNum.toString().match(/[\s\S]{1,4}/g) || [];
    const onlyLast4shown = parts.map((part, index) =>
      index === parts.length - 1 ? part : 'xxxx');

    return onlyLast4shown.join('-');
  }

}
