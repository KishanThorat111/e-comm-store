import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WishlistService } from './services/wishlist.service';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatButtonModule, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webapp';
  wishlistService=inject(WishlistService);
  cartService=inject(CartService);
  authService=inject(AuthService)
  ngOnInit(){
    if(this.authService.isLoggedIn){
    this.wishlistService.init();
    this.cartService.init();
  }}
}
