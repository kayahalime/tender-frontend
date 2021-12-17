import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bid } from '../models/bid';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getBids():Observable<ListResponseModel<Bid>>{
    return this.httpClient.get<ListResponseModel<Bid>>(this.apiUrl+"bids/getall");
  }
  add(bid:Bid){
    return this.httpClient.post(this.apiUrl+"bids/add",bid)
  }
}
