import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Array<any>, args?: any): any {
    return value.sort((a: any, b: any) => {
      if (a.salary < b.salary) return -1;
      else if (a.salary > b.salary) return 1;
      else return 0;
    });
  }
}
