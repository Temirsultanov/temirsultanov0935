import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(products: any[], filtercategory: number, filtercount: boolean, filter: number): any[] {
    let filteredItems = products;
    if (filtercount) {
      filteredItems = filteredItems.filter(
        (product) => product['count'] > 0
      )
    }
    if (filtercategory !== 5) {
      filteredItems = filteredItems.filter(
        (product) => product['category'] === filtercategory
      )
    }
    switch (filter) {
      case 1:
        filteredItems = filteredItems.sort(
          (a, b) => a['price'] - b['price']
        )
        break;
      case 2:
        filteredItems = filteredItems.sort(
          (a, b) => b['price'] - a['price']
        )
        break;
      case 3:
        filteredItems = filteredItems.sort(
          (a, b) => a['count'] - b['count']
        )
        break;
      case 4:
        filteredItems = filteredItems.sort(
          (a, b) => b['count'] - a['count']
        )
        break;

    }
    return filteredItems;
  }

}
