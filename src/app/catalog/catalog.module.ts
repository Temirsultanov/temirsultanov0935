import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogComponent } from './catalog.component';
import { FilterpipePipe } from '../shared/pipes/filterpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent,
    CatalogEditComponent,
    FilterpipePipe
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CatalogModule { }
