import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone',
  // pure:false this will call impure mode for angular pipe and make angular detect pipe content more times and lower the efficiency
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
