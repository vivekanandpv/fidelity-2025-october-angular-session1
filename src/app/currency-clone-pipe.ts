import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyClone',
})
export class CurrencyClonePipe implements PipeTransform {
  transform(value: number, symbol: string = '₹'): string {
    return `${symbol}${value.toFixed(2)}`;
  }
}
