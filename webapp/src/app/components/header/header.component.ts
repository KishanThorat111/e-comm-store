import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, FormsModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  customerService = inject(CustomerService)
  categorylist: Category[] = [];
  authService = inject(AuthService);
  searchTerm!:string;
  ngOnInit() {
    this.customerService.getCategories().subscribe((result:any) =>{
      this.categorylist = result;
    });
  }
  router=inject(Router);
  onSearch(e: any){
    console.log(e.target.value);
    if(e.target.value){
      this.router.navigateByUrl("/products?search=" + e.target.value)
    }
  } 
  searchCategory(id:string){
    this.searchTerm="";
    this.router.navigateByUrl("/products?categoryId=" + id!)
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
