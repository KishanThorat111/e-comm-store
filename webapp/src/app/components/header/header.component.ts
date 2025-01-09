import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  categoryService = inject(CategoryService)
  categorylist: Category[] = [];
  ngOnInit() {
    this.categoryService.getCategories().subscribe((result:any) =>{
      this.categorylist = result;
    })
  }
}
