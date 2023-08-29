import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDcurrency'
})
export class USDcurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
