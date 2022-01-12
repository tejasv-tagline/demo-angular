import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, filterString: string, propName: string): any {
    
    if (value.length == 0 || filterString === '' || filterString === 'all') {
      return value;
    }
    const resultArray:any[] = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
