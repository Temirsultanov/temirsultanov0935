import { Component, OnInit } from '@angular/core';
import { McatalogService } from 'src/app/shared/services/mcatalog.service';
import { McatalogCategory } from 'src/app/shared/models/mcatalog.model';
import { Router } from '@angular/router';
import { Mcatalog } from 'src/app/shared/models/mcatalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  products : Mcatalog[] = [];
  product?: Mcatalog;
  filtercategory: number = 5;
  filtercount: boolean = true;
  filter: number = 0;
  mcatalogCategory = McatalogCategory;
  constructor(private mcatalogService : McatalogService, private router : Router) { }
  categoryCodeToString(code: any){
    switch (code) {
      case 0:
        return 'Мебель';
        break;
      case 1:
        return 'Техника';
        break;
      case 2:
        return 'Книга';
        break;
      case 3:
        return 'Телефон';
        break;
      default:
        return '';
        break;
    }
  }
  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    try {
      let productsGetted = this.mcatalogService.getAll();
      this.products = await productsGetted == null && productsGetted == undefined ? [] : await productsGetted;
    } catch (error) {
      console.log(error);
    }
  }
  onAddProduct(){
    this.router.navigate([this.router.url, 'product']);
  }
  onEditProduct(id: any){
    this.router.navigate([this.router.url, 'product', id]);
  }
  async onPlusClick(id: any){
    try {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]['id'] === id) {
          this.products[i]['count'] = this.products[i]["count"] + 1;
          await this.mcatalogService.putOne(id, this.products[i]);
          this.getData();
        }
      }

    } catch (error) {
      console.error(error);
    }
  }
  async onMinusClick(id: any){
    try {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]['id'] === id) {
          if (this.products[i]['count'] > 0) {
            this.products[i]['count'] = this.products[i]["count"] - 1;
          }
          await this.mcatalogService.putOne(id, this.products[i]);
          this.getData();
        }

      }

    } catch (error) {
      console.error(error);
    }
  }

}
