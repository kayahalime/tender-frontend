import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocaleStorageService } from 'src/app/services/locale-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private router: Router, private localeStorageService:LocaleStorageService,) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    
    this.loginForm = this.formBuilder.group({
      
      email: ['',Validators.required],
    
      password:['',Validators.required]
    })
   
  }
  isAuthenticated(){
  
    return this.authService.isAuthenticated()

  }

  login(){
    
    if(this.loginForm.valid){
      
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.localeStorageService.set("token", response.data.token)
        if(this.loginForm.value.email=="halime@gmail.com") {
          this.router.navigate(["/tender/list"])
        }
        else{
          this.router.navigate(["tenders"])
        }
        
        
      }, responseError=>{
        console.log("e-posta veya parola hatalı")
        
      }
      )
    }
  }
  

}
