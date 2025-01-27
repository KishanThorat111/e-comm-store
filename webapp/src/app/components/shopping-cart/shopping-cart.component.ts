import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cartService=inject(CartService);
  ngOnInit(){
    this.cartService.init();
  }
  get cartItems(){
    return this.cartService.items;
  }
  sellingPrice(product: Product){
    return Math.floor(product.price -(product.price *product.discount)/100)
  }
  addToCart(productId: string, quantity: number){
    this.cartService.addToCart(productId, quantity).subscribe(result=>{
      this.cartService.init()
    })
  }
  get totalAmount(){
    let ammount=0;
    for(let item of this.cartItems){
      ammount+=this.sellingPrice(item.product)*item.quantity;
    }
    return ammount;
  }
} 
