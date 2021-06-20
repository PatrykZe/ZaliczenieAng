import { Pipe, PipeTransform } from '@angular/core';
import { users } from "./definitions";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: users[], field: number, dir = "asc"): users[] {
    if (!values) {
      return null;
    }
  
    return values.sort((a, b) => {
      if (dir === "asc") {
        return a[field] - b[field];
      }
      return b[field] - a[field];
    });
  
  
  
  }

}
