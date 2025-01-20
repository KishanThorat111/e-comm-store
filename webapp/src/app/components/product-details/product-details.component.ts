import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatButtonModule, ProductCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  customerService=inject(CustomerService);
  route=inject(ActivatedRoute);
  product!:Product;
  mainImage!: string;
  similarProducts:Product[]=[];
  ngOnInit(){
    this.route.params.subscribe((x:any)=>{
      this.getProductDetail(x.id);
    })

  }

  getProductDetail(id:string){
    this.customerService.getProductById(id).subscribe(result=>{
      this.product = result;
      this.mainImage=this.product.images[0];
      console.log(this.product);

      this.customerService.getProducts('', this.product.categoryId,'',-1,'',1,4).subscribe(result=>{
        this.similarProducts=result;
      })
    })
  }
  changeImage(url:string){
    this.mainImage=url;
  }

  get sellingPrice(){
    return Math.floor(this.product.price -(this.product.price * this.product.discount)/100)
  }
}
