import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/RegisterModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocaleStorageService } from './locale-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl= "https://localhost:37281/api/"

  constructor(private httpClient:HttpClient, private localeStorageService:LocaleStorageService,private userService:UserService) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let path = this.apiUrl + "auth/login"
    this.setCurrentUser(loginModel.email)
    return this.httpClient.post<SingleResponseModel<TokenModel>>(path, loginModel)
  }

  isAuthenticated(){
    if(this.localeStorageService.get("token")){
      
      return true;
    }
    else{
      return false;
    }
  }
  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    let path = this.apiUrl + "auth/register"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(path, registerModel)
  }
  logout(){
    this.localeStorageService.remove("token")
    this.localeStorageService.remove("user")
  }


   setCurrentUser(email:string){
    this.userService.getByEmail(email).subscribe(response => {
      let user = response.data
      this.localeStorageService.set("user", user)
    })
  }
  
}
