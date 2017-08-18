import { Component, OnInit } from '@angular/core';
import {
    Http
} from '@angular/http';
import {
    CatalogService
} from '../../service/catalogservice';
import {
    Observable
} from 'rxjs/Rx';
import {
    IItem
} from '../../service/item';
import { DomSanitizer } from '@angular/platform-browser';
import {
    WindowService
} from '../../service/windowservice';

@Component({
  selector: 'app-streetwear',
  templateUrl: './streetwear.component.html',
  styleUrls: ['./streetwear.component.css']
})
export class StreetwearComponent implements OnInit {
  items: IItem[];
  errorMessage: string;
  imgURL: any;
  shopURL: any;
  selectedItem: IItem;
  nativeWindow: any;


  purchaseItem(item: IItem) {
    console.log("Selected Item is " + item.id);
    this.selectedItem = item;
    this.shopURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedItem.shopURL);
  }

  constructor(private _catalogService: CatalogService,private domSanitizer : DomSanitizer,private winService: WindowService) {
    let self = this;
    this.nativeWindow = winService.getNativeWindow();

    this.selectedItem = {id : 1,
        title: "test",
        quote: "test",
        imgURL: "test",
        price: "test",
        shopURL: "test"
    };

    self._catalogService.getArticles().subscribe(response => {
      this.items = response, error => this.errorMessage = < any > error
      this.selectedItem = this.items[0];

    });
  }

  ngOnInit() {
  }

  protected shop(link: string): void {
    var newWindow = this.nativeWindow.open(link);
    newWindow.location = link;
    console.log(link);
  }


}
