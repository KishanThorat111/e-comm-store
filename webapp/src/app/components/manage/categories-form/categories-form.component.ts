import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-categories-form',
    standalone: true,
    imports: [FormsModule, MatInputModule, MatButtonModule, MatSelectModule],
    templateUrl: './categories-form.component.html',
    styleUrl: './categories-form.component.scss'
})
export class CategoriesFormComponent {
  name!: string;
  categoryService=inject(CategoryService);
  router =inject(Router);
  route=inject(ActivatedRoute);
  isEdit=false;
  id!: string;
  ngOnInit(){
   this.id=this.route.snapshot.params['id'];
   if(this.id){
    this.isEdit=true;
      this.categoryService.getCategoryById(this.id).subscribe((result:any)=>{
        console.log(result);
        this.name=result.name;
      })
   }
  }
  add(){
    console.log(this.name);
    this.categoryService.addCategory(this.name).subscribe((result:any)=>{
      alert("Category added successfully");
      this.router.navigate(['/admin/categories']);
    });
  }
  update(){
    console.log(this.name);
    this.categoryService.updateCategory(this.id,this.name).subscribe((result:any)=>{
      alert("Category updated successfully");
      this.router.navigate(['/admin/categories']);
    });
  }
}
