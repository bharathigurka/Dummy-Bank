import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'negativeNumber' })
export class NumberFormatPipe implements PipeTransform {
  transform(value: any): number {
    return Math.abs(value) * -1;
  }
}
