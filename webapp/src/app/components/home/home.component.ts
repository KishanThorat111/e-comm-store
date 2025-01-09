import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customerService=inject(CustomerService);
  newProducts:Product[] = [];
  featuredProducts:Product[] = [];
  ngOnInit(){
    this.customerService.getFeaturedProducts().subscribe((result)=>{
      this.featuredProducts=result;
      console.log(this.featuredProducts);
    });
    this.customerService.getNewProducts().subscribe((result)=>{
      this.newProducts=result;
      console.log(this.newProducts);
    });
  }
}
