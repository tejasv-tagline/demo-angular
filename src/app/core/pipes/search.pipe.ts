import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value:string,len:number){
   if(value.length>len){
    return value.substr(0,len).toUpperCase();
  }
  else{
    return value
  }
  }
}
