import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/form.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(user: User[], searchText:string): User[] {
   if(searchText===""){
     return user;
   }
   return user.filter((result:User)=>{
     return result.firstName.toLowerCase().match(searchText.toLowerCase())
   })
  }

}
