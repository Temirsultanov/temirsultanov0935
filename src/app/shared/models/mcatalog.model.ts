export interface Mcatalog {
  name: string,
  vendorcode: string,
  price: number,
  manufacturer: string,
  category: string,
  weight: number,
  count: number,
  id?: number,
}
export enum McatalogCategory{
  furnitures,
  technics,
  books,
  phones
}

