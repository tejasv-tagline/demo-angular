import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:string){
    if(value.length>8){
     return value.substr(0,8).toLocaleLowerCase();
   }
   else{
     return value
   }
   }

}
