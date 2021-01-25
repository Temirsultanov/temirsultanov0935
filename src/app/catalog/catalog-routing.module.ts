import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: '',
        component: CatalogListComponent,
      },
      {
        path: 'product',
        component: CatalogEditComponent,
      },
      {
        path: 'product/:id',
        component: CatalogEditComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
