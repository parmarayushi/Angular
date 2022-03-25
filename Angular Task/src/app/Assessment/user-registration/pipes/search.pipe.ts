import { Pipe, PipeTransform } from '@angular/core';
import { UserRegistration } from '../model/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user: UserRegistration[], searchText:string): UserRegistration[] {
    if(searchText===""){
      return user;
    }
    return user.filter((result:UserRegistration)=>{
      return result.firstName.toLowerCase().match(searchText.toLowerCase())
    })
   }
 
}
