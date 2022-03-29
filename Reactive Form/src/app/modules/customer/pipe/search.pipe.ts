import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customer.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user: Customer[], searchText:string): Customer[] {
    if(searchText===""){
      return user;
    }
    return user.filter((result:Customer)=>{
      return result.firstname.toLowerCase().match(searchText.toLowerCase())
    })
   }

}
