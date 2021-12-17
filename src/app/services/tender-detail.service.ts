import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
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
  getById(tenderId:number){
    let newPath=this.apiUrl+"tenders/getbyid?id="+tenderId;
    return this.httpClient.get<SingleResponseModel<TenderDetails>>(newPath);
  }
}
