import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  http = inject(HttpClient);
  constructor() { }

  getBrands() {
    return this.http.get(environment.apiUrl + '/brands');
  }


  getBrandById(id: string) {
    return this.http.get<Brand>(environment.apiUrl + '/brands/' + id);
  }

  addBrand(name: string) {
    return this.http.post<Brand>(environment.apiUrl + '/brands', {
      name: name,
    });

  }
  updateBrand(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/brands/' + id, {
      name: name,
    });
  }

  deleteBrandById(id: string) {
    return this.http.delete(environment.apiUrl + '/brands/' + id);
  }
}
