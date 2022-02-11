import { Pipe, PipeTransform } from '@angular/core';
import{Department} from '../model/form.model'
@Pipe({
  name: 'departmentPipe'
})
export class DepartmentPipePipe implements PipeTransform {

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
