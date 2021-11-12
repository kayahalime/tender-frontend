import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Tender } from '../models/tender';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getTenders():Observable<ListResponseModel<Tender>>{
    return this.httpClient.get<ListResponseModel<Tender>>(this.apiUrl+"tenders/getall");
  }
}
