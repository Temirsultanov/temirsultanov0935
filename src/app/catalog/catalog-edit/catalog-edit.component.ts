import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { McatalogService } from 'src/app/shared/services/mcatalog.service';
import { McatalogCategory } from 'src/app/shared/models/mcatalog.model';

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './catalog-edit.component.html',
  styleUrls: ['./catalog-edit.component.css']
})
export class CatalogEditComponent implements OnInit {
  id! : number;
  catalog: any;
  catalogForm! : FormGroup;
  mcatalogCategory = McatalogCategory;
  constructor(private activatedRoute: ActivatedRoute,
    private mcatalogService : McatalogService,
    private router : Router) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id !== null && params.id !== undefined) {
        this.id = params.id;
      }
      else{

      }
    })
  }

  ngOnInit(): void {
    this.catalogForm = new FormGroup ({
      name: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      count: new FormControl(null, [Validators.required, Validators.min(0)]),
      vendorcode: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      manufacturer: new FormControl(null, Validators.required),
    });
    this.getData();
  }
  async getData() {
    if (this.id !== null && this.id !== undefined) {
      try {
        let catalog = this.mcatalogService.getOneById(this.id);
        this.catalog = await catalog;
      } catch (error) {
        console.error(error);
      }
      this.catalogForm.patchValue({
        name: this.catalog.name,
        weight: this.catalog.weight,
        count: this.catalog.count,
        vendorcode: this.catalog.vendorcode,
        price: this.catalog.price,
        category: this.catalog.category,
        manufacturer: this.catalog.manufacturer,
      })
    }
  }
  async onDelete() {
    try {
      await this.mcatalogService.deleteOne(this.id);
    } catch (error) {
      console.error(error);
    }
    this.router.navigate(['/catalog']);
  }
  async onSave(){
      if (this.id !== null && this.id !== undefined) {
        try {
          await this.mcatalogService.putOne(this.id, this.catalogForm.value)
        } catch (error) {
          console.log(error);
        }
      }
      else{
        try {
          let res : any = await this.mcatalogService.postOne(this.catalogForm.value);
          this.router.navigate([this.router.url, res['id']]);

        } catch (error) {
          console.log(error);
        }

      }
      this.router.navigate(['/catalog']);
  }
}
