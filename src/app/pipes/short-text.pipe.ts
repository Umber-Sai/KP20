import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').slice(0, 94).join('') + '...'
  }

}
