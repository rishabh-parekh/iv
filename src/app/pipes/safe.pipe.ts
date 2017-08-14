import { Pipe, PipeTransform } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {


  constructor(private domsantizer:DomSanitizer)
  {

  }

  transform(value: any, args?: any): any {
    return this.domsantizer.bypassSecurityTrustResourceUrl(value);
  }

}
