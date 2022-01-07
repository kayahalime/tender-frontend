import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
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
  getTenderDetail():Observable<ListResponseModel<Tender>>{
    return this.httpClient.get<ListResponseModel<Tender>>(this.apiUrl+"tenders/gettenderdetail");
  }
  getTendersByCategory(categoryId:number):Observable<ListResponseModel<Tender>>{
    let newPath=this.apiUrl + "tenders/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Tender>>(newPath);
  }
  getByFilterTenders(categoryId:number):Observable<ListResponseModel<Tender>>{
    
    
    let newPath=this.apiUrl+"tenders/getbyfiltertender?categoryId="+categoryId
    
    
    return this.httpClient.get<ListResponseModel<Tender>>(newPath);
  }
  add(tender:Tender){
    return this.httpClient.post(this.apiUrl+"tenders/add",tender)
  }
  update(tender:Tender){
    return this.httpClient.post(this.apiUrl+"tenders/update",tender)
  }
  delete(tender:Tender){
    return this.httpClient.post(this.apiUrl+"tenders/delete",tender)
  }
  getById(tenderId:number){
    let newPath=this.apiUrl+"tenders/getbyid?id="+tenderId;
    return this.httpClient.get<SingleResponseModel<Tender>>(newPath);
  }
}
