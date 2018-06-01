import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(todoDone: boolean, displayNotDone: boolean): any {
    if (todoDone) {
      return 'finished';
    } else {
      return 'unfinished';
    }
    // return '';
  }

}
