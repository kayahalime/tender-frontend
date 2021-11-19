import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Image } from '../models/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getImages():Observable<ListResponseModel<Image>>{
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl+"images/getall");
  }
}
