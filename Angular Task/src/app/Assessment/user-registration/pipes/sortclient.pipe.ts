import { Pipe, PipeTransform } from '@angular/core';
import { Client, UserRegistration } from '../model/user.model';

@Pipe({
  name: 'sortclient'
})
export class SortclientPipe implements PipeTransform {

  transform(value: UserRegistration[], id: number): UserRegistration[] {
    if(id==0){
      return value;
    }else{
      return value.filter((data:UserRegistration)=>{
        return data.client==id
      })
    }
    
  }

}
