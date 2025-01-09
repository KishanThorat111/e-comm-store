import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product!:Product;

}
