import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Image } from '../models/image';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl="https://localhost:37281/api/"
  constructor(private httpClient:HttpClient) { }
  getImages(tenderId:number):Observable<ListResponseModel<Image>>{
    let path = this.apiUrl + "images/getimagesbytenderid?id=" + tenderId;
    return this.httpClient.get<ListResponseModel<Image>>(path);
  }

  add(tenderImageFile:FormData):Observable<ResponseModel>{
    let path = this.apiUrl + "images/add";
    return this.httpClient.post<ResponseModel>(path, tenderImageFile);
  }

  delete(image:Image):Observable<ResponseModel>{
    let path = this.apiUrl + "images/delete";
    return this.httpClient.post<ResponseModel>(path, image);
  }
  upload(imageAdd:Image): Observable<ResponseModel> {
    let newPath = this.apiUrl + "carimages";
    return this.httpClient.post<ResponseModel>(newPath,imageAdd);
  }

  update(image:Image):Observable<ResponseModel>{
    let path = this.apiUrl + "images/update";
    return this.httpClient.post<ResponseModel>(path, image);
  }
}
