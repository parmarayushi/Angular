import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../customer.model';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: number, department: Department[]): string {
    let name:string=""
    department.find((data)=>{
      if(data.id==value){
        name=data.name
      }
    })
    return name;
  }

}
