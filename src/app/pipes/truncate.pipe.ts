import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string = '', length: number = 100): string {
    let truncatedValue = value.slice(0, length);

    if (value.length > length) {
      truncatedValue += '...';
    }

    return truncatedValue;
  }

}
