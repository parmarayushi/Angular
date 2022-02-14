import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/user.model';

@Pipe({
  name: 'client'
})
export class ClientPipe implements PipeTransform {

  transform(value: number, client: Client[]): string {
    let name:string=""
    client.find((data)=>{
      if(data.id==value){
        name=data.clientname
      }
    })
    return name;
  }
}
