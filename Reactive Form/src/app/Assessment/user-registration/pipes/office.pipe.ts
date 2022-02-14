import { Pipe, PipeTransform } from '@angular/core';
import { Office } from '../model/user.model';

@Pipe({
  name: 'office'
})
export class OfficePipe implements PipeTransform {

  transform(value: number, office: Office[]): string {
    let name:string=""
    office.find((data)=>{
      if(data.id==value){
        name=data.officename
      }
    })
    return name;
  }

}
