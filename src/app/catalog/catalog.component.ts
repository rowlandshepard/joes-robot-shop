import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from './product/product.model';
import { CartService } from '../cart.service';
import { ProductsService } from './product/products.service';

@Component({
  selector: 'joe-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products!: IProduct[];
  filter: string = '';
  //private cartSvc:CartService = inject(CartService);

  constructor(private cartSvc:CartService, private productSvc:ProductsService){}

  ngOnInit(): void {
    this.products = this.productSvc.getProducts(this.filter);
  }

  addToCart(product:IProduct){
    this.cartSvc.add(product);
  }


  getFilteredProducts(){

    var foo = this.productSvc.getProducts(this.filter);
    this.products = foo;
    return foo; this.filter === ''
   }

  getDiscountedClasses(product: IProduct){
    if(product.discount > 0)
      return ['strikethrough'];
    else return [''];
  }

}
