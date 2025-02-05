import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../types/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() { }

  getCategories() {
    return this.http.get(environment.apiUrl+'/category');
  }


  getCategoryById(id: string) {
    return this.http.get<Category[]>(environment.apiUrl+'/category/' + id);
  }
  addCategory(name: string) {
    return this.http.post<Category>(environment.apiUrl+'/category',{
      name: name,
    });
  }

  updateCategory(id: string, name: string) {
    return this.http.put(environment.apiUrl+'/category/' + id, {
      name: name,
    });
  }

  deleteCategoryById(id: string) {
    return this.http.delete(environment.apiUrl+'/category/' + id);
  }
}
