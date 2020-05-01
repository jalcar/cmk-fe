import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(value: any): any {
    return value;
  }

}
