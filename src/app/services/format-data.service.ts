import { Injectable } from '@angular/core';

@Injectable()
export class FormatDataService {

  simplifyName(name: string) {
    return name.toLowerCase()
      .split(' ')
      .reduce((prev: string, item: string) => {
        return prev += item;
      }, '');
  }

  filterItem(array: any, filter: string) {
    return array.filter((item: any) => {
      if (item.name === filter) {
        return item;
      }
    });
  }

  formatData(array: any) {
    return array.map((item) => {
      const name = this.simplifyName(item.name);
      return {
        name,
        data: item
      };
    });
  }

  formatNFilterData(array: any, filter: string) {
    const FORMATTED_DATA = this.formatData(array);
    return this.filterItem(FORMATTED_DATA, filter);
  }

}
