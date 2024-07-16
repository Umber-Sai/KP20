import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    const arrValue: string[] = value.split('');
    return `+${arrValue.slice(0,3).join('')} (${arrValue.slice(3,5).join('')}) ${arrValue.slice(5,8).join('')}-${arrValue.slice(8,10).join('')}-${arrValue.slice(10,12).join('')}`
  }

}


//+375 (29) 368-98-68