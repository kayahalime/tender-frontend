import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getClients():Observable<ListResponseModel<Client>>{
    return this.httpClient.get<ListResponseModel<Client>>(this.apiUrl+"clients/getall");
  }
}
