import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+"categories/getall");
  }
  getCategoryById(categoryId: number): Observable<SingleResponseModel<Category>> {
    let newPath = this.apiUrl + "categories/getbyid?categoryId="+categoryId;
    return this.httpClient.get<SingleResponseModel<Category>>(newPath);
  }
}
