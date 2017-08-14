import { Pipe, PipeTransform } from '@angular/core';
import { ResourcesData } from './resourcesdata';

@Pipe({
  name: 'resourcefilter',
  pure: false
})
export class ResourcefilterPipe implements PipeTransform {

  transform(items: ResourcesData[], filter: ResourcesData): ResourcesData[]
  {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: ResourcesData) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   * 
   * @param {ResourcesData} book The book to compare to the filter.
   * @param {ResourcesData} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(resourcesData: ResourcesData, filter: ResourcesData): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (resourcesData[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (resourcesData[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}
