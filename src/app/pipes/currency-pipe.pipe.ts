import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number): string {
    const stringVal: string = value.toString()
    return stringVal.replace('.', ',') + (stringVal.match(/0$/g)? '' : '0') + ' руб.'
  }

}
