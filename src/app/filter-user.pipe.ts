import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
  
})
export class FilterUserPipe implements PipeTransform {

  // transform(value: any[], searchTearm: any): any[] {
  transform(value: any, searchTearm: any): any {
    return value.filter(function(search) {
      
      return (search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1) || (search.username.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1) || (String(search.id).toLowerCase().includes(searchTearm)) || (search.email.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1) 
    })
   
  }

}
