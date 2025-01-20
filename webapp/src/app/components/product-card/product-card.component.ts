import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [MatButtonModule, RouterLink],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product!:Product;

get sellingPrice(){
    return Math.floor(this.product.price -(this.product.price * this.product.discount)/100)
  }
}
