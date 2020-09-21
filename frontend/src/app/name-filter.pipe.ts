import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from './_models/Expense';

@Pipe({
  name: 'name-filter'
})
export class NameFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter((singleItem) =>
      singleItem[field].toLowerCase().indexOf(field) > -1
    );
  }

}
