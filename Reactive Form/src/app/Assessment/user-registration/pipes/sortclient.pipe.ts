import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/user.model';

@Pipe({
  name: 'sortclient'
})
export class SortclientPipe implements PipeTransform {

  transform(value: Client[], id: number): Client[] {
    if(id==0){
      return value;
    }else{
      return value.filter((data:Client)=>{
        // return data.clientname==id;
      })
    }
    
  }

}
