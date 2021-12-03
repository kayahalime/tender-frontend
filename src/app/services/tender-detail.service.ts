import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TenderDetails } from '../models/tenderDetails';

@Injectable({
  providedIn: 'root'
})
export class TenderDetailService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getTenderDetail(tenderId:number):Observable<ListResponseModel<TenderDetails>>
  {
    let newPath = this.apiUrl+"tenders/gettenderdetail?tenderId="+tenderId
    return this.httpClient.get<ListResponseModel<TenderDetails>>(newPath)
  }
}
