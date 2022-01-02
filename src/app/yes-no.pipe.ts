import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(value: unknown, ...args: any[]): any {
    if( value === true)
      return "Yes"
    else
      return "No"
  }

}
