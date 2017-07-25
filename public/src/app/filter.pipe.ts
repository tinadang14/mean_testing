import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, search: any): any {
    let result = [];
    let percentString = ""
    percentString += search
    for(let user of users){
      if(user.name.toLowerCase().includes(search.toLowerCase()) || user.score.includes(search) || user.percentage == percentString){
        result.push(user)
      }      
    }
  return result;
  }

}
