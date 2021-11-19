import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getAdmins():Observable<ListResponseModel<Admin>>{
    return this.httpClient.get<ListResponseModel<Admin>>(this.apiUrl+"admins/getall");
  }
}
